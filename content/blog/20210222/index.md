---
title: Gatsbyのブログ一覧にカテゴリーリストを追加
date: 2021-02-18
tags: ["Gatsby", "React"]
---

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
