---
title: javaScriptの配列をGroup By する関数
date: 2021-01-19
tags: ["javaScript"]
---

[コピー元 URL](https://qiita.com/nagtkk/items/e1cc3f929b61b1882bd1)

配列を key となる項目を指定して集計した形にまとめなおす関数

例：
[{key:1, value:test1},{key:2, value:test2},{key:1, value:test3}]
↓
[{key:1, value:[test1, test3]},{key:2, value:[test2]}]

```js
const groupBy = (array, getKey) =>
  Array.from(
    // Array.fromで配列に近いオブジェクトを配列の形に変換する
    // 今回の場合、(key,value)... → [(key,value)...]
    array.reduce((map, cur, idx, src) => {
      // getKeyには元のは配列内の一要素からkeyを取り出す関数を指定する
      const key = getKey(cur, idx, src)
      // listは一つ前までの繰り返した固まりに同じキーの固まりがあったら取り出す
      const list = map.get(key)
      if (list) list.push(cur)
      else map.set(key, [cur])
      return map
      // 初期値としてMap型(key, value)を指定している
    }, new Map())
  )

// 利用例
const result = groupBy(masterData, item => item.category).map(
  ([category, items]) => ({
    category: category,
    itemList: items
      .sort((a, b) => Number(a.key) - Number(b.key))
      .flatMap(item => item.name),
  })
)
```
