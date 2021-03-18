import React from 'react';
import {CanvasJS, CanvasJSChart} from 'canvasjs-react-charts'

export default function BarPlot({ plotData }) {

    const options = {
        title: {text: plotData.language},
        theme: 'dark2',
        axisX: {reversed: true, title: "Rank"},
        axisY: {
            title: "count",
            interval: 5
        },
        data: [{
            type: 'bar',
            indexLabel: "{y}",
            indexLabelPlacement: "inside",
            indexLabelBackgroundColor: "rgba(0,0,0,0.5)",
            indexLabelRadius: 10,
            indexLabelOrientation: "horizontal",
            indexLabelFontSize: "20",
            indexLabelFontWeight: "bold",
            indexLabelWidth: 150,
            dataPoints: plotData.dataPoints
        }]
    }

    return (
        <div>
            <CanvasJSChart options={options}/>
        </div>
    )
}
