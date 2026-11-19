// Entry for make.fun news-image-20261119.
// Copies the front-page image bundled in this repository to the output directory.
import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here: string = dirname(fileURLToPath(import.meta.url));
const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source: string = join(here, "entry.png");
const target: string = join(outDir, "entry.png");

if (!existsSync(source)) {
  throw new Error(`bundled image not found: ${source}`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
console.log(`wrote ${target} (${statSync(target).size} bytes)`);
