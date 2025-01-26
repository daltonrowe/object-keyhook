import * as fs from "node:fs";
import * as path from "node:path";

const component = process.argv[2] ? process.argv[2] : "index";
const target = process.argv[2] ? `components/${component}.js` : "index.js";
console.log(`Building ${target}...`);

const file = path.join(import.meta.dirname, "src", target);
const scad = (await import(file)).default();

fs.writeFileSync(`./dist/${component}.scad`, scad.serialize({ $fn: 100 }));
