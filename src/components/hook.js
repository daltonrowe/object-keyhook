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
    .translate_y((hookRadius / 2) * -1)
    .rotate([-90, 90, 0]);
}

function hookAndPost() {
  return union(
    cube([postLength + hookThickness, hookWidth, hookThickness]),
    hook().translate_x((postLength / 2 + hookRadius / 2) * -1).translate_z(hookRadius)
  );
}

export default hookAndPost;
