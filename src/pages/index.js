import React, { useState }from "react"
import styled from "@emotion/styled"
import { Link, graphql, useStaticQuery } from "gatsby"

import Bio from "../components/bio"
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


const BlogIndex = ({ location }) => {
  const data = useStaticQuery(graphql`
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
  }`)

  const siteTitle = data.site.siteMetadata?.title || `Title`
  // const posts = data.allMarkdownRemark.nodes
  const [posts, setPosts] = useState(data.allMarkdownRemark.nodes)
  const tags = data.allMarkdownRemark.group
  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      {/* <Bio /> */}
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
                  <small>{post.frontmatter.date}</small>
                  <div>
                    {post.frontmatter.tags !== null
                      ? post.frontmatter.tags.map(
                        buttonTag =>
                          <button
                            onClick={
                              () => setPosts(
                                posts.filter(post => {
                                  if (post.frontmatter.tags !== null) {
                                    return post.frontmatter.tags.find(tag => tag === buttonTag)  
                                  }
                                })
                              )
                            }
                          >
                            {buttonTag}
                          </button>
                      )
                      : <button>noTag</button>}
                  </div>
                </section>
              </article>
            </li>
          )
        })}
        </BlogList>
        <TagsList>
          {
            tags.map(tag => <li>{`${tag.fieldValue}(${tag.totalCount})`}</li>)
          }
        </TagsList>
      </Wrapper>
    </Layout>
  )
}

export default BlogIndex

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
