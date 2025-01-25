import { cube, cylinder, difference, union } from "scad-js";
import hook from "./components/hook.js";
import {
  bodyHeight,
  bodyLength,
  bodySpacing,
  bodyThickness,
  hookThickness,
} from "./constants.js";

function hooks() {
  return union(
    hook(),
    hook().translate_y(bodySpacing * -1),
    hook().translate_y(bodySpacing),
  )
    .translate_z((bodyThickness / 2) * -1 + hookThickness / 2)
    .translate_x((bodyHeight + hookThickness * 2 - bodyHeight / 2) * -1);
}

function holes() {
  return union(
    cylinder(20, 3).translate_y(bodySpacing / 2),
    cylinder(20, 3).translate_y((bodySpacing / 2) * -1),
  );
}

function body() {
  return difference(
    difference(cube([bodyHeight, bodyLength, bodyThickness]), hooks(), holes()),
  );
}

export default function () {
  return union(body(), hooks());
}
