import fs from "fs-extra";

export const createDirectory = (directoryTitle, subDirectory) => {
  if (
    !fs.existsSync(`./${directoryTitle}/`) &&
    fs.mkdirSync(`./${directoryTitle}/`)
  );
  if (!subDirectory) return;
  if (
    !fs.existsSync(`./${directoryTitle}/${subDirectory}`) &&
    fs.mkdirSync(`./${directoryTitle}/${subDirectory}`)
  );
};
