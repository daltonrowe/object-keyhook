import { cube, cylinder, difference, union } from "scad-js";
import {
  hookRadius,
  hookThickness,
  hookWidth,
  nothing,
  postLength,
} from "../constants.js";

function hook() {
  const hole = hookRadius - hookThickness;
  const diameter = hookRadius * 2;

  return difference(
    cylinder(hookWidth, hookRadius).rotate([90, 0, 0]),
    cylinder(hookWidth + nothing, hole).rotate([90, 0, 0]),
    cube([diameter, diameter, diameter]).translate_x(hookRadius),
    cube([diameter, diameter, diameter]).translate_z(hookRadius),
  )
    .translate_x(hookRadius - hookRadius / 2)
    .translate_z(hookRadius - hookRadius / 2);
}

function hookAndPost() {
  return union(
    cube([postLength + hookThickness, hookWidth, hookThickness]).translate_x(
      (postLength * -1) + hookThickness * 2,
    ),
    hook(hookWidth, hookRadius, 0.3)
      .rotate([0, 90, 0])
      .translate_z(hookRadius / 2 + hookThickness / 2)
      .translate_x(postLength * -1),
  );
}

export default hookAndPost