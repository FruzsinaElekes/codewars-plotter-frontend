import React, { useState } from 'react'
import styled from 'styled-components'
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import ReactMarkdown from "react-markdown";

export default function KataDescription({ kata }) {

    const [visible, setVisible] = useState(false)
    const toggleVisibility = () => setVisible(prev => !prev)

    return (
        <div>
            <Header>
                <a href={kata.url}>{kata.name}</a>
                <div>{kata.rank}</div>
                <div>{kata.completedAt.replace("T", " ")}</div>
                {visible ? <BsFillCaretUpFill onClick={toggleVisibility}/> : <BsFillCaretDownFill onClick={toggleVisibility}/>}
            </Header>
            <Details visible={visible}>
                <div>Completed languages: {kata.completedLanguages.join(", ")}</div>
                <div>Tags: {kata.tags.join(", ")}</div>
                <ReactMarkdown>{kata.description}</ReactMarkdown>
            </Details>
        </div>
    )
}

const Header = styled.div`
    display: flex;
`

const Details = styled.div`
    display: ${props => props.visible ? "block" : "none"}
`
