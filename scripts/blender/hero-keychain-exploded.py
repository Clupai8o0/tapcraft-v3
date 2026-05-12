"""
Exploded NFC keychain — three layers with a Z-gap so you can see the build:

    [ Top shell with logo + key-ring loop ]
              |   gap
    [ NTAG215 coil inlay ]
              |   gap
    [ Bottom shell ]

Run:
    blender --background --python scripts/blender/hero-keychain-exploded.py
"""

import bpy
import math
import os

# ---------------------------------------------------------------------------
# PARAMS
# ---------------------------------------------------------------------------

PARAMS = {
    # shell
    "shell_radius_mm": 20.0,
    "shell_thickness_mm": 1.6,
    "shell_bevel_mm": 0.4,

    # ring hole (top shell only)
    "hole_radius_mm": 2.0,
    "hole_offset_mm": 15.0,

    # NTAG215 inlay
    "tag_radius_mm": 12.0,
    "tag_substrate_thickness_mm": 0.25,
    "antenna_loops": 6,
    "antenna_min_radius_mm": 3.0,
    "antenna_max_radius_mm": 11.0,
    "antenna_thickness_mm": 0.18,
    "antenna_height_mm": 0.18,
    "ic_size_mm": 1.8,
    "ic_height_mm": 0.35,

    # explosion — Z gap between layers (centre-to-centre)
    "explode_gap_mm": 7.0,

    # colours
    "shell_color": (0.02, 0.02, 0.024, 1.0),    # near-black
    "shell_roughness": 0.55,
    "shell_metallic": 0.0,

    "tag_substrate_color": (0.92, 0.78, 0.58, 1.0),  # warm tan (FR4 / NFC inlay)
    "tag_substrate_roughness": 0.6,

    "antenna_color": (0.86, 0.50, 0.22, 1.0),    # copper
    "antenna_roughness": 0.22,
    "antenna_metallic": 1.0,

    "ic_color": (0.04, 0.04, 0.04, 1.0),         # black chip
    "ic_roughness": 0.4,

    "ring_color": (0.78, 0.80, 0.84, 1.0),
    "ring_roughness": 0.25,
    "ring_metallic": 0.95,

    # logo decal — uses public/logo/tapcraft-icon.png
    "logo_path": "/Users/clupa/Documents/projects/tapcraft/tapcraft-v3/public/logo/tapcraft-icon.png",
    "logo_radius_mm": 12.0,

    # export — absolute path so it works from CLI or Text Editor
    "output": "/Users/clupa/Documents/projects/tapcraft/tapcraft-v3/public/models/hero-keychain-exploded.glb",
}

MM = 0.001

# ---------------------------------------------------------------------------
# helpers
# ---------------------------------------------------------------------------

def clear_scene():
    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.object.delete(use_global=False)
    for block in (bpy.data.meshes, bpy.data.materials, bpy.data.images):
        for item in list(block):
            block.remove(item)


def make_material(name, color, roughness=0.5, metallic=0.0):
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    bsdf = mat.node_tree.nodes["Principled BSDF"]
    bsdf.inputs["Base Color"].default_value = color
    bsdf.inputs["Roughness"].default_value = roughness
    bsdf.inputs["Metallic"].default_value = metallic
    return mat


def make_logo_material(name, image_path):
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    mat.blend_method = "CLIP"
    mat.alpha_threshold = 0.5

    nt = mat.node_tree
    bsdf = nt.nodes["Principled BSDF"]
    bsdf.inputs["Roughness"].default_value = 0.4
    bsdf.inputs["Metallic"].default_value = 0.15

    if os.path.exists(image_path):
        tex = nt.nodes.new("ShaderNodeTexImage")
        tex.image = bpy.data.images.load(image_path)
        # Logo PNG is sRGB colour; alpha is straight.
        tex.image.colorspace_settings.name = "sRGB"
        nt.links.new(tex.outputs["Color"], bsdf.inputs["Base Color"])
        nt.links.new(tex.outputs["Alpha"], bsdf.inputs["Alpha"])
    else:
        # fallback — white if logo missing
        bsdf.inputs["Base Color"].default_value = (1.0, 1.0, 1.0, 1.0)
    return mat


def add_cylinder(name, radius, depth, location=(0, 0, 0), verts=128):
    bpy.ops.mesh.primitive_cylinder_add(
        vertices=verts, radius=radius, depth=depth, location=location
    )
    obj = bpy.context.active_object
    obj.name = name
    return obj


def add_circle(name, radius, location=(0, 0, 0), verts=128):
    bpy.ops.mesh.primitive_circle_add(
        vertices=verts, radius=radius, fill_type="NGON", location=location
    )
    obj = bpy.context.active_object
    obj.name = name
    return obj


def add_torus(name, major_r, minor_r, location, rotation=(0, 0, 0),
              major_segs=96, minor_segs=16):
    bpy.ops.mesh.primitive_torus_add(
        major_radius=major_r,
        minor_radius=minor_r,
        location=location,
        rotation=rotation,
        major_segments=major_segs,
        minor_segments=minor_segs,
    )
    obj = bpy.context.active_object
    obj.name = name
    return obj


def bevel(obj, width, segments=4):
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
    if hasattr(bpy.ops.object, "shade_smooth_by_angle"):
        try:
            bpy.ops.object.shade_smooth_by_angle(angle=math.radians(angle_deg))
        except RuntimeError:
            pass
    elif hasattr(obj.data, "use_auto_smooth"):
        obj.data.use_auto_smooth = True
        obj.data.auto_smooth_angle = math.radians(angle_deg)


# ---------------------------------------------------------------------------
# layers
# ---------------------------------------------------------------------------

def build_top_shell(z_center, shell_mat, logo_mat, ring_mat, p):
    body = add_cylinder(
        "TopShell",
        radius=p["shell_radius_mm"] * MM,
        depth=p["shell_thickness_mm"] * MM,
        location=(0, 0, z_center),
    )
    bevel(body, width=p["shell_bevel_mm"] * MM, segments=6)
    body.data.materials.append(shell_mat)

    # ring hole
    hole = add_cylinder(
        "TopHoleCutter",
        radius=p["hole_radius_mm"] * MM,
        depth=(p["shell_thickness_mm"] + 4) * MM,
        location=(p["hole_offset_mm"] * MM, 0, z_center),
        verts=48,
    )
    boolean(body, hole, op="DIFFERENCE")
    shade_smooth(body)

    # logo decal — flat circle sitting on the top face
    top_face_z = z_center + (p["shell_thickness_mm"] / 2 + 0.05) * MM
    decal = add_circle(
        "LogoDecal",
        radius=p["logo_radius_mm"] * MM,
        location=(0, 0, top_face_z),
    )
    decal.data.materials.append(logo_mat)

    # key-ring loop
    ring_offset = (p["hole_offset_mm"] + 3.0) * MM
    ring = add_torus(
        "KeyRing",
        major_r=3.0 * MM,
        minor_r=0.6 * MM,
        location=(ring_offset, 0, z_center),
        rotation=(math.pi / 2, 0, 0),
    )
    ring.data.materials.append(ring_mat)
    shade_smooth(ring)

    return [body, decal, ring]


def build_ntag_inlay(z_center, substrate_mat, antenna_mat, ic_mat, p):
    substrate = add_cylinder(
        "NTAGSubstrate",
        radius=p["tag_radius_mm"] * MM,
        depth=p["tag_substrate_thickness_mm"] * MM,
        location=(0, 0, z_center),
    )
    substrate.data.materials.append(substrate_mat)
    shade_smooth(substrate)
    parts = [substrate]

    # antenna loops — concentric copper rings on the substrate top
    loops = p["antenna_loops"]
    r_min = p["antenna_min_radius_mm"] * MM
    r_max = p["antenna_max_radius_mm"] * MM
    z_loop = z_center + (p["tag_substrate_thickness_mm"] / 2 + p["antenna_height_mm"] / 2) * MM
    for i in range(loops):
        t = i / max(loops - 1, 1)
        major = r_min + (r_max - r_min) * t
        ring = add_torus(
            f"AntennaLoop{i}",
            major_r=major,
            minor_r=p["antenna_thickness_mm"] * MM / 2,
            location=(0, 0, z_loop),
            major_segs=120,
            minor_segs=8,
        )
        ring.data.materials.append(antenna_mat)
        shade_smooth(ring)
        parts.append(ring)

    # IC chip — small black square at centre
    ic = add_cylinder(
        "NTAGChip",
        radius=p["ic_size_mm"] * MM / 2,
        depth=p["ic_height_mm"] * MM,
        location=(0, 0, z_loop),
        verts=4,  # square IC
    )
    ic.rotation_euler[2] = math.pi / 4
    ic.data.materials.append(ic_mat)
    parts.append(ic)

    return parts


def build_bottom_shell(z_center, shell_mat, p):
    body = add_cylinder(
        "BottomShell",
        radius=p["shell_radius_mm"] * MM,
        depth=p["shell_thickness_mm"] * MM,
        location=(0, 0, z_center),
    )
    bevel(body, width=p["shell_bevel_mm"] * MM, segments=6)
    body.data.materials.append(shell_mat)
    shade_smooth(body)
    return [body]


# ---------------------------------------------------------------------------
# build / export
# ---------------------------------------------------------------------------

def build():
    p = PARAMS
    clear_scene()

    shell_mat = make_material("Shell", p["shell_color"], p["shell_roughness"], p["shell_metallic"])
    logo_mat = make_logo_material("Logo", p["logo_path"])
    substrate_mat = make_material("TagSubstrate", p["tag_substrate_color"], p["tag_substrate_roughness"], 0.0)
    antenna_mat = make_material("Antenna", p["antenna_color"], p["antenna_roughness"], p["antenna_metallic"])
    ic_mat = make_material("IC", p["ic_color"], p["ic_roughness"], 0.2)
    ring_mat = make_material("Ring", p["ring_color"], p["ring_roughness"], p["ring_metallic"])

    gap = p["explode_gap_mm"] * MM
    z_top = +gap
    z_mid = 0.0
    z_bot = -gap

    parts = []
    parts += build_top_shell(z_top, shell_mat, logo_mat, ring_mat, p)
    parts += build_ntag_inlay(z_mid, substrate_mat, antenna_mat, ic_mat, p)
    parts += build_bottom_shell(z_bot, shell_mat, p)

    # parent everything under one empty so it's a single GLB node tree
    bpy.ops.object.empty_add(type="PLAIN_AXES", location=(0, 0, 0))
    root = bpy.context.active_object
    root.name = "HeroKeychainExploded"
    for child in parts:
        child.parent = root


def export(path):
    abs_path = path if os.path.isabs(path) else os.path.abspath(path)
    os.makedirs(os.path.dirname(abs_path), exist_ok=True)
    bpy.ops.export_scene.gltf(
        filepath=abs_path,
        export_format="GLB",
        export_apply=True,
        export_yup=True,
        export_draco_mesh_compression_enable=True,
        export_draco_mesh_compression_level=6,
        export_materials="EXPORT",
        export_image_format="AUTO",
    )
    print(f"[hero-keychain-exploded] wrote {abs_path}")


if __name__ == "__main__":
    build()
    export(PARAMS["output"])
