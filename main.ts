// SPDX-License-Identifier: MIT
import { writeFileSync, mkdirSync } from "node:fs";

const TIP =
  "Tip: The progress bar isn't lying — it's just politely saying 'I have no idea either.' Breathe; it will finish when it finishes, not a second sooner.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TIP + "\n");
