import { cube, cylinder, union } from "scad-js";
import {
  bodySpacing,
  bodyThickness,
  holeRadius,
  nothing,
} from "../constants.js";

export default function () {
  return union(
    cylinder(bodyThickness + nothing, holeRadius).translate_y(bodySpacing / 2),
    cylinder(bodyThickness + nothing, holeRadius).translate_y(
      (bodySpacing / 2) * -1,
    ),
  );
}
