---
title: Gatsbyのブログ一覧に記事のカテゴリから検索する機能を追加
date: 2021-02-24
tags: ["Gatsby", "React"]
---

[参考](https://diff001a.netlify.app/gatsby-site-search/)

- ブログ一覧のデータを hooks を使って格納し、記事に付属しているカテゴリをクリックしたときに格納したブログ一覧を絞り込むように実装
- 検索前の状態に戻せるようにリセット用ボタンを一応追加し、前の状態をボタンの押下時の関数に保持
- カスタムフックにしてカテゴリ一覧からも検索できるようにする
