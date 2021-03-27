import React from 'react'
import styled from 'styled-components'
import Chip from '@material-ui/core/Chip'

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
            <Chip style={avgRankChip} label={userSummary.overallRank.rankName}></Chip>
            <Languages>
                {userSummary.languageRanks.map(r => <Chip style={rankChip} key={r.language} label={`${r.rankName} / ${r.language}`} ></Chip>)}
            </Languages>
        </OverView>
    )
}


const OverView = styled.div`
    position: fixed;
    background-color: rgb(33, 32, 32);
    color: #f0f0f0;
    width: max(20%, 360px);
    min-height: 100vh;
    padding: 0 2em
`

const Data = styled.div`
    width: 300px;
`

const Languages = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column
`

const rankChip = { 
    fontSize: "1.2em",
    backgroundColor: "gray", 
    marginTop: "1em"
}

const avgRankChip = {
    fontSize: "1.2em",
    backgroundColor: "#d9392e", 
    marginTop: "1em",
    width: "100%"
}
