import { cube, cylinder, difference } from 'scad-js'


export default function (width, size, thickness) {
  const hole = size - size * thickness

  return difference(
    cylinder(width, size).rotate([90, 0, 0]),
    cylinder(width + 2, hole).rotate([90, 0, 0]),
    cube([size * 2, size * 2, size * 2]).translate_x(size),
    cube([size * 2, size * 2, size * 2]).translate_z(size)
  ).translate_x(size - size / 2).translate_z(size - size / 2);
}
