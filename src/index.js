import { cube, union } from 'scad-js';
import hook from './components/hook.js';

const hookSize = 15
const hookWidth = 5

const thickness = 5
const spacing = 50


function hookAndPost() {
  return union(cube([35, hookWidth, thickness]).translate_x(-20),
    hook(hookWidth, hookSize, .3).rotate([0, 90, 0]).translate_z(hookSize / 2 + thickness / 2).translate_x(-30))
}

export default function () {
  return union(
    cube([20, 140, thickness]), hookAndPost(), hookAndPost().translate_y(spacing * -1), hookAndPost().translate_y(spacing)
  )
}
