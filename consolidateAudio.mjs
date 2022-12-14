import fs from "fs-extra";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { createDirectory } from "./utils/createDirectory.mjs";
const __dirname = dirname(fileURLToPath(import.meta.url));

const writeFile = (fileName) => {
  return new Promise((resolve) => {
    createDirectory("audioOutput");
    var writeStream = fs.createWriteStream(
      path.join(__dirname, `/audioOutput/${fileName}.wav`)
    );

    const recursiveStreamWriter = (inputFiles) => {
      if (inputFiles.length === 0) {
        resolve();
        return;
      }

      const sortedFiles = inputFiles.sort((a, b) =>
        a.localeCompare(b, undefined, { numeric: true })
      );
      const nextFile = sortedFiles.shift();
      const readStream = fs.createReadStream(
        path.join(__dirname, `/temp/${fileName}/${nextFile}`)
      );

      readStream.pipe(writeStream, { end: false });
      readStream.on("end", () => {
        console.log(`${fileName}/${nextFile} chunk has been streamed!`);
        recursiveStreamWriter(inputFiles);
      });
    };

    fs.readdir(path.join(__dirname, `/temp/${fileName}/`), (_, files) =>
      recursiveStreamWriter(files)
    );
  });
};

export const consolidateAudio = () => {
  fs.readdir("temp", (_, dirs) => {
    dirs.forEach((dir) => {
      fs.readdir(path.join(__dirname, `/temp/${dir}`), () => {
        writeFile(dir).then(() => fs.remove("temp"));
      });
    });
  });
};
