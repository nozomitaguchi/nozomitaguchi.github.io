import { createRequire } from "node:module";
import path from "node:path";

const require = createRequire("/Users/nozomitaguchi/marumaru-calculator/package.json");
const { chromium } = require("playwright");

const url = "http://localhost:8090/";
const outputDir = "/Users/nozomitaguchi/portfolio-site";

const checks = [
  { name: "desktop", viewport: { width: 1440, height: 1100 } },
  { name: "mobile", viewport: { width: 390, height: 1200 } },
];

const browser = await chromium.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
});
const results = [];

for (const check of checks) {
  const page = await browser.newPage({ viewport: check.viewport });
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });

  await page.goto(url, { waitUntil: "networkidle" });
  await page.screenshot({
    path: path.join(outputDir, `preview-${check.name}.png`),
    fullPage: true,
  });

  const headerText = await page.locator(".identity strong").textContent();
  const creationGrid = page.locator("#creationGrid");
  const lifeLogGrid = page.locator("#lifeLogGrid");
  const writingGrid = page.locator("#writingGrid");
  const archiveTitles = await page.locator(".archive-title").evaluateAll((items) =>
    items.map((item) => item.textContent?.trim())
  );

  const creationInitialCount = await creationGrid.locator(".archive-card").count();
  const appCardHref = await creationGrid.locator('.archive-card[data-kind="app"]').first().getAttribute("href");
  const creationMoreVisible = await page.locator('[data-more-scope="creation"]').isVisible();
  if (creationMoreVisible) await page.locator('[data-more-scope="creation"]').click();
  const creationExpandedCount = await creationGrid.locator(".archive-card").count();
  await page.locator('[data-scope="creation"][data-filter="app"]').click();
  const appCount = await creationGrid.locator(".archive-card").count();
  await page.locator('[data-scope="creation"][data-filter="music"]').click();
  const musicCount = await creationGrid.locator(".archive-card").count();

  const writingInitialCount = await writingGrid.locator(".archive-card").count();
  const lifeLogCount = await lifeLogGrid.locator(".archive-card").count();
  const writingLifeLogFilterCount = await page.locator('[data-scope="writing"][data-filter="other"]').count();
  const writingMoreVisible = await page.locator('[data-more-scope="writing"]').isVisible();
  if (writingMoreVisible) await page.locator('[data-more-scope="writing"]').click();
  const writingExpandedCount = await writingGrid.locator(".archive-card").count();
  await page.locator('[data-scope="writing"][data-filter="zenn"]').click();
  const zennCount = await writingGrid.locator(".archive-card").count();
  await page.locator('[data-scope="writing"][data-filter="qiita"]').click();
  const qiitaCount = await writingGrid.locator(".archive-card").count();
  await page.locator('[data-scope="writing"][data-filter="docswell"]').click();
  const docswellCount = await writingGrid.locator(".archive-card").count();

  await page.goto(`${url}app/marumaru-calculator.html`, { waitUntil: "domcontentloaded" });
  const appTitle = await page.locator(".article-title").textContent();
  const appExternalLink = await page.locator('.article-body a[href="https://maru-maru-calc.github.io/maru-maru-calc/"]').count();
  await page.goto(`${url}blog/hokkaido-trip-en.html`, { waitUntil: "domcontentloaded" });
  const articleTitle = await page.locator(".article-title").textContent();
  const articleParagraphCount = await page.locator(".article-body p").count();
  await page.goto(`${url}music/matane.html`, { waitUntil: "domcontentloaded" });
  const musicTitle = await page.locator(".article-title").textContent();
  const musicAudioCount = await page.locator(".music-player audio").count();
  const musicSlugs = [
    "spira",
    "kochobai",
    "tengoku-ga-umareta-hi",
    "monochrome",
    "matane",
    "machiawase",
    "kataguruma",
    "dokomade-ga-boku",
  ];
  const musicPageTitles = [];
  for (const musicSlug of musicSlugs) {
    await page.goto(`${url}music/${musicSlug}.html`, { waitUntil: "domcontentloaded" });
    musicPageTitles.push(await page.locator(".article-title").textContent());
  }

  results.push({
    name: check.name,
    headerText,
    archiveTitles,
    appCardHref,
    creationInitialCount,
    creationExpandedCount,
    creationMoreVisible,
    appCount,
    musicCount,
    writingInitialCount,
    lifeLogCount,
    writingLifeLogFilterCount,
    writingExpandedCount,
    writingMoreVisible,
    zennCount,
    qiitaCount,
    docswellCount,
    appTitle,
    appExternalLink,
    articleTitle,
    articleParagraphCount,
    musicTitle,
    musicAudioCount,
    musicPageTitles,
    errors,
  });

  await page.close();
}

await browser.close();
console.log(JSON.stringify(results, null, 2));
