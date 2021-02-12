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