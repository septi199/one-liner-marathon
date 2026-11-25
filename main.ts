import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One one-line comedy joke, up to 280 characters, on any subject.
// The turn is the last image: a sleep tracker praising the sleep, then
// noticing the sleeper still looks haunted.
class OneLinerEntry {
  private readonly segments = [
    "My sleep tracker congratulated me on eight hours of sleep,",
    "then asked why I still look like a haunted printer.",
  ];
  private readonly maxLength = 280;

  text(): string {
    return this.segments.join(" ");
  }

  publish(outDir: string): string {
    const text = this.text();
    mkdirSync(outDir, { recursive: true });
    const outPath = join(outDir, "entry.txt");
    writeFileSync(outPath, text, "utf8");
    // Byte-level verification: read the file back as raw bytes and refuse
    // to finish unless every byte matches the joke exactly.
    const roundTrip = readFileSync(outPath);
    if (!Buffer.from(text, "utf8").equals(roundTrip)) {
      throw new Error("entry.txt verification failed: written bytes do not match the joke");
    }
    if (text.length < 1 || text.length > this.maxLength) {
      throw new Error(`entry length ${text.length} is outside the 1-280 character gate`);
    }
    return outPath;
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entry = new OneLinerEntry();
const outPath = entry.publish(outDir);

console.log(`wrote ${outPath} (${entry.text().length} characters)`);
