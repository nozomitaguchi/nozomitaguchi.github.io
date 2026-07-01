import fs from "node:fs/promises";
import path from "node:path";

const rootDir = path.resolve(new URL("..", import.meta.url).pathname);
const siteUrl = "https://nozomitaguchi.github.io";
const siteTitle = "おなかの上のパソコンより";
const cacheKey = "card-render-1";

const pageImages = {
  "hokkaido-trip-en": "/assets/hokkaido-trip-en.jpg",
  "childcare-note-2023": "/assets/childcare-note-2023.jpg",
  "moving-and-job-change": "/assets/moving-and-job-change.jpg",
  "scala-with-cats-notes": "/assets/thumb-qiita-functions.png",
  "securities-sales-representative": "/assets/thumb-zenn-article.png",
  "public-page-implementation": "/assets/thumb-zenn-article.png",
  "marumaru-calculator": "/assets/marumaru-calc-thumb.png",
  spira: "/assets/music-spira-scene-cover.png",
  kochobai: "/assets/music-kochobai-scene-cover.png",
  "tengoku-ga-umareta-hi": "/assets/music-tengoku-ga-umareta-hi-scene-cover.png",
  monochrome: "/assets/music-monochrome-scene-cover.png",
  matane: "/assets/music-matane-scene-cover.png",
  machiawase: "/assets/music-machiawase-scene-cover.png",
  kataguruma: "/assets/music-kataguruma-scene-cover.png",
  "dokomade-ga-boku": "/assets/music-dokomade-ga-boku-scene-cover.png",
};

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function parseFrontmatter(markdown) {
  const match = markdown.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) return { data: {}, body: markdown };

  const data = {};
  match[1].split("\n").forEach((line) => {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) return;

    const key = line.slice(0, separatorIndex).trim();
    const rawValue = line.slice(separatorIndex + 1).trim();
    try {
      data[key] = JSON.parse(rawValue);
    } catch {
      data[key] = rawValue;
    }
  });

  return { data, body: markdown.slice(match[0].length).trim() };
}

function firstParagraph(markdown) {
  return markdown
    .replace(/^#{1,6}\s+.+$/gm, "")
    .split(/\n{2,}/)
    .map((block) => block.trim().replace(/\s+/g, " "))
    .find(Boolean);
}

function absoluteUrl(value) {
  if (!value) return `${siteUrl}/assets/og-default.png`;
  if (/^https?:\/\//.test(value)) return value;
  const normalized = value.startsWith("./") ? value.slice(1) : value;
  return `${siteUrl}${normalized.startsWith("/") ? normalized : `/${normalized}`}`;
}

function renderPage({ slug, section, data, body }) {
  const title = data.title || slug;
  const description = data.summary || firstParagraph(body) || `${title} | ${siteTitle}`;
  const canonicalPath = `/${section}/${slug}.html`;
  const canonicalUrl = `${siteUrl}${canonicalPath}`;
  const ogImage = absoluteUrl(data.thumbnail || pageImages[slug]);
  const ogType = section === "music" ? "music.song" : "article";
  const backLabel = section === "blog" ? "Blog" : "Creation";
  const backHref = section === "blog" ? "/#blog" : "/#archive";

  return `<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(title)} | ${escapeHtml(siteTitle)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <meta name="theme-color" content="#f4f0e7" />
    <link rel="canonical" href="${escapeHtml(canonicalUrl)}" />
    <meta property="og:site_name" content="${escapeHtml(siteTitle)}" />
    <meta property="og:type" content="${escapeHtml(ogType)}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:url" content="${escapeHtml(canonicalUrl)}" />
    <meta property="og:image" content="${escapeHtml(ogImage)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${escapeHtml(ogImage)}" />
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32.png" />
    <link rel="icon" type="image/png" sizes="64x64" href="/assets/favicon.png" />
    <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Zen+Kaku+Gothic+New:wght@300;400;500;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="/styles.css?v=${cacheKey}" />
  </head>
  <body>
    <a class="skip-link" href="#main">本文へ移動</a>

    <header class="site-header" id="top">
      <a class="identity" href="/" aria-label="トップへ戻る">
        <img src="/assets/logo.jpg" alt="" />
        <strong>nozomitaguchi</strong>
      </a>

      <nav class="site-nav" aria-label="外部リンク">
        <a class="brand-link brand-x" href="https://x.com/nozomitaguchi" aria-label="X">
          <span class="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img">
              <path d="M4.5 4h3.9l4.4 6 5-6h1.8l-5.9 7.1 6.3 8.9h-3.9l-4.8-6.7L5.7 20H3.9l6.5-7.8L4.5 4Zm2.7 1.3 9.6 13.4h.9L8.1 5.3h-.9Z" />
            </svg>
          </span>
        </a>
        <a class="brand-link brand-facebook" href="https://www.facebook.com/nozomi.taguchi" aria-label="Facebook">
          <span class="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img">
              <path d="M14.4 8.2V6.8c0-.7.5-1 1.2-1h1.8V3h-2.6c-2.8 0-4.3 1.6-4.3 4.2v1H8v3.1h2.5V21h3.9v-9.7H17l.4-3.1h-3Z" />
            </svg>
          </span>
        </a>
        <a class="brand-link brand-instagram" href="https://www.instagram.com/nozomitaguchi/" aria-label="Instagram">
          <span class="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img">
              <rect x="4.2" y="4.2" width="15.6" height="15.6" rx="4.7" />
              <circle cx="12" cy="12" r="3.8" />
              <circle cx="16.6" cy="7.4" r="1" />
            </svg>
          </span>
        </a>
      </nav>
    </header>

    <main class="article-shell" id="main">
      <article class="article-view" data-post="${escapeHtml(slug)}" aria-live="polite">
        <a class="article-back" href="${backHref}">${backLabel}</a>
        <header class="article-head">
          <time class="article-date" datetime="${escapeHtml(data.date || "")}">${escapeHtml(data.displayDate || "")}</time>
          <h1 class="article-title">${escapeHtml(title)}</h1>
        </header>
        <div class="article-body"></div>
      </article>
    </main>

    <footer class="site-footer">
      <span>&copy; 2026 nozomitaguchi</span>
    </footer>

    <script src="/article.js?v=${cacheKey}"></script>
  </body>
</html>
`;
}

async function generateSection(section) {
  const sourceDir = path.join(rootDir, "content", section);
  const files = (await fs.readdir(sourceDir)).filter((file) => file.endsWith(".md"));
  await fs.mkdir(path.join(rootDir, section), { recursive: true });

  for (const file of files) {
    const slug = file.replace(/\.md$/, "");
    const markdown = await fs.readFile(path.join(sourceDir, file), "utf8");
    const { data, body } = parseFrontmatter(markdown);
    if (data.status && data.status !== "published") continue;

    await fs.writeFile(path.join(rootDir, section, `${slug}.html`), renderPage({ slug, section, data, body }));
  }
}

await fs.rm(path.join(rootDir, "blog"), { recursive: true, force: true });
await fs.rm(path.join(rootDir, "music"), { recursive: true, force: true });
await fs.rm(path.join(rootDir, "app"), { recursive: true, force: true });
await generateSection("blog");
await generateSection("music");
await generateSection("app");
