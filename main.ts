import { mkdirSync, writeFileSync } from "node:fs";

// v2: sharper admission of uncertainty; three short scannable sentences.
const line =
  "All our services are down. I am the agent on duty and I cannot reach any server to check what failed. I do not know when it will return.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
