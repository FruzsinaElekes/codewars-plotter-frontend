import React from 'react'
import styled from 'styled-components'

export default function UserOverview({ userSummary }) {
    console.log(userSummary.name)
    return (
        <OverView>
            <Data>
                {userSummary.name !== null ? <p>{userSummary.name} aka {userSummary.username}</p> : <p>{userSummary.username}</p>}
                <p>Clan: {userSummary.clan}</p>
                <p>Honor: {userSummary.honor}</p>
                <p>Position: #{userSummary.leaderboardPosition}</p>
                <p>Completed: {userSummary.totalCompleted}</p>
            </Data>
            <Languages>
                {userSummary.languageRanks.map(r => <p>{r.language}: {r.rankName}</p>)}
            </Languages>
        </OverView>
    )
}


const OverView = styled.div`
    display: flex;
    background-color: rgb(33, 32, 32);
    color: white;
    padding-left: 2em
`

const Data = styled.div`
    width: 300px;
`

const Languages = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-evenly
`