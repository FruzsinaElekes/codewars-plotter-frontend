import React from 'react'
import styled from 'styled-components'
import KataDescription from './KataDescription'

export default function KataList({filtered}) {
    return (
        <KataContainer>
                {filtered.length !== 0
                ? filtered.map(k => <KataDescription key={k.codewarsId} kata = {k}/>)    
                : <p></p>
            }
        </KataContainer>
    )
}

const KataContainer = styled.div`
    width: 100%;
`