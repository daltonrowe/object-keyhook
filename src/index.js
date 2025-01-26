import { cube, difference, union } from "scad-js";
import hook from "./components/hook.js";
import {
  bodyHeight,
  bodyLength,
  bodySpacing,
  bodyThickness,
  holeHeight,
  holeThickness,
  hookThickness,
  postLength,
} from "./constants.js";
import body from "./components/body.js";
import hooks from "./components/hooks.js";



export default function () {
  return union(body(), hooks());
}
