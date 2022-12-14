export const splitStringIntoChunks = (str) => {
  return str
    .split(".")
    .reduce(
      (result, word) => {
        const lastString = result[result.length - 1];
        if (lastString.length + word.length + 1 < 200) {
          result[result.length - 1] = `${lastString} ${word}`;
        } else {
          result.push(word + "...");
        }
        return result;
      },
      [""]
    )
    .map((str) => str.trim());
};
