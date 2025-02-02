import * as path from "node:path"
import { spawn } from "node:child_process"

export const srcPath = path.join(import.meta.dirname, '..', "src")
export const distPath = path.join(import.meta.dirname, '..', "dist");

export function runCommand(command) {
  const { cmd, args, env, color } = command

  function logColor(data) {
    process.stdout.write(`\x1b[${color}m${data.toString()}\x1b[0m`);
  }

  const child = spawn(cmd, args, { env: { ...process.env, ...env } });

  child.stdout.on("data", (data) => logColor(data));
  child.stderr.on("data", (data) => logColor(data));

  return child
}