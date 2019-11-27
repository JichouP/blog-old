---
title: 'GatsbyJSに移行しました'
date: '2019-11-25'
---

約10ヶ月ぶりの更新になりますね．ブログの更新をサボっていた結果です．
また色々と書いていこうと思います．

今回は，Gatsbyへの移行について書こうと思います．

## [GatsbyJS](https://www.gatsbyjs.org/)とは

Reactベースの静的サイトジェネレーターで，GraphQLによるデータ管理に強いのが特徴です．  
ちょうどGraphQLに興味が出てきたので使ってみました．  
チュートリアルをこなしていくだけでブログの雛形ができるのでとても簡単でした．  

## 移行してよかったこと

SEO関連やWPA関連がデフォルトで用意されているので，プラグインを使うだけで良くなって楽ですね．  
例えばこれ．ちゃんとカードが出ています．  
また，pluginを使うとTwitterのembedもイイカンジに埋め込めます．

<blockquote class="twitter-tweet"><p lang="und" dir="ltr"><a href="https://t.co/JVFCo0132c">https://t.co/JVFCo0132c</a></p>&mdash; 𝓙𝓲𝓬𝓱𝓸𝓾𝓟💛 (@JichouP) <a href="https://twitter.com/JichouP/status/1198685944284450817?ref_src=twsrc%5Etfw">November 24, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## コードブロック

いい感じにシンタックスハイライトがつきます．これは`gatsby-remark-prismjs`というpluginのおかげです．

```ts
const num = 1;
const add = (a: number , b: number) => a + b;
console.log(add(1, 2));
```
