import { getFullAudioForFile } from "./getTiktokVoiceOver.mjs";

import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { isValidVoice } from "./utils/isValidVoice.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const timer = (ms) => new Promise((res) => setTimeout(res, ms));

const commanderVoice = isValidVoice(process.argv.slice(2)[0]);

export const readTextFromFile = (fileName) => {
  return fs.readFileSync(
    path.join(__dirname, `/inputTextFiles/${fileName}`),
    "utf8"
  );
};

const files = fs.readdirSync("inputTextFiles");

const getFullAudioInBatch = async () => {
  for (const file of files) {
    getFullAudioForFile(
      isValidVoice(commanderVoice) || "en_male_narration",
      readTextFromFile(file),
      file
    );
    await timer(3000 + Math.random() * 1000);
  }
};

getFullAudioInBatch().then(() => {
  if (!commanderVoice)
    console.log(
      "\x1b[43m",
      "Warning! the audio files were generated with the default voice (en_male_narration)."
    );
  console.log("\x1b[42m", "Done!");
});
