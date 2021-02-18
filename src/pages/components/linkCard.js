import React from "react"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const CardWrapper = styled.div`
    padding: 15px;
    border: 1px solid #ccc;
`
const Title = styled.a`
    text-align: left;
    font-weight: bold;
`

const GithubLink = styled.a`
    color: black;
    padding: 10px 
`

const Description = styled.div`
    text-align: left;
    word-break: break-all;
    padding-top: 10px 
`

const LinkCard = ({title, description, appLink, githubLink}) => {
    return (
        <CardWrapper>
            <Title href={appLink} target="_blank">{title}</Title>            
            <GithubLink href={githubLink}>
                <FontAwesomeIcon icon={faGithub} />
                SourceCode
            </GithubLink>
            <Description>{description}</Description>
        </CardWrapper>)
}

export default LinkCard