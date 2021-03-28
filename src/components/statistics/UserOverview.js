import React from 'react'
import styled from 'styled-components'
import Chip from '@material-ui/core/Chip'
import Loader from "react-loader-spinner";

export default function UserOverview({ loadedLanguages, userSummary }) {
    const loadingIcon = <Loader type="ThreeDots" color="black" height={26} width={26} ></Loader>

    return (
        <OverView>
            <Data>
                <Name>
                    <StyledA 
                        href={process.env.REACT_APP_CW_USER + userSummary.username} 
                        target="_blank">{userSummary.username}</StyledA>
                </Name>
                {userSummary.name && <p>Name: {userSummary.name} </p>}
                {userSummary.clan && <p>Clan: {userSummary.clan}</p>}
                <p>Honor: {userSummary.honor}</p>
                <p>Position: #{userSummary.leaderboardPosition}</p>
                <p>Completed: {userSummary.totalCompleted}</p>
                {userSummary.skills.length > 0 && <p>Skills: {userSummary.skills.join(", ")}</p>}
            </Data>
            
            <Chip  style={avgRankChip} label={userSummary.overallRank.rankName}></Chip>
            <Languages>
                {userSummary.languageRanks.map(r => <Chip 
                                                        style={loadedLanguages.includes(r.language) ? rankChip : loadingChip} 
                                                        key={r.language} 
                                                        label={`${r.rankName} / ${r.language}`} 
                                                        icon={loadedLanguages.includes(r.language) ? undefined : loadingIcon}></Chip>)}
            </Languages>
        </OverView>
    )
}


const OverView = styled.div`
    position: fixed;
    top:50px;
    bottom: 0;
    background-color: rgb(33, 32, 32);
    color: #f0f0f0;
    width: max(20%, 360px);
    min-height: 100vh;
    padding: 0 2em;
    overflow: auto
`

const Data = styled.div`
    margin-top: 1em;
    width: 300px;
    word-break: break-all; 
    word-wrap: break-word;
`

const Name = styled.div`
    height: 2.5em;
    line-height: 2.5em;
    font-size: 1.5em;
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

const loadingChip = { 
    fontSize: "1.2em",
    backgroundColor: "#d65c54", 
    marginTop: "1em"
}

const avgRankChip = {
    fontSize: "1.2em",
    backgroundColor: "#d9392e", 
    marginTop: "1em",
    width: "100%"
}
