import { getFullAudioForFile } from "./getTiktokVoiceOver.mjs";

import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const timer = (ms) => new Promise((res) => setTimeout(res, ms));

export const readTextFromFile = (fileName) => {
  return fs.readFileSync(
    path.join(__dirname, `/videoScripts/${fileName}`),
    "utf8"
  );
};

const files = fs.readdirSync("videoScripts");

async function getFullAudioInBatch() {
  for (var i = 0; i < files.length; i++) {
    getFullAudioForFile(
      "en_male_narration",
      readTextFromFile(files[i]),
      files[i]
    );
    await timer(3000 + Math.random() * 1000);
  }
}

getFullAudioInBatch();
