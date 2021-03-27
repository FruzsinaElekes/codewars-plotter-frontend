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
                <StyledA href={kata.url} target="_blank">{kata.name}</StyledA>
                <Data>
                    <div>{kata.rank}</div>
                    <div>{kata.completedAt.substring(0, kata.completedAt.indexOf("T"))}</div>
                </Data>
                {visible ? <Icon><BsFillCaretUpFill onClick={toggleVisibility}/></Icon> : <Icon><BsFillCaretDownFill onClick={toggleVisibility}/></Icon>}
            </Header>
            <Details visible={visible}>
                <Chips>{kata.completedLanguages.map(lang => <Chip style={langChip} label={lang} key={lang} />)}</Chips>
                <Chips>{kata.tags.map(tag => <Chip style={tagChip} label={tag} key={tag} />)}</Chips>
                
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
    justify-content: space-between;

`

const StyledA = styled.a`
    width: 60%;
    font-weight: bold;
    color: #f0f0f0;
    text-decoration: none;
    overflow: hidden;
    &:visited {
        color: #f0f0f0;
        text-decoration: none;
    }
    &:hover {
        color: #eb4034;
        font-size: 1.1em; 
    }
`

const Details = styled.div`
    display: ${props => props.visible ? "block" : "none"};
    padding: 0 1em 1em 1em;
    background-color: rgb(40, 40, 40);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`

const KataContainer = styled.div`
    width: 70%;
    display: block;
    margin: 1em auto 0;
`

const Icon = styled.div`
    margin-left:auto;
    cursor: pointer;
    &:hover {
        color: #eb4034;
    }
`

const Data = styled.div`
    width: 30%;
    display: flex;
    justify-content: space-between;
`

const Chips = styled.div`
    display: flex;
    flex-wrap: wrap;

`

const langChip = { 
    backgroundColor: "#d9392e",
    marginTop: "1em", 
    marginRight: "1em" }

const tagChip = { 
    backgroundColor: "gray", 
    marginTop: "1em", 
    marginRight: "1em" }