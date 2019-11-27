---
title: 'GatsbyJSに移行しました'
date: '2019-11-25'
---

<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

約10ヶ月ぶりの更新になりますね．ブログの更新をサボっていた結果です．
また色々と書いていこうと思います．

今回は，Gatsbyへの移行について書こうと思います．~~即落ち2コマとか言わない~~

## [GatsbyJS](https://www.gatsbyjs.org/)とは

Reactベースの静的サイトジェネレーターで，GraphQLによるデータ管理に強いのが特徴です．  
ちょうどGraphQLに興味が出てきたので使ってみました．  
チュートリアルをこなしていくだけでブログの雛形ができるのでとても簡単でした．  

## 移行してよかったこと

SEO関連やWPA関連がデフォルトで用意されているので，プラグインを使うだけで良くなって楽ですね．  
例えばこれ．ちゃんとカードが出ています．  
また，pluginを使うとTwitterのembedもイイカンジに埋め込めます．

<blockquote class="twitter-tweet"><p lang="und" dir="ltr"><a href="https://t.co/vIZXD0olz2">https://t.co/vIZXD0olz2</a></p>&mdash; 𝓙𝓲𝓬𝓱𝓸𝓾𝓟💛 (@JichouP) <a href="https://twitter.com/JichouP/status/1199575712463609858?ref_src=twsrc%5Etfw">November 27, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### コードブロック

いい感じにシンタックスハイライトがつきます．これは`gatsby-remark-prismjs`というpluginのおかげです．

```ts{2}:title=add.ts
const num = 1;
const add = (a: number , b: number) => a + b;
console.log(add(1, 2));
```

### 絵文字

Markdownファイル中で \:1: と入力すると:+1:になります．

### KaTeX

KaTeXによる数式表記もできます．

$$
\begin{aligned}
&\nabla \cdot \bm{D} & = \rho\\
&\nabla \times \bm{H} - \frac{\partial \bm{D}}{\partial t} & = \bm{J}\\
&\nabla \times \bm{E} + \frac{\partial \bm{B}}{\partial t} & = 0\\
&\nabla \cdot \bm{B} & = 0
\end{aligned}
$$

## まとめ

プラグインをぶっ刺すだけで簡単にいろんなことができるので楽しいです．まだまだ面白そうな機能がたくさんあるので追加していきたいですね．
