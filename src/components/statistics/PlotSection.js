import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import BarPlot from './BarPlot';
import CollapsedPlot from './CollapsedPlot';
import PlotMenu from './PlotMenu';
import { UserContext } from '../userAuth/UserContext'

export default function PlotSection({ languages }) {

    const [plotList, setPlotList] = useState([]);
    const [isCollapsed, setIsCollapsed] = useState(false)
    const setCollapsed = () =>setIsCollapsed(true)
    const setNotCollapsed = () => setIsCollapsed(false)
    const user = useContext(UserContext)[0]

    const urlList = languages.map(language => `http://localhost:8080/users/${user.username}/plot/${language}`)

    useEffect(() => {
        if (plotList.length === 0){
            urlList.forEach(url => {
                axios({
                    method: 'get',
                    url: url
                })
                .then(resp => setPlotList(prev => [...prev, resp.data]))
            });
        }
    }, [])

    return (
        <PlotContainer>
            {!isCollapsed
            ? <PlotGrid>
                {plotList.map(p => <BarPlot key = {p.language} plotData = {p}/>)}
            </PlotGrid>
            : <CollapsedPlot plotList={plotList}></CollapsedPlot>}
            <PlotMenu isCollapsed={isCollapsed} setCollapsed={setCollapsed} setNotCollapsed={setNotCollapsed}/>
        </PlotContainer>
    )
}


const PlotGrid = styled.div`
    margin:auto;
    display: grid;
    gap: 2em;
    grid-template-columns: 1fr 1fr;
    width: 80%;
`

const PlotContainer = styled.div`
    margin: auto;
    width: 60vw;
    display:flex
`