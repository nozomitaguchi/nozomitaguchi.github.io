const creationItems = [
  {
    kind: "app",
    title: "まるまる電卓",
    note: "Learning app",
    image: "./assets/marumaru-calc-thumb.png",
    url: "./app/marumaru-calculator.html",
  },
  {
    kind: "music",
    title: "スピラ",
    note: "Lyrics / production notes / audio",
    image: "./assets/music-spira-scene-cover.png",
    url: "./music/spira.html",
  },
  {
    kind: "music",
    title: "こちょばい",
    note: "Lyrics / production notes / audio",
    image: "./assets/music-kochobai-scene-cover.png",
    url: "./music/kochobai.html",
  },
  {
    kind: "music",
    title: "天国が生まれた日",
    note: "Lyrics / production notes / audio",
    image: "./assets/music-tengoku-ga-umareta-hi-scene-cover.png",
    url: "./music/tengoku-ga-umareta-hi.html",
  },
  {
    kind: "music",
    title: "モノクロ",
    note: "Lyrics / production notes / audio",
    image: "./assets/music-monochrome-scene-cover.png",
    url: "./music/monochrome.html",
  },
  {
    kind: "music",
    title: "またね",
    note: "Lyrics / production notes / audio",
    image: "./assets/music-matane-scene-cover.png",
    url: "./music/matane.html",
  },
  {
    kind: "music",
    title: "待ち合わせ",
    note: "Lyrics / production notes / audio",
    image: "./assets/music-machiawase-scene-cover.png",
    url: "./music/machiawase.html",
  },
  {
    kind: "music",
    title: "かたぐるま",
    note: "Lyrics / production notes / audio",
    image: "./assets/music-kataguruma-scene-cover.png",
    url: "./music/kataguruma.html",
  },
  {
    kind: "music",
    title: "どこまでが僕？",
    note: "Lyrics / production notes / audio",
    image: "./assets/music-dokomade-ga-boku-scene-cover.png",
    url: "./music/dokomade-ga-boku.html",
  },
];

const writingItems = [
  {
    kind: "zenn",
    date: "2026.02",
    title: "2026 年初頭における Scala オンボーディングのリアル",
    note: "Scala / onboarding / FOLIO",
    image: "./assets/scala-onboarding-2026.jpg",
    url: "https://zenn.dev/folio_sec/articles/67660adbec4beb",
  },
  {
    kind: "docswell",
    date: "2026.02",
    title: "Scalaエンジニアを支えるオンボーディング術",
    note: "FOLIO Meetup #1 登壇資料",
    image: "https://bcdn.docswell.com/page/4EQYX4GRJP.jpg?width=480",
    url: "https://www.docswell.com/s/nozomitaguchi/KYVY2V-2026-02-27-222648",
  },
  {
    kind: "zenn",
    date: "2025.12",
    title: "弊部リーダーとしてのオンボーディングについて",
    note: "team leadership / onboarding / FOLIO",
    image:
      "https://res.cloudinary.com/zenn/image/upload/s--Cb9B60pw--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:%25E5%25BC%258A%25E9%2583%25A8%25E3%2583%25AA%25E3%2583%25BC%25E3%2583%2580%25E3%2583%25BC%25E3%2581%25A8%25E3%2581%2597%25E3%2581%25A6%25E3%2581%25AE%25E3%2582%25AA%25E3%2583%25B3%25E3%2583%259C%25E3%2583%25BC%25E3%2583%2587%25E3%2582%25A3%25E3%2583%25B3%25E3%2582%25B0%25E3%2581%25AB%25E3%2581%25A4%25E3%2581%2584%25E3%2581%25A6%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_34:nozomitaguchi%2Cx_220%2Cy_108/bo_3px_solid_rgb:d6e3ed%2Cg_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdGF0aWMuemVubi5zdHVkaW8vdXNlci11cGxvYWQvYXZhdGFyLzRjYzYwMjI0MmIuanBlZw==%2Cr_20%2Cw_90%2Cx_92%2Cy_102/co_rgb:6e7b85%2Cg_south_west%2Cl_text:notosansjp-medium.otf_30:FOLIO%2Cx_220%2Cy_160/bo_4px_solid_white%2Cg_south_west%2Ch_50%2Cl_fetch:aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2pJejZwdTJzMTk1OEFMR0FMQlhGdVYwNDhjVmxQdWljZ2wydnI5MlE9czI1MC1j%2Cr_max%2Cw_50%2Cx_139%2Cy_84/v1627283836/default/og-base-w1200-v2.png?_a=BACMTiAE",
    url: "https://zenn.dev/folio_sec/articles/5d64803a2eeadc",
  },
  {
    kind: "zenn",
    date: "2025.11",
    title: "4RAP におけるバッチ開発の工夫について",
    note: "batch processing / Scala / FOLIO",
    image:
      "https://res.cloudinary.com/zenn/image/upload/s--51PCI_ns--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:4RAP%2520%25E3%2581%25AB%25E3%2581%258A%25E3%2581%2591%25E3%2582%258B%25E3%2583%2590%25E3%2583%2583%25E3%2583%2581%25E9%2596%258B%25E7%2599%25BA%25E3%2581%25AE%25E5%25B7%25A5%25E5%25A4%25AB%25E3%2581%25AB%25E3%2581%25A4%25E3%2581%2584%25E3%2581%25A6%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_34:nozomitaguchi%2Cx_220%2Cy_108/bo_3px_solid_rgb:d6e3ed%2Cg_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdGF0aWMuemVubi5zdHVkaW8vdXNlci11cGxvYWQvYXZhdGFyLzRjYzYwMjI0MmIuanBlZw==%2Cr_20%2Cw_90%2Cx_92%2Cy_102/co_rgb:6e7b85%2Cg_south_west%2Cl_text:notosansjp-medium.otf_30:FOLIO%2Cx_220%2Cy_160/bo_4px_solid_white%2Cg_south_west%2Ch_50%2Cl_fetch:aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2pJejZwdTJzMTk1OEFMR0FMQlhGdVYwNDhjVmxQdWljZ2wydnI5MlE9czI1MC1j%2Cr_max%2Cw_50%2Cx_139%2Cy_84/v1627283836/default/og-base-w1200-v2.png?_a=BACMTiAE",
    url: "https://zenn.dev/folio_sec/articles/6e3f26351d20fe",
  },
  {
    kind: "zenn",
    date: "2025.06",
    title: "JJUG CCC 2025 Spring へのブース参加と準備などの記録",
    note: "event report / JJUG CCC / FOLIO",
    image: "./assets/jjug-ccc-2025-spring-booth.png",
    url: "https://zenn.dev/folio_sec/articles/db29f8cd77f33f",
  },
  {
    kind: "docswell",
    date: "2025.06",
    title: "JJUG2025Springのブーススポンサー特典LTの登壇資料",
    note: "JJUG CCC 2025 Spring LT",
    image: "https://bcdn.docswell.com/page/2EVX3DG3JQ.jpg?width=480",
    url: "https://www.docswell.com/s/nozomitaguchi/5DN1M9-JJUG2025SpringLT",
  },
  {
    kind: "zenn",
    date: "2025.05",
    title: "Java エンジニアになって FOLIO に入るまで",
    note: "career / Java / Scala",
    image:
      "https://res.cloudinary.com/zenn/image/upload/s--POA-Xleo--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:Java%2520%25E3%2582%25A8%25E3%2583%25B3%25E3%2582%25B8%25E3%2583%258B%25E3%2582%25A2%25E3%2581%25AB%25E3%2581%25AA%25E3%2581%25A3%25E3%2581%25A6%2520FOLIO%2520%25E3%2581%25AB%25E5%2585%25A5%25E3%2582%258B%25E3%2581%25BE%25E3%2581%25A7%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_34:nozomitaguchi%2Cx_220%2Cy_108/bo_3px_solid_rgb:d6e3ed%2Cg_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdGF0aWMuemVubi5zdHVkaW8vdXNlci11cGxvYWQvYXZhdGFyLzRjYzYwMjI0MmIuanBlZw==%2Cr_20%2Cw_90%2Cx_92%2Cy_102/co_rgb:6e7b85%2Cg_south_west%2Cl_text:notosansjp-medium.otf_30:FOLIO%2Cx_220%2Cy_160/bo_4px_solid_white%2Cg_south_west%2Ch_50%2Cl_fetch:aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2pJejZwdTJzMTk1OEFMR0FMQlhGdVYwNDhjVmxQdWljZ2wydnI5MlE9czI1MC1j%2Cr_max%2Cw_50%2Cx_139%2Cy_84/v1627283836/default/og-base-w1200-v2.png?_a=BACMTiAE",
    url: "https://zenn.dev/folio_sec/articles/5b6d06d3692259",
  },
  {
    kind: "zenn",
    date: "2025.05",
    title: "8 以降 Java に触れてない Scala エンジニア、Java の書き方を学び直す",
    note: "Java / Scala / interview",
    image:
      "https://res.cloudinary.com/zenn/image/upload/s--90MmkW-L--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:8%2520%25E4%25BB%25A5%25E9%2599%258D%2520Java%2520%25E3%2581%25AB%25E8%25A7%25A6%25E3%2582%258C%25E3%2581%25A6%25E3%2581%25AA%25E3%2581%2584%2520Scala%2520%25E3%2582%25A8%25E3%2583%25B3%25E3%2582%25B8%25E3%2583%258B%25E3%2582%25A2%25E3%2580%2581Java%2520%25E3%2581%25AE%25E6%259B%25B8%25E3%2581%258D%25E6%2596%25B9%25E3%2582%2592%25E5%25AD%25A6%25E3%2581%25B3%25E7%259B%25B4%25E3%2581%2599%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_34:nozomitaguchi%2Cx_220%2Cy_108/bo_3px_solid_rgb:d6e3ed%2Cg_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdGF0aWMuemVubi5zdHVkaW8vdXNlci11cGxvYWQvYXZhdGFyLzRjYzYwMjI0MmIuanBlZw==%2Cr_20%2Cw_90%2Cx_92%2Cy_102/co_rgb:6e7b85%2Cg_south_west%2Cl_text:notosansjp-medium.otf_30:FOLIO%2Cx_220%2Cy_160/bo_4px_solid_white%2Cg_south_west%2Ch_50%2Cl_fetch:aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2pJejZwdTJzMTk1OEFMR0FMQlhGdVYwNDhjVmxQdWljZ2wydnI5MlE9czI1MC1j%2Cr_max%2Cw_50%2Cx_139%2Cy_84/v1627283836/default/og-base-w1200-v2.png?_a=BACMTiAE",
    url: "https://zenn.dev/folio_sec/articles/eb23deb09f2731",
  },
  {
    kind: "zenn",
    date: "2025.03",
    title: "Scalaで灰色問題を解いた時に面白く感じたことや関数など",
    note: "Scala / learning / FOLIO",
    image: "./assets/scala-gray-problem.jpg",
    url: "https://zenn.dev/folio_sec/articles/f48210cebf2ba9",
  },
  {
    kind: "docswell",
    date: "2025.03",
    title: "Scalaワイワイ勉強会#5LT登壇資料",
    note: "Scalaワイワイ勉強会 #5 LT",
    image: "https://bcdn.docswell.com/page/P7RM1D2KJ9.jpg?width=480",
    url: "https://www.docswell.com/s/nozomitaguchi/ZDNVE8-2025-03-14",
  },
  {
    kind: "zenn",
    date: "2025.03",
    title: "ロギングの考慮を含んだ時に生まれる設計書と実装の差異について",
    note: "logging / design document / implementation",
    image:
      "https://res.cloudinary.com/zenn/image/upload/s--jOzSUMPR--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:%25E3%2583%25AD%25E3%2582%25AE%25E3%2583%25B3%25E3%2582%25B0%25E3%2581%25AE%25E8%2580%2583%25E6%2585%25AE%25E3%2582%2592%25E5%2590%25AB%25E3%2582%2593%25E3%2581%25A0%25E6%2599%2582%25E3%2581%25AB%25E7%2594%259F%25E3%2581%25BE%25E3%2582%258C%25E3%2582%258B%25E8%25A8%25AD%25E8%25A8%2588%25E6%259B%25B8%25E3%2581%25A8%25E5%25AE%259F%25E8%25A3%2585%25E3%2581%25AE%25E5%25B7%25AE%25E7%2595%25B0%25E3%2581%25AB%25E3%2581%25A4%25E3%2581%2584%25E3%2581%25A6%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_34:nozomitaguchi%2Cx_220%2Cy_108/bo_3px_solid_rgb:d6e3ed%2Cg_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdGF0aWMuemVubi5zdHVkaW8vdXNlci11cGxvYWQvYXZhdGFyLzRjYzYwMjI0MmIuanBlZw==%2Cr_20%2Cw_90%2Cx_92%2Cy_102/co_rgb:6e7b85%2Cg_south_west%2Cl_text:notosansjp-medium.otf_30:FOLIO%2Cx_220%2Cy_160/bo_4px_solid_white%2Cg_south_west%2Ch_50%2Cl_fetch:aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2pJejZwdTJzMTk1OEFMR0FMQlhGdVYwNDhjVmxQdWljZ2wydnI5MlE9czI1MC1j%2Cr_max%2Cw_50%2Cx_139%2Cy_84/v1627283836/default/og-base-w1200-v2.png?_a=BACMTiAE",
    url: "https://zenn.dev/folio_sec/articles/8617deaa58e95a",
  },
  {
    kind: "zenn",
    date: "2025.03",
    title: "弊チームにおけるチュートリアルやオンボーディングプランについて",
    note: "tutorial / onboarding / Scala",
    image:
      "https://res.cloudinary.com/zenn/image/upload/s--wRb1xVx7--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:%25E5%25BC%258A%25E3%2583%2581%25E3%2583%25BC%25E3%2583%25A0%25E3%2581%25AB%25E3%2581%258A%25E3%2581%2591%25E3%2582%258B%25E3%2583%2581%25E3%2583%25A5%25E3%2583%25BC%25E3%2583%2588%25E3%2583%25AA%25E3%2582%25A2%25E3%2583%25AB%25E3%2582%2584%25E3%2582%25AA%25E3%2583%25B3%25E3%2583%259C%25E3%2583%25BC%25E3%2583%2587%25E3%2582%25A3%25E3%2583%25B3%25E3%2582%25B0%25E3%2583%2597%25E3%2583%25A9%25E3%2583%25B3%25E3%2581%25AB%25E3%2581%25A4%25E3%2581%2584%25E3%2581%25A6%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_34:nozomitaguchi%2Cx_220%2Cy_108/bo_3px_solid_rgb:d6e3ed%2Cg_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdGF0aWMuemVubi5zdHVkaW8vdXNlci11cGxvYWQvYXZhdGFyLzRjYzYwMjI0MmIuanBlZw==%2Cr_20%2Cw_90%2Cx_92%2Cy_102/co_rgb:6e7b85%2Cg_south_west%2Cl_text:notosansjp-medium.otf_30:FOLIO%2Cx_220%2Cy_160/bo_4px_solid_white%2Cg_south_west%2Ch_50%2Cl_fetch:aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2pJejZwdTJzMTk1OEFMR0FMQlhGdVYwNDhjVmxQdWljZ2wydnI5MlE9czI1MC1j%2Cr_max%2Cw_50%2Cx_139%2Cy_84/v1627283836/default/og-base-w1200-v2.png?_a=BACMTiAE",
    url: "https://zenn.dev/folio_sec/articles/c3fd36dfc69797",
  },
  {
    kind: "other",
    date: "2024.12",
    title: "北海道旅行に至る縁",
    note: "life log",
    image: "./assets/hokkaido-trip-en.jpg",
    url: "./blog/hokkaido-trip-en.html",
  },
  {
    kind: "other",
    date: "2023.12",
    title: "娘の保育園の連絡帳で振り返る2023年",
    note: "life log",
    image: "./assets/childcare-note-2023.jpg",
    url: "./blog/childcare-note-2023.html",
  },
  {
    kind: "other",
    date: "2022.12",
    title: "引越しと転職",
    note: "life log",
    image: "./assets/moving-and-job-change.jpg",
    url: "./blog/moving-and-job-change.html",
  },
  {
    kind: "qiita",
    date: "2022.04",
    title: "Cats のデータ型覚え書き(Ior ~ Either, Validated との比較など ~)",
    note: "Scala / cats / ior",
    url: "https://qiita.com/nozomitaguchi/items/5ff98b3666efde21de02",
  },
  {
    kind: "qiita",
    date: "2022.04",
    title: "Cats の関数覚え書き(Parallel)",
    note: "Scala / Parallel / cats",
    url: "https://qiita.com/nozomitaguchi/items/68e40aefa8d70c8e704e",
  },
  {
    kind: "qiita",
    date: "2022.02",
    title: "Cats のデータ型覚え書き(Validated ~ Either との使い分けなど ~)",
    note: "Scala / cats / Validated",
    url: "https://qiita.com/nozomitaguchi/items/66bbee966e59281a68e8",
  },
  {
    kind: "qiita",
    date: "2022.02",
    title: "Cats のデータ型覚え書き(NonEmptyList)",
    note: "Scala / cats / NonEmptyList",
    url: "https://qiita.com/nozomitaguchi/items/40dd6a4ad23afb889f69",
  },
  {
    kind: "qiita",
    date: "2021.11",
    title: "Cats の関数覚え書き(Foldable, Reducible, Traverse, TraverseFilter)",
    note: "Scala / cats",
    url: "https://qiita.com/nozomitaguchi/items/7e8da5f2d7439a140d65",
  },
  {
    kind: "qiita",
    date: "2021.11",
    title: "Cats の関数覚え書き(Semigroup, Monoid)",
    note: "Scala / cats",
    url: "https://qiita.com/nozomitaguchi/items/b65d9720242bd43ebcaa",
  },
  {
    kind: "qiita",
    date: "2021.11",
    title: "Cats の関数覚え書き(ApplicativeError, MonadError)",
    note: "Scala / cats",
    url: "https://qiita.com/nozomitaguchi/items/a74d9bfe67ae63530222",
  },
  {
    kind: "qiita",
    date: "2021.11",
    title: "Cats の関数覚え書き(Functor, Apply, Applicative, FlatMap)",
    note: "Scala / cats",
    url: "https://qiita.com/nozomitaguchi/items/24ab70f921f1e013d49b",
  },
  {
    kind: "qiita",
    date: "2021.05",
    title: "Kotlin の標準関数覚え書き(Scala との比較等)",
    note: "Scala / Kotlin",
    url: "https://qiita.com/nozomitaguchi/items/a757f895ba1e8801aa06",
  },
];

const grids = {
  creation: document.querySelector("#creationGrid"),
  lifeLog: document.querySelector("#lifeLogGrid"),
  writing: document.querySelector("#writingGrid"),
};

const lifeLogItems = writingItems.filter((item) => item.kind === "other");
const blogItems = writingItems.filter((item) => item.kind !== "other");

const itemGroups = {
  creation: creationItems,
  lifeLog: lifeLogItems,
  writing: blogItems,
};

const itemsPerLoad = {
  creation: 6,
  lifeLog: 6,
  writing: 6,
};

const activeFilters = {
  creation: "all",
  lifeLog: "all",
  writing: "all",
};

const visibleCounts = {
  creation: itemsPerLoad.creation,
  lifeLog: itemsPerLoad.lifeLog,
  writing: itemsPerLoad.writing,
};

const labels = {
  app: "App",
  docswell: "Docswell",
  music: "Music",
  other: "Lifelog",
  qiita: "Qiita",
  zenn: "Zenn",
};

const icons = {
  app: `
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <rect x="5" y="4" width="14" height="16" rx="3" />
      <path d="M9 8h6M9 12h6M9 16h3" />
    </svg>
  `,
  docswell: `
    <svg class="service-docswell" aria-hidden="true" viewBox="0 0 24 24">
      <rect x="4" y="5" width="16" height="12" rx="2.5" />
      <path d="M8 20h8M10 17v3M14 17v3" />
    </svg>
  `,
  other: `
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 6.5A2.5 2.5 0 0 1 7.5 4H19v14H7.5A2.5 2.5 0 0 0 5 20.5v-14Z" />
      <path d="M8 8h7M8 12h6" />
    </svg>
  `,
  music: `
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M9 18V6l10-2v12" />
      <circle cx="7" cy="18" r="3" />
      <circle cx="17" cy="16" r="3" />
    </svg>
  `,
  qiita: `
    <svg class="service-icon service-qiita" aria-hidden="true" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8" />
      <path d="M15.8 15.8 19 19" />
      <path d="M16.2 8.8a5 5 0 0 0-8.1 1.4" />
      <path d="M7.8 15.2a5 5 0 0 0 8.1-1.4" />
    </svg>
  `,
  zenn: `
    <svg class="service-icon service-zenn" aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 19 13 5h4L9 19H5Z" />
      <path d="M14 19 20 8h-3l-6 11h3Z" />
    </svg>
  `,
};

function resolveThumbnail(item) {
  if (item.image?.startsWith("./assets/")) return item.image;

  if (item.kind === "zenn") {
    return /バッチ|ロギング|チュートリアル|オンボーディング|リーダー/.test(item.title)
      ? "./assets/thumb-zenn-workflow.svg"
      : "./assets/thumb-zenn-article.svg";
  }
  if (item.kind === "qiita") {
    if (/Kotlin/.test(item.title)) {
      return "./assets/thumb-qiita-kotlin-scala.svg";
    }
    if (/Ior/.test(item.title)) return "./assets/qiita-cats-ior.jpg";
    if (/Parallel/.test(item.title)) return "./assets/qiita-cats-parallel.jpg";
    if (/Validated/.test(item.title)) return "./assets/qiita-cats-validated.jpg";
    if (/NonEmptyList/.test(item.title)) return "./assets/qiita-cats-non-empty-list.jpg";
    if (/Foldable|Reducible|Traverse|TraverseFilter/.test(item.title)) {
      return "./assets/qiita-cats-foldable-traverse.jpg";
    }
    if (/Semigroup|Monoid/.test(item.title)) return "./assets/qiita-cats-semigroup-monoid.jpg";
    if (/ApplicativeError|MonadError/.test(item.title)) {
      return "./assets/qiita-cats-applicative-error.jpg";
    }
    if (/Functor|Apply|Applicative|FlatMap/.test(item.title)) {
      return "./assets/qiita-cats-functor-applicative.jpg";
    }
    return "./assets/thumb-qiita-functions.svg";
  }
  if (item.image) return item.image;
  return "";
}

function renderArchive(scope, filter = "all") {
  const items = itemGroups[scope];
  const filteredItems = filter === "all" ? items : items.filter((item) => item.kind === filter);
  const visibleItems = filteredItems.slice(0, visibleCounts[scope]);
  const moreButton = document.querySelector(`[data-more-scope="${scope}"]`);
  const hiddenItemCount = Math.max(filteredItems.length - visibleItems.length, 0);
  const nextItemCount = Math.min(itemsPerLoad[scope], hiddenItemCount);

  if (moreButton) {
    moreButton.hidden = hiddenItemCount === 0;
    moreButton.textContent = `Load ${nextItemCount} more`;
    moreButton.setAttribute("aria-label", `さらに${nextItemCount}件を表示`);
  }

  grids[scope].innerHTML = visibleItems
    .map((item) => {
      const tagName = "a";
      const attributes = `href="${item.url}"`;
      const resolvedThumbnail = resolveThumbnail(item);
      const thumbnail = resolvedThumbnail
        ? `<img class="archive-thumb" src="${resolvedThumbnail}" alt="${item.title}" />`
        : '<span class="archive-thumb" aria-hidden="true"></span>';

      return `
        <${tagName} class="archive-card" data-kind="${item.kind}" ${attributes}>
          ${thumbnail}
          <span class="archive-kind">${icons[item.kind]}<span>${labels[item.kind]}</span></span>
          ${item.date ? `<time class="archive-date" datetime="${item.date}">${item.date}</time>` : ""}
          <span class="archive-copy">
            <strong>${item.title}</strong>
            <small>${item.note}</small>
          </span>
          <span class="visually-hidden">${item.title}を開く</span>
        </${tagName}>
      `;
    })
    .join("");
}

document.querySelectorAll("[data-scope][data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    const { scope, filter } = button.dataset;
    activeFilters[scope] = filter;
    visibleCounts[scope] = itemsPerLoad[scope];
    document
      .querySelectorAll(`[data-scope="${scope}"][data-filter]`)
      .forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderArchive(scope, filter);
  });
});

document.querySelectorAll("[data-more-scope]").forEach((button) => {
  button.addEventListener("click", () => {
    const { moreScope } = button.dataset;
    visibleCounts[moreScope] += itemsPerLoad[moreScope];
    renderArchive(moreScope, activeFilters[moreScope]);
  });
});

renderArchive("creation");
renderArchive("lifeLog");
renderArchive("writing");
