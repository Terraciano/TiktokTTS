import { getFullAudioForFile } from "./getTiktokVoiceOver.mjs";

import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const timer = (ms) => new Promise((res) => setTimeout(res, ms));

export const readTextFromFile = (fileName) => {
  return fs.readFileSync(
    path.join(__dirname, `/inputTextFiles/${fileName}`),
    "utf8"
  );
};

const files = fs.readdirSync("inputTextFiles");

 const getFullAudioInBatch= async ()=> {
   for (const file of files){
     getFullAudioForFile(
         "en_male_narration",
         readTextFromFile(file),
         file
     );
     await timer(3000 + Math.random() * 1000);
   }
}

getFullAudioInBatch().then(()=>console.log('\x1b[42m','Done!'))
