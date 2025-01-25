import { cube, union } from "scad-js";
import hook from "./components/hook.js";
import { bodySpacing, hookThickness } from "./constants.js";

export default function () {
  return union(
    cube([20, 140, hookThickness]),
    hook(),
    hook().translate_y(bodySpacing * -1),
    hook().translate_y(bodySpacing),
  );
}
