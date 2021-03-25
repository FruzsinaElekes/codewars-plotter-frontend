import React, { useState } from 'react'
import styled from 'styled-components'
import KataDescription from './KataDescription'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'

export default function KataList({ filtered, page, setPage }) {

    
    const itemNumber = 10
    const pageUp = () => setPage(prev => prev + 1)
    const pageDown = () => setPage(prev => prev - 1)

    return (
        <KataContainer>
            {filtered.length !== 0
                ? filtered.slice(page * itemNumber, page * itemNumber + itemNumber).map(k => <KataDescription key={k.codewarsId} kata = {k}/>)    
                : <p></p>
            }
        <Chevrons>
            <FaAngleLeft onClick={pageDown}></FaAngleLeft>
            <div>{page + 1}</div>
            <FaAngleRight onClick={pageUp}></FaAngleRight>
        </Chevrons>
        </KataContainer>
    )
}

const KataContainer = styled.div`
    width: 100%;
`

const Chevrons = styled.div`
    display: flex;
    width: 20%;
    margin: 4em auto;
    justify-content: space-evenly;
    align-items: baseline
`