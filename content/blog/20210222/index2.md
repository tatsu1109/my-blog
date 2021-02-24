---
title: Gatsbyのブログ記事のパス(slug)を変更
date: 2021-02-22
tags: ["Gatsby"]
---

[参考](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#onCreateNode)
[参考 2](https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/)

- gatsby-node.js を作成
- onCreateNode 関数を exports する
- 内部で createNodeField 関数を実行する。実行時の name の値を key で value の値を value にセットした組をそれぞれのページノードに追加する。基本的にページのパスは slug に追加する
- createPages 関数を exports する
- 内部でページノードを GraphQL クエリを使って取得し、先ほど追加した slug を用いて createPage を実行する
- createPage の component にはベースとなるページの javaScript を指定する
  サンプル

```javaScript
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value: `/blog${value}`,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `
  )

  posts.forEach((post, index) => {
    const previousPostId = index === 0 ? null : posts[index - 1].id
    const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

    createPage({
      path: post.fields.slug,
      component: blogPost,
      context: {
        id: post.id,
        previousPostId,
        nextPostId,
      },
    })
  })

```
