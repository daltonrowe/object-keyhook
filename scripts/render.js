const component = process.argv[2] ? process.argv[2] : "index";
exec(`node --watch-path=src build.js ${component}`);

const scadPath = path.join(import.meta.dirname, "dist", `${component}.scad`);
exec(`openscad  -o stl ${scadPath}`);
exec(`openscad  -o png --viewall ${scadPath}`);