---
title: 'GPGを使ってGitコミットに署名するときに詰まった'
date: '2019-11-26'
---

## 結論

### Windowsネイティブの場合（コマンドプロンプト）

コマンドプロンプトだから多分動かないけど，やりたいことはこれ

```sh
git config --global gpg.program $(where gpg)
```

だいたいの場合，`.gitconfig`はこうなる

```plaintext
[gpg]
  program = C:\\Program Files (x86)\\GnuPG\\bin\\gpg.exe
```

### WSL2 Ubuntu18.04の場合

gnupg2を使用するときは`GPG_KEY`の環境変数を指定する必要があるみたい  
これを`.zshrc`に追加する

```sh
export GPG_TTY=$(tty)
```

一応これで，コミットに署名ができるようになりました
