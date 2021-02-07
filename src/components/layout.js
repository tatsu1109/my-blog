import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Header = styled.header`
  text-align: center;
  background-color: #888;
  color: #fff;
`

const ContentWrapper = styled.main`
  display: flex;
`

const Navigation = styled.div`
  flex: 1;
  background-color: #888;
  color: #fff;
`

const Content = styled.div`
  flex: 4;
  background-color: #eee;
`


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Header className="global-header">{header}</Header>
      <ContentWrapper>
        <Navigation>
          menu
        </Navigation>
        <Content>
          {children}
        </Content>
      </ContentWrapper>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
