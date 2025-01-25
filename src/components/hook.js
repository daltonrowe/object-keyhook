import { cube, cylinder, difference } from 'scad-js'
import { hookRadius, hookThickness, hookWidth, nothing } from '../constants.js';

export default function () {
  const hole = hookRadius - hookThickness
  const diameter = hookRadius * 2

  return difference(
    cylinder(hookWidth, hookRadius).rotate([90, 0, 0]),
    cylinder(hookWidth + nothing, hole).rotate([90, 0, 0]),
    cube([diameter, diameter, diameter]).translate_x(hookRadius),
    cube([diameter, diameter, diameter]).translate_z(hookRadius)
  ).translate_x(hookRadius - hookRadius / 2).translate_z(hookRadius - hookRadius / 2);
}
