import React, { useState } from 'react'
import styled from 'styled-components'
import KataDescription from './KataDescription'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'

export default function KataList({ filtered, page, setPage }) {

    
    const itemNumber = 15
    const pageUp = () => {
        if (filtered.length > (page + 1) * itemNumber) setPage(prev => prev + 1)
    }
    const pageDown = () => {
        if (page != 0) setPage(prev => prev - 1)
    }

    return (
        <React.Fragment>
            {filtered.length !== 0 &&
                <KataContainer>
                {filtered.slice(page * itemNumber, page * itemNumber + itemNumber).map(k => <KataDescription key={k.codewarsId} kata = {k}/>)}
                    <Chevrons>
                        <FaAngleLeft onClick={pageDown}></FaAngleLeft>
                        <div>{page + 1}</div>
                        <FaAngleRight onClick={pageUp}></FaAngleRight>
                    </Chevrons>
            </KataContainer>
        }
        
        </React.Fragment>
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