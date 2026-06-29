# Content design

このサイトのコンテンツは Markdown で管理します。

## Directory

```text
content/
  app/
  music/
  blog/
```

一覧では `app` と `music` を Creation、`other` を Lifelog、`qiita`, `zenn`, `docswell` を Techblog として扱います。

## Shared frontmatter

```yaml
---
title: "表示タイトル"
type: "app | music | blog"
source: "blog | qiita | zenn | other"
date: "2024-12-01"
displayDate: "2024.12"
thumbnail: "./assets/example.png"
summary: "カードを hover / focus したときにだけ出す短い説明"
url: "https://example.com"
status: "published"
tags: ["archive"]
---
```

## Fields

- `title`: 必須。カードに常時表示する。
- `type`: 必須。`app`, `music`, `blog` のいずれか。`blog` は文章全体の大枠として扱う。
- `source`: `type: "blog"` のとき必須。生活ログは `other`、外部ブログは `qiita`, `zenn`, `docswell`。
- `date`: 推奨。並び順に使う。月だけの場合も `YYYY-MM-01` にする。
- `displayDate`: 任意。カードに表示する日付。今は Lifelog と Techblog で表示する。
- `thumbnail`: 推奨。カードの主役になる画像。未設定ならカテゴリ別のプレースホルダーを使う。
- `summary`: 推奨。常時表示せず、hover / focus 時の補足に使う。
- `url`: 任意。外部ページや公開物がある場合に使う。
- `status`: 必須。`published` または `draft`。
- `tags`: 任意。詳細ページや将来の検索で使う。

## Category-specific optional fields

App:

```yaml
role: "design / engineering / writing"
platform: "web"
repositoryUrl: ""
```

Music:

```yaml
audioUrl: "./assets/audio/example.mp3"
audioTitle: "表示用の曲名"
```

本文には `## Lyrics` と `## Production notes` を置き、歌詞と制作ノートを同じ Markdown で管理します。

Techblog / Lifelog:

```yaml
sourceUrl: ""
series: ""
```

## Rule of thumb

カードは「画像、タイトル、種別、日付」だけで成立させます。説明文は必要なときだけ現れる補助情報として扱います。

## Public URLs

内部記事は Markdown から静的 HTML を生成し、以下の URL で公開します。

```text
/app/app-slug.html
/blog/article-slug.html
/music/song-slug.html
```

各ページには `canonical`、OGP、Twitter Card のメタタグを記事ごとに埋め込みます。
