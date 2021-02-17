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

// TODO Github APIを叩いて自分のGithub Pagesを持ってこれるようにする？
const App = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  
    return (
        <Layout location={location} title={siteTitle}>
          <Grid>
                <LinkCard title="sound-recorder" link="https://tatsu1109.github.io/sound-recorder/" description="asdfg"/>
                <LinkCard title="test" description="12345678901234567890 1234567890123456789012345678901234567890 "/>
                <LinkCard title="test" description="12345678901234567890 1234567890123456789012345678901234567890 "/>
                <LinkCard title="test" description="12345678901234567890 1234567890123456789012345678901234567890 "/>
                <LinkCard title="test" description="12345678901234567890 1234567890123456789012345678901234567890 "/>
                <LinkCard title="test" description="12345678901234567890 1234567890123456789012345678901234567890 "/>
                <LinkCard title="test" description="12345678901234567890 1234567890123456789012345678901234567890 "/>
                <LinkCard title="test" description="12345678901234567890 1234567890123456789012345678901234567890 "/>
                <LinkCard title="test" description="12345678901234567890 1234567890123456789012345678901234567890 "/>
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
  }
`
