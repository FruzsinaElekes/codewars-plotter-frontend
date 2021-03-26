import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import BarPlot from './BarPlot';
import CollapsedPlot from './CollapsedPlot';
import PlotMenu from './PlotMenu';
import { UserContext } from '../userAuth/UserContext'
import VictoryPlot from './VictoryPlot'
import VictoryCollapsed from './VictoryCollapsed';

export default function PlotSection({ languages }) {

    const [isCollapsed, setIsCollapsed] = useState(false)
    const setCollapsed = () =>setIsCollapsed(true)
    const setNotCollapsed = () => setIsCollapsed(false)
    const [userSummary, setUserSummary, userPlots, setUserPlots] = useContext(UserContext)

    const urlList = languages.map(language => `http://localhost:8080/users/${userSummary.username}/plot/${language}`)

    useEffect(() => {
        if (userPlots.length === 0){
            urlList.forEach(url => {
                axios({
                    method: 'get',
                    url: url
                })
                .then(resp => setUserPlots(prev => [...prev, resp.data]))
            });
        }
    }, [])

    return (
        <PlotContainer>
            {!isCollapsed
            ? <PlotGrid>
                {userPlots.map(p => <VictoryPlot key = {p.language} plotData = {p}/>)}
            </PlotGrid>
            : <VictoryCollapsed plotList={userPlots}></VictoryCollapsed>}
            <PlotMenu isCollapsed={isCollapsed} setCollapsed={setCollapsed} setNotCollapsed={setNotCollapsed}/>
        </PlotContainer>
    )
}


const PlotGrid = styled.div`
    margin:auto;
    display: grid;
    gap: 1em;
    grid-template-columns: 1fr 1fr;
    width: 80%;
`

const PlotContainer = styled.div`
    margin: 4em auto;
    width: 60vw;
    display:flex
`