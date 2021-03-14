import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BarPlot from './BarPlot';

export default function PlotSection({ languages }) {

    const [plotList, setPlotList] = useState([]);
    const username = process.env.REACT_APP_USERNAME
    const apiKey = process.env.REACT_APP_APIKEY
    const urlList = languages.map(language => `http://localhost:8080/plot/${language}?username=${username}&apiKey=${apiKey}`)

    useEffect(() => {
        urlList.forEach(url => {
            axios.get(url)
            .then(resp => setPlotList(prev => [...prev, resp.data]))
        });
    }, [])

    return (
        <div>
            {plotList.map(p => <BarPlot key = {p.language} plotData = {p}/>)}
        </div>
    )
}
