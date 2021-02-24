---
title: Gatsbyのブログ一覧にカテゴリーリストを追加
date: 2021-02-22
tags: ["Gatsby", "React"]
---

[参考](https://chocolat5.com/tips/show-category-list-with-react-hook-in-gatsbyjs/)

- 下記の GraphQL クエリでマークダウンファイル内の指定した項目を集計して取得できる
- 取得した項目などをそのままリストなどで展開

```javaScript
  const data = useStaticQuery(graphql`
  query{
    allMarkdownRemark{
      group(field: frontmatter___tags) {
          fieldValue
          totalCount
      }
    }
  }`)
```
