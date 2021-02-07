---
title: Gatsby + Emotion 導入時メモ
date: 2021-02-07
tags: ["Gatsby", "Emotion"]
---

[参考](https://www.gatsbyjs.com/docs/how-to/styling/emotion/)

## Emotion

- Css in JS ライブラリの一種
- [@emotion/styled](https://emotion.sh/docs/styled) パッケージを一緒に導入すると「styled.html 要素名」で React コンポーネントを作成し、直後に``で囲んでスタイルを指定できる
- React コンポーネント内の props を利用して CSS 内での条件分岐も行える様子
- Styled Components で同様のことができるようだが、Gatsby のチュートリアルでこっちが先に載っていたのでこちらを利用してみる
- CSS in JS 使用の是非についてはコンポーネントに対して他の機能と同じレベル感で CSS を付けられるの便利だなーと思っているので一旦使ってみる
- 下記のパッケージを導入して利用する

```shell
npm install gatsby-plugin-emotion @emotion/react @emotion/styled
```

```gatsby-config.js
module.exports = {
  plugins: [`gatsby-plugin-emotion`],
}
```
