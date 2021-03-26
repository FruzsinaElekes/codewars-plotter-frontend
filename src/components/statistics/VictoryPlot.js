import React from 'react'
import {VictoryChart, VictoryBar, VictoryTheme} from 'victory'

export default function VictoryPlot({plotData}) {
    
    return (
        <VictoryChart
            theme={VictoryTheme.material}
            domainPadding={{ x: 10 }}
            >
            <VictoryBar horizontal
                style={{
                data: { fill: "#c43a31" }
                }}
                data={plotData.dataPoints}
            />
        </VictoryChart>
    )
}
