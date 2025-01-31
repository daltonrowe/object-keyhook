import * as fs from "node:fs";
import * as path from "node:path";

const start = performance.now();

const component = process.argv[2] ? process.argv[2] : "index";
const target = component ? `components/${component}.js` : "index.js";

const file = path.join(import.meta.dirname, "src", target);
const scad = (await import(file)).default();

const scadStr = scad.serialize({ $fn: 100 });

fs.writeFileSync(`./dist/${component}.scad`, scadStr);

const end = performance.now();
console.log(`Built ${component} in ${end - start}ms`);
