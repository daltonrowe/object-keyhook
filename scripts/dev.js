const component = process.argv[2] ? process.argv[2] : "index";
const scadPath = path.join(import.meta.dirname, "dist", `${component}.scad`);

exec(`openscad ${scadPath}`);
exec(`node --watch-path=src build.js ${component}`);
