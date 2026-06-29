import { createRequire } from "node:module";
import fs from "node:fs/promises";
import path from "node:path";

const require = createRequire("/Users/nozomitaguchi/marumaru-calculator/package.json");
const { chromium } = require("playwright");

const rootDir = path.resolve(new URL("..", import.meta.url).pathname);
const svgFiles = [
  "thumb-zenn-article",
  "thumb-qiita-functions",
];

const browser = await chromium.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
});

const page = await browser.newPage({ viewport: { width: 1200, height: 720 }, deviceScaleFactor: 1 });

for (const file of svgFiles) {
  const svgPath = path.join(rootDir, "assets", `${file}.svg`);
  const pngPath = path.join(rootDir, "assets", `${file}.png`);
  const svg = await fs.readFile(svgPath, "utf8");
  await page.setContent(
    `<!doctype html><html><body style="margin:0;background:#f4f0e7">${svg}</body></html>`,
    { waitUntil: "load" },
  );
  await page.screenshot({ path: pngPath, clip: { x: 0, y: 0, width: 1200, height: 720 } });
}

await browser.close();
