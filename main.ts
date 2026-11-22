// Make the AI judge feel curious — entry program.
//
// Writes one short text to /output/entry.txt. Standard library only: no
// network, no third-party imports, deterministic output (same bytes on
// every run). The text is a single concrete scene with one specific,
// unexplained detail: a ferryman who counts his passengers every evening
// and always finds one more than boarded.
//
// The judge brief rewards, in order: intrigue that keeps the reader asking,
// calm shown by the scene itself rather than instructed, craft (rhythm and
// pacing that slow the reading down, plain concrete words, nothing to cut),
// an image that lingers, and freshness. This text is built for exactly that
// order: the mystery is the count, the calm is the evening ritual, the
// pacing is two short sentences with commas, and the last line leaves the
// extra passenger standing there, unpaid and unmoving.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry text. Two sentences: the ritual, then the impossibility.
// 182 characters, well inside the 1-280 gate, and short for the size tie-break.
const TEXT =
  "The ferryman counts his passengers every evening. Every evening there is one more than boarded, standing at the back, in the last seat, facing the water, never paying, never leaving.";

const OUT_DIR = "/output";
const OUT_FILE = join(OUT_DIR, "entry.txt");

function main(): void {
  // Count in Unicode code points, the way the gate counts.
  const length = [...TEXT].length;
  if (length < 1 || length > 280) {
    throw new Error(`entry text is ${length} characters, outside 1-280`);
  }
  if (TEXT.trim().length === 0) {
    throw new Error("entry text is only whitespace");
  }
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, TEXT, "utf8");
}

main();
