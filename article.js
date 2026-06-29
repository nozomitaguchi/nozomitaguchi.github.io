const posts = {
  "hokkaido-trip-en": "/content/blog/hokkaido-trip-en.md",
  "childcare-note-2023": "/content/blog/childcare-note-2023.md",
  "scala-with-cats-notes": "/content/blog/scala-with-cats-notes.md",
  "securities-sales-representative": "/content/blog/securities-sales-representative.md",
  "moving-and-job-change": "/content/blog/moving-and-job-change.md",
  "marumaru-calculator": "/content/app/marumaru-calculator.md",
  spira: "/content/music/spira.md",
  kochobai: "/content/music/kochobai.md",
  matane: "/content/music/matane.md",
  "tengoku-ga-umareta-hi": "/content/music/tengoku-ga-umareta-hi.md",
  machiawase: "/content/music/machiawase.md",
  monochrome: "/content/music/monochrome.md",
  kataguruma: "/content/music/kataguruma.md",
  "dokomade-ga-boku": "/content/music/dokomade-ga-boku.md",
};

const article = document.querySelector(".article-view");
const backNode = document.querySelector(".article-back");
const titleNode = document.querySelector(".article-title");
const dateNode = document.querySelector(".article-date");
const bodyNode = document.querySelector(".article-body");

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
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

  return {
    data,
    body: markdown.slice(match[0].length).trim(),
  };
}

function stripLeadingTitle(markdown, title) {
  if (!title) return markdown;
  const pattern = new RegExp(`^#{1,2}\\s+${escapeRegExp(title)}\\s*\\n+`);
  return markdown.replace(pattern, "");
}

function renderInline(value) {
  const escaped = escapeHtml(value);
  return escaped.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>');
}

function renderMarkdown(markdown) {
  const codeBlocks = [];
  const withoutCode = markdown.replace(/```([\s\S]*?)```/g, (_, code) => {
    const token = `@@CODE_BLOCK_${codeBlocks.length}@@`;
    codeBlocks.push(`<pre><code>${escapeHtml(code.trim())}</code></pre>`);
    return token;
  });

  return withoutCode
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block) => {
      const codeMatch = block.match(/^@@CODE_BLOCK_(\d+)@@$/);
      if (codeMatch) return codeBlocks[Number(codeMatch[1])];

      const headingMatch = block.match(/^(#{1,4})\s+(.+)$/);
      if (headingMatch) {
        const level = Math.min(headingMatch[1].length + 1, 4);
        return `<h${level}>${renderInline(headingMatch[2])}</h${level}>`;
      }

      const lines = block.split("\n");
      if (lines.every((line) => line.startsWith("- "))) {
        return `<ul>${lines.map((line) => `<li>${renderInline(line.slice(2))}</li>`).join("")}</ul>`;
      }

      if (lines.every((line) => line.startsWith("> "))) {
        return `<blockquote>${lines.map((line) => `<p>${renderInline(line.slice(2))}</p>`).join("")}</blockquote>`;
      }

      return `<p>${lines.map(renderInline).join("<br />")}</p>`;
    })
    .join("\n");
}

function renderAudio(data) {
  if (!data.audioUrl) return "";

  const title = data.audioTitle || data.title || "Audio";
  const audioUrl = data.audioUrl.startsWith("./assets/") ? data.audioUrl.replace("./assets/", "/assets/") : data.audioUrl;
  const jacketUrl = data.jacketUrl?.startsWith("./assets/")
    ? data.jacketUrl.replace("./assets/", "/assets/")
    : data.jacketUrl;
  const jacket = jacketUrl
    ? `
      <figure class="music-jacket">
        <img src="${escapeHtml(jacketUrl)}" alt="${escapeHtml(title)} のジャケット" />
      </figure>
    `
    : "";
  return `
    <section class="music-player" aria-label="音源視聴">
      ${jacket}
      <div class="music-player-label">${escapeHtml(title)}</div>
      <audio controls preload="metadata" src="${escapeHtml(audioUrl)}"></audio>
    </section>
  `;
}

function resolveSlug() {
  const embeddedSlug = article?.dataset.post;
  if (embeddedSlug) return embeddedSlug;

  const pathParts = window.location.pathname.replace(/\.html$/, "").split("/").filter(Boolean);
  if ((pathParts[0] === "blog" || pathParts[0] === "music" || pathParts[0] === "app") && pathParts[1]) {
    return pathParts[1];
  }

  return new URLSearchParams(window.location.search).get("post");
}

async function loadArticle() {
  const slug = resolveSlug();
  const path = posts[slug];

  if (!path) {
    article.classList.add("is-error");
    titleNode.textContent = "Not found";
    bodyNode.innerHTML = "<p>記事が見つかりませんでした。</p>";
    return;
  }

  const response = await fetch(path);
  if (!response.ok) throw new Error(`Failed to load ${path}`);

  const { data, body } = parseFrontmatter(await response.text());
  const title = data.title || "Untitled";
  document.title = `${title} | おなかの上のパソコンより`;
  article.dataset.type = data.type || "blog";
  if (backNode) {
    backNode.textContent = data.type === "blog" ? "Blog" : "Creation";
    backNode.href = data.type === "blog" ? "/#blog" : "/#archive";
  }
  titleNode.textContent = title;
  dateNode.textContent = data.displayDate || "";
  dateNode.dateTime = data.date || "";
  bodyNode.innerHTML = `${renderAudio(data)}${renderMarkdown(stripLeadingTitle(body, title))}`;
}

loadArticle().catch((error) => {
  console.error(error);
  article.classList.add("is-error");
  titleNode.textContent = "Error";
  bodyNode.innerHTML = "<p>記事を読み込めませんでした。</p>";
});
