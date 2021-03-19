import React, { useState } from 'react'
import styled from 'styled-components'
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import ReactMarkdown from "react-markdown";

export default function KataDescription({ kata }) {

    const [visible, setVisible] = useState(false)
    const toggleVisibility = () => setVisible(prev => !prev)

    return (
        <KataContainer visible={visible}>
            <Header>
                <Data>
                    <a href={kata.url}>{kata.name}</a>
                    <div>{kata.rank}</div>
                    <div>{kata.completedAt.replace("T", " ")}</div>
                </Data>
                {visible ? <Icon><BsFillCaretUpFill onClick={toggleVisibility}/></Icon> : <Icon><BsFillCaretDownFill onClick={toggleVisibility}/></Icon>}
            </Header>
            <Details visible={visible}>
                <div>Completed languages: {kata.completedLanguages.join(", ")}</div>
                <div>Tags: {kata.tags.join(", ")}</div>
                <ReactMarkdown>{kata.description}</ReactMarkdown>
            </Details>
        </KataContainer>
    )
}

const Header = styled.div`
    display: flex;
`

const Details = styled.div`
    display: ${props => props.visible ? "block" : "none"}
`

const KataContainer = styled.div`
    width: 50%;
    margin: ${props => props.visible ? "3em auto 3em" : "1em auto 0"}
`

const Icon = styled.div`
    margin-left:auto
`

const Data = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between
`