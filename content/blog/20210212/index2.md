---
title: React + Emotionでカード型レイアウトを作成
date: 2021-02-12
tags: ["React", "Emotion"]
---

[参考](https://www.design-memo.com/coding/card-type-layout)

1. Grid コンポーネントと Card コンポーネントを作成
2. Grid コンポーネントで下記の CSS を指定

```css
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 15px;
```

3. Card コンポーネントは自由(カードなので枠は付ける)
4. Grid コンポーネント内で Card コンポーネントを呼び出す(一個以上)

## サンプル

```javaScript
// App.js
import React from "react"
import styled from "@emotion/styled"
import LinkCard from "./components/linkCard"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
`

const App = () => {
    return (
        <Grid>
            <LinkCard title="test" description="12345678901234567890 1234567890123456789012345678901234567890 "/>
            <LinkCard title="test" description="12345678901234567890 1234567890123456789012345678901234567890 "/>
            <LinkCard title="test" description="12345678901234567890 1234567890123456789012345678901234567890 "/>
        </Grid>
    )
}

export default App

// LinkCard.js
import React from "react"
import styled from "@emotion/styled"

const CardWrapper = styled.div`
    padding: 15px;
    border: 1px solid #ccc;
`
const Title = styled.a`
    text-align: left;
`

const Description = styled.div`
    text-align: left;
    word-break: break-all;
`

const LinkCard = ({title, description, link}) => {
    return (
        <CardWrapper>
            <Title href={link} target="_blank">{title}</Title>
            <Description>{description}</Description>
        </CardWrapper>)
}

export default LinkCard
```
