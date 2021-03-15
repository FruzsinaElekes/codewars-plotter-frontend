import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import BarPlot from './BarPlot';
import Collapsed from './CollapsedPlot';
import PlotMenu from './PlotMenu';

export default function PlotSection({ languages }) {

    const [plotList, setPlotList] = useState([]);
    const username = process.env.REACT_APP_USERNAME
    const apiKey = process.env.REACT_APP_APIKEY
    const urlList = languages.map(language => `http://localhost:8080/plot/${language}?username=${username}&apiKey=${apiKey}`)

    useEffect(() => {
        if (plotList.length === 0){
            urlList.forEach(url => {
                axios.get(url)
                .then(resp => setPlotList(prev => [...prev, resp.data]))
            });
        }
    }, [])

    return (
        <PlotContainer>
            <PlotGrid>
                {plotList.map(p => <BarPlot key = {p.language} plotData = {p}/>)}
            </PlotGrid>
            {/* <Collapsed plotList={plotList}></Collapsed> */}
            <PlotMenu />
        </PlotContainer>
    )
}


const PlotGrid = styled.div`
    margin:auto;
    display: grid;
    gap: 2em;
    grid-template-columns: 1fr 1fr;
    width: 90%;
`

const PlotContainer = styled.div`
    margin: auto;
    width: 60vw;
    display:flex
`