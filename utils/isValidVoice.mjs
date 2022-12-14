import { allVoices } from "../voices.mjs";

export const isValidVoice = (commandInput) =>
  Object.values(allVoices).includes(commandInput) && commandInput;
