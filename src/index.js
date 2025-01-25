import { cube, union } from "scad-js";
import hook from "./components/hook.js";
import { hookRadius, hookWidth, bodySpacing, hookThickness, postLength } from "./constants.js";


function hookAndPost() {
  return union(
    cube([postLength + hookThickness, hookWidth, hookThickness]).translate_x(-20),
    hook(hookWidth, hookRadius, 0.3)
      .rotate([0, 90, 0])
      .translate_z(hookRadius / 2 + hookThickness / 2)
      .translate_x(postLength * -1),
  );
}

export default function () {
  return union(
    cube([20, 140, hookThickness]),
    hookAndPost(),
    hookAndPost().translate_y(bodySpacing * -1),
    hookAndPost().translate_y(bodySpacing),
  );
}
