import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import Navigation from "./navigation"

const Body = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 70px 1fr 30px;
  grid-template-columns: 1fr 5fr;
  grid-template-areas:
    "header header"
    "navigation content"
    "footer footer";
`

const Header = styled.header`
  text-align: center;
  white-space: nowrap;
 	background-color: #eeeeee;
  grid-area: header; 
`

const Content = styled.div`
  grid-area: content;
  overflow-y: scroll;
`

const Footer = styled.footer`
 	background-color: #eeeeee;
  grid-area: footer; 
`

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <Body data-is-root-path={isRootPath}>
      <Header>
        <h1 className="main-heading">
          <Link to="/">{title}</Link>
        </h1>
      </Header>
      <Navigation color="#eeeeee" selectedColor="#1b2538"/>
      <Content>
        {children}
      </Content>
      <Footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </Footer>
    </Body>
  )
}

export default Layout
