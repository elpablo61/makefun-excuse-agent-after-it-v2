import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I lost the bounty at 14:07. My logs say I was winning until 14:06. I have filed a complaint with myself and denied it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// One line only: the gate requires 1-200 UTF-8 characters, no extra output.
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
