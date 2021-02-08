import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const Profile = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  
    return (
        <Layout location={location} title={siteTitle}>
            <div>
                <h1>About me</h1>
                <p>I’m good enough, I’m smart enough, and gosh darn it, people like me!</p>
            </div>
        </Layout>
    )
}

export default Profile

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
