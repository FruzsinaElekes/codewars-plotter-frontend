import React, { useState } from 'react'
import styled from 'styled-components'
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import Chip from '@material-ui/core/Chip'

export default function KataDescription({ kata }) {

    const [visible, setVisible] = useState(false)
    const toggleVisibility = () => setVisible(prev => !prev)

    return (
        <KataContainer visible={visible}>
            <Header>
                <Data>
                    <StyledA href={kata.url} target="_blank">{kata.name}</StyledA>
                    <div>{kata.rank}</div>
                    <div>{kata.completedAt.substring(0, kata.completedAt.indexOf("T"))}</div>
                </Data>
                {visible ? <Icon><BsFillCaretUpFill onClick={toggleVisibility}/></Icon> : <Icon><BsFillCaretDownFill onClick={toggleVisibility}/></Icon>}
            </Header>
            <Details visible={visible}>
                <Chips>{kata.completedLanguages.map(lang => <Chip style={{ backgroundColor: "#d9392e", marginRight: "1em" }} label={lang} key={lang} />)}</Chips>
                <Chips>{kata.tags.map(tag => <Chip style={{ backgroundColor: "gray", marginRight: "1em" }} label={tag} key={tag} />)}</Chips>
                
            </Details>
        </KataContainer>
    )
}

const Header = styled.div`
    display: flex;
    background-color: rgb(60, 60, 60);
    color: white;
    height: 2em;
    line-height: 2em;
    padding: 0 1em;
`

const StyledA = styled.a`
    font-weight: bold;
    color: white;
    text-decoration: none;
    &:visited {
        color: white;
        text-decoration: none;
    }
    &:hover {
        color: #eb4034;
        font-size: 1.1em; 
    }
`

const Details = styled.div`
    display: ${props => props.visible ? "block" : "none"};
    padding: 1em;
    background-color: rgb(40, 40, 40);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`

const KataContainer = styled.div`
    width: 70%;
    margin: ${props => props.visible ? "3em auto 3em" : "1em auto 0"}
`

const Icon = styled.div`
    margin-left:auto;
    cursor: pointer;
    &:hover {
        color: #eb4034;
    }
`

const Data = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
`

const Chips = styled.div`
    margin-top: 1em;
    display: flex;
    flex-wrap: wrap;

`