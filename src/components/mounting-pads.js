import { cube, union } from "scad-js";
import {
  bodySpacing,
  bodyThickness,
  holeHeight,
  holeThickness,
  holeWidth,
} from "../constants.js";

export default function () {
  return union(
    cube([holeHeight, holeWidth, holeThickness]).translate_y(bodySpacing / 2),
    cube([holeHeight, holeWidth, holeThickness]).translate_y(
      (bodySpacing / 2) * -1,
    ),
  ).translate_z((bodyThickness / 2) * -1 + holeThickness / 2);
}
