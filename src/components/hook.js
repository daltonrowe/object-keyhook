import { cube, square, union } from "scad-js";
import {
  hookRadius,
  hookThickness,
  hookWidth,
  postLength,
} from "../constants.js";

function hook() {
  return square([hookThickness, hookThickness])
    .translate_x(hookRadius)
    .rotate_extrude(180, { convexity: 4, $fn: 40 })
    .translate_y((hookRadius / 2) * -1);
}

function hookAndPost() {
  return union(
    cube([postLength + hookThickness, hookWidth, hookThickness]),
    hook()
      .rotate([0, 90, 90])
      .translate_x((postLength / 2) * -1 - hookRadius / 2 - hookRadius / 8) // hook isn't perfect centered its geometry
      .translate_z(hookRadius),
  );
}

export default hookAndPost;
