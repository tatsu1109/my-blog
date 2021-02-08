---
title: Emotionで疑似クラス用スタイルを設定
date: 2021-02-08
tags: ["Gatsby", "Emotion"]
---

[公式](https://emotion.sh/docs/nested)
[参考サンプル](https://copypet.jp/671/)

- css の[疑似クラス](https://developer.mozilla.org/ja/docs/Web/CSS/Pseudo-classes)は&で連結して設定できる
- 入れ子の Selector を設定する場合も通常の CSS と同様に > で連結できる

```js
const NavItem = styled.ul`
  display: block;
  padding: 8px 16px;
  margin: 0;
  text-decoration: none;
  color: #000000;
  background-color: ${color};
  &:hover {
    color: #ffffff;
    background-color: ${selectedColor};
  }
  &:hover > a {
    color: #ffffff;
  }
`
```
