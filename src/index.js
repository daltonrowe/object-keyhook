import { cube, cylinder, difference, union } from "scad-js";
import hook from "./components/hook.js";
import {
  bodyHeight,
  bodyLength,
  bodySpacing,
  bodyThickness,
  holeRadius,
  hookThickness,
  nothing,
  postLength,
} from "./constants.js";

function hooks() {
  return union(
    hook(),
    hook().translate_y(bodySpacing * -1),
    hook().translate_y(bodySpacing),
  )
    .translate_z((bodyThickness / 2) * -1 + hookThickness / 2)
    .translate_x((postLength / 2) * -1);
}

function holes() {
  return union(
    cylinder(bodyThickness + nothing, holeRadius).translate_y(bodySpacing / 2),
    cylinder(bodyThickness + nothing, holeRadius).translate_y(
      (bodySpacing / 2) * -1,
    ),
  );
}

function body() {
  return difference(
    difference(cube([bodyHeight, bodyLength, bodyThickness]), hooks(), holes()),
  );
}

function keyhook() {
  return union(body(), hooks().debug());
}

export default keyhook;
