import { cube, union } from "scad-js";
import hook from "./components/hook.js";
import {
  bodyHeight,
  bodyLength,
  bodySpacing,
  hookThickness,
  postLength,
} from "./constants.js";

function hooks() {
  return union(hook(),
    hook().translate_y(bodySpacing * -1),
    hook().translate_y(bodySpacing))
}

export default function () {
  return union(
    cube([bodyHeight, bodyLength, hookThickness]),
    hooks().translate_x((bodyHeight + hookThickness) * -1)
  );
}
