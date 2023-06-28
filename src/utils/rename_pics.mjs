import * as path from "path";
import { promises as fs } from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const renameFiles = async (folderPath) => {
  try {
    const files = await fs.readdir(folderPath);

    for (const file of files) {
      console.log(file);
      const fileInfo = path.parse(file);
      const oldPath = path.join(folderPath, file);
      const set = fileInfo.name.split("_")[0];
      const number = fileInfo.name.split("_")[1];
      const fixedSet = setAbbrev(set);

      if (set && number) {
        
        const fixedNumber = number.startsWith("TG")? "TG" + number.substring(3, 5): number;
        const newPath = path.join(
          folderPath,
          `${set}_${fixedNumber}${fileInfo.ext}`
        );
        await fs.rename(oldPath, newPath);
      }
    }
  } catch (error) {
    // Handle error here
    console.log(error);
  }
};

renameFiles("ptcg-sandbox/public/img").catch((error) => {
  console.log(error);
});

const setAbbrev = (set) => {
  switch (set) {
    case "sv1":
      return "SVI";
    case "sv2":
      return "PAL";
    case "sve":
      return "ENERGY";
    case "svbsp":
      return "SVP";
  }
};
