---
title: jsxの要素の結合方法
date: 2021-01-16
tags: ["react"]
---

各行単位を配列の要素とした配列を作成し、return する
[参考 URL](https://qiita.com/gonshi_com/items/6f03d06450f0176deb18)

```js
<Select defaultValue="" id="grouped-select">
  {data.map(item => {
    const listSubHeader = <ListSubheader>{item.category}</ListSubheader>
    const ListItem = item.itemList.map(detailItem => (
      <MenuItem value={detailItem}>{detailItem}</MenuItem>
    ))
    return [listSubHeader, ...ListItem]
  })}
</Select>
```
