"""
TapCraft "TC" hero keychain — rounded-square, 3-layer construction.

    [ Top   ─ rounded square, raised "TC" + ∞ relief, corner hole ]
              |
    [ NTAG  ─ NFC inlay (FR4 substrate + copper coil + IC) ]
              |
    [ Base  ─ rounded square, circular pocket for the NTAG, corner hole ]

Run:
    blender --background --python scripts/blender/hero-keychain-tc.py
Output:
    public/models/hero-keychain-tc.glb

Set `explode_gap_mm` > 0 for an exploded marketing render; leave at 0 for
the assembled hero shot. To swap the placeholder "TC" + ∞ for the real
stylised logo, see the SVG-import note in build_top().
"""

import bpy
import bmesh
import math
import os

# ---------------------------------------------------------------------------
# PARAMS
# ---------------------------------------------------------------------------

PARAMS = {
    # plate footprint (rounded square, plan view)
    "plate_size_mm": 40.0,
    "plate_corner_radius_mm": 8.0,
    "plate_edge_bevel_mm": 0.4,        # softens the top/bottom rims
    "plate_segments": 28,              # quarter-arc resolution per corner

    # layer thicknesses
    "base_thickness_mm": 2.2,
    "top_thickness_mm": 1.8,

    # NTAG215 inlay
    "tag_radius_mm": 12.5,             # 25mm disc, standard NTAG215 form
    "tag_substrate_thickness_mm": 0.25,
    "antenna_loops": 6,
    "antenna_min_radius_mm": 3.0,
    "antenna_max_radius_mm": 11.0,
    "antenna_thickness_mm": 0.18,
    "antenna_height_mm": 0.18,
    "ic_size_mm": 1.8,
    "ic_height_mm": 0.35,

    # base pocket (recess that seats the NTAG)
    "pocket_clearance_mm": 0.4,        # radial slop for press-fit
    "pocket_floor_mm": 0.7,            # solid base remaining beneath pocket

    # keyring hole (upper-right corner, matches reference render)
    "hole_radius_mm": 2.0,
    "hole_inset_mm": 6.0,              # centre-to-corner distance

    # "TC" relief — cursive script. Default font path is the macOS
    # bundled cursive; falls back to Blender's default if not found.
    "tc_text": "TC",
    "tc_font_path": "/System/Library/Fonts/Apple Chancery.ttf",
    "tc_size_mm": 16.0,
    "tc_raise_mm": 0.7,
    "tc_offset_xy_mm": (0.0, 3.0),

    # Infinity (∞) relief
    "inf_glyph": "∞",
    "inf_font_path": None,
    "inf_size_mm": 11.0,
    "inf_raise_mm": 0.6,
    "inf_offset_xy_mm": (0.0, -6.0),

    # exploded view — 0 = assembled, >0 = z-gap between layers
    "explode_gap_mm": 0.0,

    # materials
    "shell_color": (0.07, 0.07, 0.085, 1.0),       # gunmetal near-black
    "shell_roughness": 0.30,
    "shell_metallic": 0.85,

    "tc_color": (0.94, 0.94, 0.96, 1.0),           # chrome white
    "tc_roughness": 0.12,
    "tc_metallic": 1.0,

    "inf_color": (0.10, 0.40, 0.92, 1.0),          # glossy electric blue
    "inf_roughness": 0.18,
    "inf_metallic": 0.7,

    "tag_substrate_color": (0.92, 0.78, 0.58, 1.0),
    "tag_substrate_roughness": 0.6,
    "antenna_color": (0.86, 0.50, 0.22, 1.0),
    "antenna_roughness": 0.22,
    "ic_color": (0.04, 0.04, 0.04, 1.0),
    "ic_roughness": 0.4,

    "ring_color": (0.78, 0.80, 0.84, 1.0),
    "ring_roughness": 0.25,
    "ring_metallic": 0.95,

    "output": "/Users/clupa/Documents/projects/tapcraft/tapcraft-v3/public/models/hero-keychain-tc.glb",
}

MM = 0.001  # mm -> metres (glTF units)
EPS = 0.005 * MM  # ~5µm offset to avoid z-fighting between coincident faces


# ---------------------------------------------------------------------------
# helpers
# ---------------------------------------------------------------------------

def clear_scene():
    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.object.delete(use_global=False)
    for block in (bpy.data.meshes, bpy.data.materials, bpy.data.images,
                  bpy.data.curves, bpy.data.fonts):
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


def add_cylinder(name, radius, depth, location=(0, 0, 0), verts=128):
    bpy.ops.mesh.primitive_cylinder_add(
        vertices=verts, radius=radius, depth=depth, location=location
    )
    obj = bpy.context.active_object
    obj.name = name
    return obj


def add_torus(name, major_r, minor_r, location, rotation=(0, 0, 0),
              major_segs=96, minor_segs=12):
    bpy.ops.mesh.primitive_torus_add(
        major_radius=major_r, minor_radius=minor_r,
        location=location, rotation=rotation,
        major_segments=major_segs, minor_segments=minor_segs,
    )
    obj = bpy.context.active_object
    obj.name = name
    return obj


def rounded_square_plate(name, size_mm, corner_r_mm, thickness_mm, segments=24):
    """Extruded rounded-square prism, bottom on local z=0, centred on x/y.
    Built directly via bmesh — cylinder+bevel can't produce a true rounded
    square cleanly."""
    size = size_mm * MM
    radius = corner_r_mm * MM
    thickness = thickness_mm * MM
    h = size / 2

    me = bpy.data.meshes.new(name)
    bm = bmesh.new()
    corner_data = [
        ( h - radius,  h - radius, 0.0),               # NE
        (-h + radius,  h - radius, math.pi / 2),       # NW
        (-h + radius, -h + radius, math.pi),           # SW
        ( h - radius, -h + radius, 3 * math.pi / 2),   # SE
    ]
    pts = []
    for cx, cy, a0 in corner_data:
        for i in range(segments + 1):
            a = a0 + (math.pi / 2) * (i / segments)
            pts.append((cx + radius * math.cos(a), cy + radius * math.sin(a)))

    bot = [bm.verts.new((x, y, 0.0)) for x, y in pts]
    top = [bm.verts.new((x, y, thickness)) for x, y in pts]
    bm.faces.new(list(reversed(bot)))   # outward-facing bottom
    bm.faces.new(top)
    n = len(bot)
    for i in range(n):
        j = (i + 1) % n
        bm.faces.new([bot[i], top[i], top[j], bot[j]])

    bm.normal_update()
    bm.to_mesh(me)
    bm.free()

    obj = bpy.data.objects.new(name, me)
    bpy.context.collection.objects.link(obj)
    return obj


def bevel_edges(obj, width_mm, segments=4, angle_deg=30):
    bpy.context.view_layer.objects.active = obj
    mod = obj.modifiers.new(name="Bevel", type="BEVEL")
    mod.width = width_mm * MM
    mod.segments = segments
    mod.limit_method = "ANGLE"
    mod.angle_limit = math.radians(angle_deg)
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
    # Blender 4.1+ replaced use_auto_smooth with shade_smooth_by_angle.
    if hasattr(bpy.ops.object, "shade_smooth_by_angle"):
        try:
            bpy.ops.object.shade_smooth_by_angle(angle=math.radians(angle_deg))
        except RuntimeError:
            pass
    elif hasattr(obj.data, "use_auto_smooth"):
        obj.data.use_auto_smooth = True
        obj.data.auto_smooth_angle = math.radians(angle_deg)


def add_text_relief(name, body, size_mm, raise_mm, surface_xyz,
                    font_path=None):
    """Extruded text sitting with its BOTTOM face on `surface_xyz`.

    Blender's text.data.extrude is double-sided around the curve plane
    (±extrude), so we halve the requested raise and offset the origin to
    keep the geometry entirely above the surface — avoids z-fighting and
    keeps the relief height predictable."""
    x, y, z_surface = surface_xyz
    half = raise_mm * MM / 2
    bpy.ops.object.text_add(location=(x, y, z_surface + half + EPS))
    t = bpy.context.active_object
    t.name = name
    t.data.body = body
    t.data.size = size_mm * MM
    t.data.extrude = half
    t.data.align_x = "CENTER"
    t.data.align_y = "CENTER"
    if font_path and os.path.exists(font_path):
        try:
            t.data.font = bpy.data.fonts.load(font_path)
        except RuntimeError:
            pass
    bpy.ops.object.convert(target="MESH")
    return t


# ---------------------------------------------------------------------------
# layers
# ---------------------------------------------------------------------------

def hole_xy(p):
    """World x/y of the keyring hole centre (top-right corner)."""
    half = p["plate_size_mm"] / 2 * MM
    inset = p["hole_inset_mm"] * MM
    return (half - inset, half - inset)


def build_base(z_bottom, p):
    base = rounded_square_plate(
        "BaseShell",
        size_mm=p["plate_size_mm"],
        corner_r_mm=p["plate_corner_radius_mm"],
        thickness_mm=p["base_thickness_mm"],
        segments=p["plate_segments"],
    )
    base.location.z = z_bottom

    # NTAG pocket — recessed cylinder, leaving `pocket_floor_mm` of solid
    pocket_r = (p["tag_radius_mm"] + p["pocket_clearance_mm"]) * MM
    pocket_depth = (p["base_thickness_mm"] - p["pocket_floor_mm"]) * MM
    pocket = add_cylinder(
        "PocketCutter",
        radius=pocket_r,
        depth=pocket_depth + 0.2 * MM,  # overshoot for clean boolean cut
        location=(0, 0, z_bottom + p["pocket_floor_mm"] * MM + pocket_depth / 2),
    )
    boolean(base, pocket, op="DIFFERENCE")

    # keyring hole — full through
    hx, hy = hole_xy(p)
    hole = add_cylinder(
        "BaseHoleCutter",
        radius=p["hole_radius_mm"] * MM,
        depth=(p["base_thickness_mm"] + 2) * MM,
        location=(hx, hy, z_bottom + p["base_thickness_mm"] / 2 * MM),
        verts=48,
    )
    boolean(base, hole, op="DIFFERENCE")

    bevel_edges(base, width_mm=p["plate_edge_bevel_mm"], segments=4)
    shade_smooth(base)
    return base


def build_ntag(z_bottom, p):
    parts = []

    substrate = add_cylinder(
        "NTAGSubstrate",
        radius=p["tag_radius_mm"] * MM,
        depth=p["tag_substrate_thickness_mm"] * MM,
        location=(0, 0, z_bottom + p["tag_substrate_thickness_mm"] / 2 * MM),
    )
    shade_smooth(substrate)
    parts.append(substrate)

    loops = p["antenna_loops"]
    r_min = p["antenna_min_radius_mm"] * MM
    r_max = p["antenna_max_radius_mm"] * MM
    z_loop = z_bottom + (p["tag_substrate_thickness_mm"]
                         + p["antenna_height_mm"] / 2) * MM
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
        shade_smooth(ring)
        parts.append(ring)

    ic = add_cylinder(
        "NTAGChip",
        radius=p["ic_size_mm"] * MM / 2,
        depth=p["ic_height_mm"] * MM,
        location=(0, 0, z_loop),
        verts=4,  # 4-vert cylinder = square IC
    )
    ic.rotation_euler[2] = math.pi / 4
    parts.append(ic)
    return parts


def build_top(z_bottom, p):
    top = rounded_square_plate(
        "TopShell",
        size_mm=p["plate_size_mm"],
        corner_r_mm=p["plate_corner_radius_mm"],
        thickness_mm=p["top_thickness_mm"],
        segments=p["plate_segments"],
    )
    top.location.z = z_bottom

    hx, hy = hole_xy(p)
    hole = add_cylinder(
        "TopHoleCutter",
        radius=p["hole_radius_mm"] * MM,
        depth=(p["top_thickness_mm"] + 2) * MM,
        location=(hx, hy, z_bottom + p["top_thickness_mm"] / 2 * MM),
        verts=48,
    )
    boolean(top, hole, op="DIFFERENCE")
    bevel_edges(top, width_mm=p["plate_edge_bevel_mm"], segments=4)
    shade_smooth(top)

    # ──────────────────────────────────────────────────────────────────
    # Placeholder relief — system cursive + Unicode ∞.
    #
    # For the production-grade stylised "TC" and infinity from the
    # reference render, export them as SVG (e.g. from Figma), then:
    #
    #     bpy.ops.import_curve.svg(filepath="/path/to/tc_logo.svg")
    #     for o in bpy.context.selected_objects:
    #         o.data.extrude = p["tc_raise_mm"] * MM / 2
    #         o.location.z = top_face_z + p["tc_raise_mm"] * MM / 2 + EPS
    #         bpy.ops.object.select_all(action="DESELECT")
    #         o.select_set(True); bpy.context.view_layer.objects.active = o
    #         bpy.ops.object.convert(target="MESH")
    #
    # The SVG path will retain the cursive flourishes and the small
    # decorative mark beside the infinity that the text primitive can't.
    # ──────────────────────────────────────────────────────────────────
    top_face_z = z_bottom + p["top_thickness_mm"] * MM
    tcx, tcy = p["tc_offset_xy_mm"]
    ifx, ify = p["inf_offset_xy_mm"]

    tc = add_text_relief(
        "TC_Relief",
        body=p["tc_text"],
        size_mm=p["tc_size_mm"],
        raise_mm=p["tc_raise_mm"],
        surface_xyz=(tcx * MM, tcy * MM, top_face_z),
        font_path=p["tc_font_path"],
    )
    inf = add_text_relief(
        "Infinity_Relief",
        body=p["inf_glyph"],
        size_mm=p["inf_size_mm"],
        raise_mm=p["inf_raise_mm"],
        surface_xyz=(ifx * MM, ify * MM, top_face_z),
        font_path=p["inf_font_path"],
    )
    return top, tc, inf


def build_ring(z_center, p):
    """Split-ring torus, parked just outside the corner hole."""
    half = p["plate_size_mm"] / 2 * MM
    inset = p["hole_inset_mm"] * MM
    hx, hy = (half - inset, half - inset)

    # Push the ring outward along the corner diagonal so it sits clear
    # of the plate edge, mirroring the reference render.
    direction = math.atan2(hy, hx)
    offset = 4.0 * MM
    rx = hx + offset * math.cos(direction)
    ry = hy + offset * math.sin(direction)

    ring = add_torus(
        "KeyRing",
        major_r=3.0 * MM,
        minor_r=0.5 * MM,
        location=(rx, ry, z_center),
        rotation=(math.pi / 2, 0, direction),
    )
    shade_smooth(ring)
    return ring


# ---------------------------------------------------------------------------
# build / export
# ---------------------------------------------------------------------------

def build():
    p = PARAMS
    clear_scene()

    shell_mat = make_material("Shell", p["shell_color"],
                              p["shell_roughness"], p["shell_metallic"])
    tc_mat = make_material("TC", p["tc_color"],
                           p["tc_roughness"], p["tc_metallic"])
    inf_mat = make_material("Infinity", p["inf_color"],
                            p["inf_roughness"], p["inf_metallic"])
    substrate_mat = make_material("TagSubstrate", p["tag_substrate_color"],
                                  p["tag_substrate_roughness"], 0.0)
    antenna_mat = make_material("Antenna", p["antenna_color"],
                                p["antenna_roughness"], 1.0)
    ic_mat = make_material("IC", p["ic_color"], p["ic_roughness"], 0.2)
    ring_mat = make_material("Ring", p["ring_color"],
                             p["ring_roughness"], p["ring_metallic"])

    # Stack the three layers in z. Assembled = NTAG sits in the pocket and
    # the top plate sits flush on the base. Exploded = each layer lifted
    # by `explode_gap_mm` for the marketing breakdown shot.
    gap = p["explode_gap_mm"] * MM
    base_z = 0.0
    if gap > 0:
        ntag_z = p["base_thickness_mm"] * MM + gap
        top_z  = ntag_z + (p["tag_substrate_thickness_mm"]
                           + p["antenna_height_mm"]) * MM + gap
    else:
        ntag_z = p["pocket_floor_mm"] * MM
        top_z  = p["base_thickness_mm"] * MM

    base = build_base(base_z, p)
    base.data.materials.append(shell_mat)

    ntag_parts = build_ntag(ntag_z, p)
    ntag_parts[0].data.materials.append(substrate_mat)
    for r in ntag_parts[1:-1]:
        r.data.materials.append(antenna_mat)
    ntag_parts[-1].data.materials.append(ic_mat)

    top, tc, inf = build_top(top_z, p)
    top.data.materials.append(shell_mat)
    tc.data.materials.append(tc_mat)
    inf.data.materials.append(inf_mat)

    ring_z = top_z + p["top_thickness_mm"] / 2 * MM
    ring = build_ring(ring_z, p)
    ring.data.materials.append(ring_mat)

    # Parent everything under a single root so the GLB has one node tree
    bpy.ops.object.empty_add(type="PLAIN_AXES", location=(0, 0, 0))
    root = bpy.context.active_object
    root.name = "HeroKeychainTC"
    for child in (base, *ntag_parts, top, tc, inf, ring):
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
    )
    print(f"[hero-keychain-tc] wrote {abs_path}")


if __name__ == "__main__":
    build()
    export(PARAMS["output"])
