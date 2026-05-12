"""
Generate the TapCraft hero NFC keychain as a GLB.

Run:
    blender --background --python scripts/blender/hero-keychain.py
Output:
    public/models/hero-keychain.glb

Tweak the PARAMS block below — everything is parametric.
"""

import bpy
import bmesh
import math
import os
from mathutils import Vector

# ---------------------------------------------------------------------------
# PARAMS
# ---------------------------------------------------------------------------

PARAMS = {
    # disc body (millimetres, scaled to metres at export)
    "radius_mm": 20.0,         # 40mm diameter disc
    "thickness_mm": 3.0,
    "bevel_mm": 0.6,
    "bevel_segments": 6,

    # lanyard / keyring hole
    "hole_radius_mm": 2.0,
    "hole_offset_mm": 15.0,    # distance from centre to hole centre

    # logo plate (a raised inner ring — swap for an SVG extrude later)
    "inset_radius_mm": 14.0,
    "inset_height_mm": 0.4,

    # NFC chip indicator (small embossed dot on the back, signals 'this taps')
    "chip_radius_mm": 3.0,
    "chip_height_mm": 0.3,

    # materials
    "body_color": (0.08, 0.09, 0.11, 1.0),     # near-black, matches --paper-deep
    "body_roughness": 0.55,
    "body_metallic": 0.0,
    "accent_color": (0.38, 0.55, 0.95, 1.0),   # brand-ish blue, retune to taste
    "accent_roughness": 0.35,
    "accent_metallic": 0.2,
    "ring_color": (0.78, 0.80, 0.84, 1.0),     # brushed steel-ish
    "ring_roughness": 0.25,
    "ring_metallic": 0.95,

    # export — absolute path so it works whether you run via CLI or from
    # Blender's Text Editor (where CWD is "/").
    "output": "/Users/clupa/Documents/projects/tapcraft/tapcraft-v3/public/models/hero-keychain.glb",
}

MM = 0.001  # mm -> metres (glTF units)

# ---------------------------------------------------------------------------
# helpers
# ---------------------------------------------------------------------------

def clear_scene():
    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.object.delete(use_global=False)
    for block in (bpy.data.meshes, bpy.data.materials, bpy.data.images):
        for item in list(block):
            block.remove(item)


def make_material(name, color, roughness, metallic):
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    bsdf = mat.node_tree.nodes["Principled BSDF"]
    bsdf.inputs["Base Color"].default_value = color
    bsdf.inputs["Roughness"].default_value = roughness
    bsdf.inputs["Metallic"].default_value = metallic
    return mat


def add_cylinder(name, radius, depth, location=(0, 0, 0), verts=128):
    bpy.ops.mesh.primitive_cylinder_add(
        vertices=verts, radius=radius, depth=depth, location=location
    )
    obj = bpy.context.active_object
    obj.name = name
    return obj


def bevel(obj, width, segments):
    bpy.context.view_layer.objects.active = obj
    mod = obj.modifiers.new(name="Bevel", type="BEVEL")
    mod.width = width
    mod.segments = segments
    mod.limit_method = "ANGLE"
    mod.angle_limit = math.radians(30)
    bpy.ops.object.modifier_apply(modifier=mod.name)


def boolean(target, cutter, op="DIFFERENCE"):
    bpy.context.view_layer.objects.active = target
    mod = target.modifiers.new(name="Bool", type="BOOLEAN")
    mod.operation = op
    mod.object = cutter
    mod.solver = "EXACT"
    bpy.ops.object.modifier_apply(modifier=mod.name)
    bpy.data.objects.remove(cutter, do_unlink=True)


def shade_smooth(obj, angle_deg=45):
    bpy.context.view_layer.objects.active = obj
    obj.select_set(True)
    bpy.ops.object.shade_smooth()
    # Blender 4.1+ removed mesh.use_auto_smooth / auto_smooth_angle.
    # The modern equivalent is shade_smooth_by_angle, which falls back
    # cleanly on older versions via the legacy attributes.
    if hasattr(bpy.ops.object, "shade_smooth_by_angle"):
        try:
            bpy.ops.object.shade_smooth_by_angle(angle=math.radians(angle_deg))
        except RuntimeError:
            pass
    elif hasattr(obj.data, "use_auto_smooth"):
        obj.data.use_auto_smooth = True
        obj.data.auto_smooth_angle = math.radians(angle_deg)


# ---------------------------------------------------------------------------
# build
# ---------------------------------------------------------------------------

def build():
    p = PARAMS
    clear_scene()

    body_mat = make_material("Body", p["body_color"], p["body_roughness"], p["body_metallic"])
    accent_mat = make_material("Accent", p["accent_color"], p["accent_roughness"], p["accent_metallic"])
    ring_mat = make_material("Ring", p["ring_color"], p["ring_roughness"], p["ring_metallic"])

    # --- disc body ---
    body = add_cylinder(
        "Body",
        radius=p["radius_mm"] * MM,
        depth=p["thickness_mm"] * MM,
    )
    bevel(body, width=p["bevel_mm"] * MM, segments=p["bevel_segments"])
    body.data.materials.append(body_mat)

    # --- hole ---
    hole_cutter = add_cylinder(
        "HoleCutter",
        radius=p["hole_radius_mm"] * MM,
        depth=(p["thickness_mm"] + 2) * MM,
        location=(p["hole_offset_mm"] * MM, 0, 0),
        verts=48,
    )
    boolean(body, hole_cutter, op="DIFFERENCE")

    # --- inset logo plate (front face, raised) ---
    inset = add_cylinder(
        "LogoPlate",
        radius=p["inset_radius_mm"] * MM,
        depth=p["inset_height_mm"] * MM,
        location=(0, 0, (p["thickness_mm"] / 2 + p["inset_height_mm"] / 2) * MM),
    )
    bevel(inset, width=0.15 * MM, segments=4)
    inset.data.materials.append(accent_mat)
    shade_smooth(inset)

    # --- NFC chip dot (back face, embossed) ---
    chip = add_cylinder(
        "ChipDot",
        radius=p["chip_radius_mm"] * MM,
        depth=p["chip_height_mm"] * MM,
        location=(0, 0, -(p["thickness_mm"] / 2 + p["chip_height_mm"] / 2) * MM),
        verts=48,
    )
    bevel(chip, width=0.1 * MM, segments=3)
    chip.data.materials.append(accent_mat)
    shade_smooth(chip)

    # --- split ring (torus around the hole) ---
    bpy.ops.mesh.primitive_torus_add(
        major_radius=3.0 * MM,
        minor_radius=0.6 * MM,
        location=((p["hole_offset_mm"] + 3.0) * MM, 0, 0),
        rotation=(math.pi / 2, 0, 0),
        major_segments=48,
        minor_segments=12,
    )
    ring = bpy.context.active_object
    ring.name = "Ring"
    ring.data.materials.append(ring_mat)
    shade_smooth(ring)

    shade_smooth(body)

    # parent everything to an empty so it exports as one node
    bpy.ops.object.empty_add(type="PLAIN_AXES", location=(0, 0, 0))
    root = bpy.context.active_object
    root.name = "HeroKeychain"
    for child in (body, inset, chip, ring):
        child.parent = root


def setup_export():
    # +Y up at export so it matches glTF convention; Blender handles this for us
    pass


def resolve_repo_root():
    # When run via `blender --python <path>` __file__ is set.
    # When run from Blender's Text Editor it isn't, so fall back to the
    # loaded text block's filepath, then to CWD.
    candidates = []
    if "__file__" in globals():
        candidates.append(__file__)
    try:
        text = bpy.context.space_data.text  # Text Editor context
        if text and text.filepath:
            candidates.append(bpy.path.abspath(text.filepath))
    except AttributeError:
        pass
    for c in candidates:
        # scripts/blender/<this>.py -> repo root is two dirs up
        return os.path.abspath(os.path.join(os.path.dirname(c), "..", ".."))
    return os.getcwd()


def export(path):
    if os.path.isabs(path):
        abs_path = path
    else:
        abs_path = os.path.join(resolve_repo_root(), path)
    os.makedirs(os.path.dirname(abs_path), exist_ok=True)
    bpy.ops.export_scene.gltf(
        filepath=abs_path,
        export_format="GLB",
        export_apply=True,
        export_yup=True,
        export_draco_mesh_compression_enable=True,
        export_draco_mesh_compression_level=6,
        export_materials="EXPORT",
    )
    print(f"[hero-keychain] wrote {abs_path}")


if __name__ == "__main__":
    build()
    setup_export()
    export(PARAMS["output"])
