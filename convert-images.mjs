import fs from "fs";
import path from "path";
import sharp from "sharp";

const TARGET_FOLDERS = ["src/assets/images/testimonials"];
const MAX_SIZE_KB = 100;
const VALID_EXT = [".jpg", ".jpeg", ".png", ".avif", ".bmp", ".tiff", ".webp"];

function getAllFiles(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      getAllFiles(fullPath, files);
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

async function convertToWebp(filepath) {
  const ext = path.extname(filepath).toLowerCase();
  if (!VALID_EXT.includes(ext)) return;

  const dir = path.dirname(filepath);
  const name = path.basename(filepath, ext);
  const outputPath = path.join(dir, name + ".webp");
  const tempPath = path.join(dir, name + ".tmp.webp");
  const isSameFile = ext === ".webp";

  let quality = 90;
  let width = null;
  let sizeKB = Infinity;
  let buffer;

  while (true) {
    let pipeline = sharp(filepath);
    if (width) pipeline = pipeline.resize({ width, withoutEnlargement: true });
    buffer = await pipeline.webp({ quality }).toBuffer();
    sizeKB = buffer.length / 1024;

    if (sizeKB <= MAX_SIZE_KB) break;

    if (quality > 40) {
      quality -= 10;
    } else if (quality > 10) {
      quality -= 5;
    } else {
      const meta = await sharp(filepath).metadata();
      width = Math.round((width || meta.width) * 0.8);
      quality = 60;
      if (width < 200) break;
    }
  }

  fs.writeFileSync(tempPath, buffer);
  if (fs.existsSync(outputPath)) fs.unlinkSync(outputPath);
  fs.renameSync(tempPath, outputPath);

  console.log(
    `Converted: ${path.basename(filepath)} -> ${name}.webp (${sizeKB.toFixed(1)}KB, quality=${quality}${width ? `, width=${width}px` : ""})`
  );

  if (!isSameFile) {
    fs.unlinkSync(filepath);
  }
}

async function main() {
  console.log(`Running from: ${process.cwd()}\n`);
  let foundAny = false;

  for (const folder of TARGET_FOLDERS) {
    if (!fs.existsSync(folder)) {
      console.log(`Skipping (not found): ${folder}`);
      continue;
    }
    const files = getAllFiles(folder);
    for (const filepath of files) {
      foundAny = true;
      try {
        await convertToWebp(filepath);
      } catch (err) {
        console.log(`Error with ${filepath}: ${err.message}`);
      }
    }
  }

  if (!foundAny) {
    console.log("\nNo image files found. Check that TARGET_FOLDERS paths are correct");
    console.log("and that you're running this script from your project root folder.");
  } else {
    console.log("\nDone! All images converted to WEBP under 100KB (where possible).");
  }
}

main();