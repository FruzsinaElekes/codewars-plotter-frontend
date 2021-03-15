import React from 'react'
import {CanvasJS, CanvasJSChart} from 'canvasjs-react-charts'
import styled from 'styled-components'


export default function CollapsedPlot({ plotList }) {

    const dataList = plotList.map(data => {
        return {
            type: 'bar',
            showInLegend: true,
            name: data.language,
            dataPoints: data.dataPoints
        }
    })

    const options = {
        title: {text: "Comparison of langugages"},
        theme: 'dark2',
        axisX: {reversed: true, title: "Rank"},
        axisY: {
            title: "count",
            interval: 5
        },
        data: dataList
    }

    return (
        <Collapsed>
            <CanvasJSChart options={options}/>
        </Collapsed>
    )
}


const Collapsed = styled.div`
    width:80%;
    margin: auto;
`