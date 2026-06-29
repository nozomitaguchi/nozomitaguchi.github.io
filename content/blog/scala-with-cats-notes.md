---
title: "Scala With Cats について"
type: "blog"
source: "other"
date: "2023-07-04"
displayDate: "2023.07"
summary: "Cats の学習メモと、過去に書いた関連技術記事への導線。"
status: "published"
tags: ["scala", "study", "tech note"]
originUrl: "https://www.ntaguchi.com/2023/scala-with-cats"
---

## Scala With Cats

Scala の関数型ライブラリの一つである Cats。
その初学に関して役に立つ、[Scala With Cats というサイト](https://www.scalawithcats.com/)があります。

Cats のライブラリに関する説明が主ですが関数型や Scala の前提知識を必要とするものが多いので、FP in Scala を事前に読んでおいたり
変位などプログラミングの一般的なことについてあらかじめ学習をしておくと読み進めやすいと思います。

それらのことについては以前 MicroAd のブログに寄稿したのでそちらを見ていただければと思います。

- [Scala With Cats を読む前に知っておきたかったこと](https://developers.microad.co.jp/entry/2021/08/10/063000)

## Cats の関数覚え書き

またその学習の延長として、また当時所属していたチームへの引き継ぎの意味も込めて Cats で定義されている関数の使い方についての記事もたくさん書いたので
どなたかの参考になれば幸いです。2022 年から更新していないため、当時の Cats の Version になかった概念や関数などは書いておりませんのであしからず。

- [Cats の関数覚え書き(Functor, Apply, Applicative, FlatMap)](https://qiita.com/nozomitaguchi/items/24ab70f921f1e013d49b)
- [Cats の関数覚え書き(ApplicativeError, MonadError)](https://qiita.com/nozomitaguchi/items/a74d9bfe67ae63530222)
- [Cats の関数覚え書き(Semigroup, Monoid)](https://qiita.com/nozomitaguchi/items/b65d9720242bd43ebcaa)
- [Cats の関数覚え書き(Foldable, Reducible, Traverse, TraverseFilter)](https://qiita.com/nozomitaguchi/items/7e8da5f2d7439a140d65)
- [Cats の関数覚え書き(Parallel)](https://qiita.com/nozomitaguchi/items/68e40aefa8d70c8e704e)
- [Cats の関数覚え書き(Alternative, Align, CoflatMap)](https://developers.microad.co.jp/entry/2021/12/13/120000)
- [Cats のデータ型覚え書き(NonEmptyList)](https://qiita.com/nozomitaguchi/items/40dd6a4ad23afb889f69)
- [Cats のデータ型覚え書き(Validated ~ Either との使い分けなど ~)](https://qiita.com/nozomitaguchi/items/66bbee966e59281a68e8)
- [Cats のデータ型覚え書き(Ior ~ Either, Validated との比較など ~)](https://qiita.com/nozomitaguchi/items/5ff98b3666efde21de02)
