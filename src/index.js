import { cube, difference, union } from "scad-js";
import hook from "./components/hook.js";
import {
  bodyHeight,
  bodyLength,
  bodySpacing,
  bodyThickness,
  holeHeight,
  holeThickness,
  holeWidth,
  hookThickness,
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
    cube([holeHeight, holeWidth, holeThickness]).translate_y(bodySpacing / 2),
    cube([holeHeight, holeWidth, holeThickness]).translate_y(
      (bodySpacing / 2) * -1,
    ),
  ).translate_z((bodyThickness / 2) * -1 + holeThickness / 2);
}

function body() {
  return difference(
    difference(cube([bodyHeight, bodyLength, bodyThickness]), hooks(), holes()),
  );
}

function keyhook() {
  return union(body(), hooks().debug());
}

export default body;
