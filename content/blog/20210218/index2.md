---
title: Reactでアイコン付きリンクを作成
date: 2021-02-17
tags: ["React", "Font awesome"]
---

[参考(gatsby の env ファイル)](https://www.corylog.com/gatsby/gatsby014/)

- FontAwesome5 に対応しているので react-fontawesome を採用してみる
- 下記のパッケージをインストール
  npm i --save @fortawesome/fontawesome-svg-core
  npm install --save @fortawesome/free-solid-svg-icons
  npm install --save @fortawesome/react-fontawesome

- Github アイコンを使用したかったので brand を追加
  npm install --save @fortawesome/free-brands-svg-icons

### サンプル

```javaScript
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brand-svg-icons'

const element = <FontAwesomeIcon icon={faGithub} />
```
