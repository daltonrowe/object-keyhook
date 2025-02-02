const component = process.argv[2];
const watchArgs = ['--watch-path=src', './scripts/build.js']
if (component) watchArgs.push(component)

const watch = spawn('node', watchArgs);

const scripts = {
  "watch": {
    color: '32',
  },
  "scad": {
    color: '35',
  }
};

function logData(command, data) {
  process.stdout.write(`\x1b[${scripts[command].color}m${data}\x1b[0m`);
}

watch.stdout.on("data", (data) => logData('watch', data));
watch.stderr.on("data", (data) => logData('watch', data));

const scadPath = path.join(import.meta.dirname, '..', "dist", `${component ? component : 'index'}.scad`);
const scad = spawn(`openscad`, [scadPath], { shell: true });

scad.stdout.on("data", (data) => logData('scad', data));
scad.stderr.on("data", (data) => logData('scad', data));