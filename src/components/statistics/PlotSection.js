import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PlotMenu from './PlotMenu';
import { UserContext } from '../userAuth/UserContext'
import VictoryPlot from './VictoryPlot'
import VictoryCollapsed from './VictoryCollapsed';

export default function PlotSection({ languages, userPlots, setUserPlots }) {

    const [isCollapsed, setIsCollapsed] = useState(false)
    const setCollapsed = () =>setIsCollapsed(true)
    const setNotCollapsed = () => setIsCollapsed(false)
    const userSummary = useContext(UserContext)[0]

    const urlList = languages.map(language => `http://localhost:8080/users/${userSummary.username}/plot/${language}`)

    useEffect(() => {
        if (userPlots.length === 0){
            urlList.forEach(url => {
                axios({
                    method: 'get',
                    url: url
                })
                .then(resp => setUserPlots(prev => [...prev, resp.data]))
                .catch(error => alert("Sorry, your plots could not be loaded properly"))
            });
        }
    }, [])

    return (
        <PlotContainer>
            <Plots>
                {!isCollapsed
                ? <PlotGrid>
                    {userPlots.map(p => <VictoryPlot key = {p.language} plotData = {p}/>)}
                </PlotGrid>
                : <VictoryCollapsed plotList={userPlots}></VictoryCollapsed>}
            </Plots>
            <PlotMenu isCollapsed={isCollapsed} setCollapsed={setCollapsed} setNotCollapsed={setNotCollapsed}/>
        </PlotContainer>
    )
}

const Plots = styled.div`
    width: 80%;
    margin:auto
`

const PlotGrid = styled.div`
    margin:auto;
    display: grid;
    gap: 1em;
    grid-template-columns: 1fr 1fr;
    width: 90%;
`

const PlotContainer = styled.div`
    position: relative;
    left: max(20%, 360px);
    margin: 4em 0;
    width: calc(100% - max(20%, 360px));
    display:flex
`