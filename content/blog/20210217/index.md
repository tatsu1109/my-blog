---
title: CSS Gridで逆L字型レイアウト
date: 2021-02-12
tags: ["CSS Grid", "React", "Emotion"]
---

[参考](https://qiita.com/kura07/items/e633b35e33e43240d363)

- grid-template-rows, grid-template-columns でそれぞれ行・列の数、それぞれの高さ・長さを指定
- grid-template-areas で行・列で区切ったそれぞれの区域の名称を指定。同じ名前の区域はまとめて使われる(header と指定している区域が 2 つある場合、header と grid-area で指定した子要素は両方の区域を併せて扱う)
- 子要素の grid-area で grid-template-areas で指定した名前を指定
- 1fr は大きさを指定している区域を除いて、余っている区域内でその fr の区域の割合を示す。1fr 5fr と指定した場合は 1:5 で分割して表示する

### サンプル

```javaScript
import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import Navigation from "./navigation"

const Body = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 70px 1fr 70px;
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
const NavigationWrapper = styled.ol`
　 grid-area: navigation;
   margin: 0;
   padding: 0;
   list-style-type: none;
   background-color: ${color};
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
        <h1>
          <Link to="/">{title}</Link>
        </h1>
      </Header>
      <Navigation />
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
```

### 懸念点

- コンポーネントを分けている場合、grid-area をコンポーネントかレイアウト側のどちらに書くのが良いか レイアウト制御的にはレイアウト側に書くべきな気がする
