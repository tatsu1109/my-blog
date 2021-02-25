import React, { useState }from "react"
import styled from "@emotion/styled"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Wrapper = styled.div`
  display: flex;
`

const BlogList = styled.ol`
  flex: 4
`

const TagsList = styled.ol`
  flex: 1;
  padding-top: var(--spacing-8);
  list-style-type:none;
`

const CategoryTag = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background: transparent;
  color: #0033cc;
  &:hover {
    text-decoration: underline;
    color: #002080;
  }
`


const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  // const posts = data.allMarkdownRemark.nodes
  const tags = data.allMarkdownRemark.group
  const [posts, setPosts] = useState(data.allMarkdownRemark.nodes)

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <button onClick={() => setPosts(data.allMarkdownRemark.nodes)}>Search Reset</button>
      <Wrapper>
        <BlogList style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <section>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <div>
                    カテゴリー：
                    {post.frontmatter.tags !== null
                      ? post.frontmatter.tags.map((tag, index) =>
                        <CategoryTag key={index} onClick={() => setPosts(searchPost(posts, tag))}>{tag}</CategoryTag>
                      )
                      : <CategoryTag disabled>noTag</CategoryTag>}
                  </div>
                  <small>{post.frontmatter.date}</small>
                </section>
              </article>
            </li>
          )
        })}
        </BlogList>
        <TagsList>
          {
            tags.map((tag, index) => {
              return (
                <li key={index}>
                  <CategoryTag onClick={() => setPosts(searchPost(posts, tag.fieldValue))}>{tag.fieldValue}</CategoryTag>
                  {`(${tag.totalCount})`}
                </li>
              )
            })
          }
        </TagsList>
      </Wrapper>
    </Layout>
  )
}

export default BlogIndex

const searchPost = (posts, targetTag) => {
  return posts.filter(post => {
    if (post.frontmatter.tags !== null) {
      return post.frontmatter.tags.find(tag => tag === targetTag)
    }
  })
}

export const pageQuery = graphql`
  query{
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { 
        fields: [frontmatter___date], 
        order: DESC, 
      }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          tags
          description
        }
      }
      group(field: frontmatter___tags) {
          fieldValue
          totalCount
      }
    }
  }`