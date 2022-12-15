import fetch from "node-fetch";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs-extra";
const __dirname = dirname(fileURLToPath(import.meta.url));
import { consolidateAudio } from "./consolidateAudio.mjs";
import { createDirectory } from "./utils/createDirectory.mjs";
import { splitStringIntoChunks } from "./utils/splitStringIntoChunks.mjs";
import * as dotenv from "dotenv";

dotenv.config();
const sessionId = process.env.SESSIONID;
if (!sessionId || !sessionId.length)
  throw new Error(
    "No Session ID found - Please go to README.MD and follow instructions"
  );

export const getTiktokVoiceOverChunk = async (textSpeaker, reqText) => {
  const endpoint = `https://api.tiktokv.com/media/api/text/speech/invoke/?text_speaker=${textSpeaker}&req_text=${reqText}&speaker_map_type=0&aid=1233`;
  const headers = {
    "User-Agent":
      "com.zhiliaoapp.musically/2022600030 (Linux; U; Android 7.1.2; es_ES; SM-G988N; Build/NRD90M;tt-ok/3.12.13.1)",
    Cookie: `sessionid=${sessionId}`,
  };

  const response = await fetch(endpoint, {
    method: "POST",
    headers: headers,
  });
  return response.json();
};

const writeAudioChunkFile = async (data, index, fileTitle) => {
  if (!data.data) {
    console.log(data);
    return;
  }
  createDirectory("temp", fileTitle);
  const audio = data.data.v_str;
  const wavUrl = `"data:audio/wav;base64,${audio}"`;
  const buffer = Buffer.from(wavUrl.split("base64,")[1], "base64");

  fs.writeFileSync(
    path.join(__dirname, `/temp/${fileTitle}/${index}.wav`),
    buffer
  );
  console.log(`${fileTitle}/${index}.wav created sucessfully!`);
};

export const getFullAudioForFile = (textSpeaker, reqText, fileTitle) => {
  if (fileTitle === ".DS_Store") return;
  const textChunks = splitStringIntoChunks(reqText)
    .map((item) =>
      item.replaceAll("\n", "").replaceAll("#", "number").replaceAll("\r", "")
    )
    .filter((item) => !!item.length);

  const promises = textChunks.map((chunk, index) =>
    getTiktokVoiceOverChunk(textSpeaker, chunk).then((data) => {
      writeAudioChunkFile(data, index, fileTitle.replace(".txt", ""));
    })
  );

  Promise.all(promises).then(() => consolidateAudio());
};
