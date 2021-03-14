import React from 'react';
import {CanvasJS, CanvasJSChart} from 'canvasjs-react-charts'

export default function BarPlot({ plotData }) {

    const options = {
        title: {text: plotData.language},
        axisX: {reversed: true, title: "Rank"},
        axisY: {title: "count"},
        data: [{
            type: 'bar',
            dataPoints: plotData.dataPoints
        }]
    }

    return (
        <div>
            <CanvasJSChart options={options}/>
        </div>
    )
}
