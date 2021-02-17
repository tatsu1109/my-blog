import React from "react"
import Layout from "../components/layout"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import LinkCard from "./components/linkCard"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  gap: 15px;
`

const App = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const githubRepoList = data.allGithubData.edges[0].node.data.allGithubData.edges
  
    return (
        <Layout location={location} title={siteTitle}>
          <Grid>
            {githubRepoList.map((repo, index) => {
              const repoData = repo.node 
              return <LinkCard key={index} title={repoData.name} link={repoData.homepageUrl} description={repoData.description}/>
            }) }
          </Grid>
        </Layout>
    )
}

export default App

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allGithubData {
      edges {
        node {
          data {
            allGithubData {
              edges {
                node {
                  name
                  description
                  url
                  homepageUrl
                }
              }
            }
          }
        }
      }
    }
  }
`
