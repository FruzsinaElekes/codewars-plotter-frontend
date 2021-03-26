import React from 'react'
import {VictoryChart, VictoryBar, VictoryTheme, VictoryAxis, VictoryLabel} from 'victory'

export default function VictoryPlot({plotData}) {
    const ticks = []
    const maxCount = Math.max(...plotData.dataPoints.map(dp => dp.y))
    for (let i = 1; i < Math.ceil(maxCount / 5) + 1; i++){
        ticks.push(i * 5)
    }
    return (
        <VictoryChart
            theme={VictoryTheme.material}
            domainPadding={{ x: 20 }}
            >
            <VictoryLabel text={plotData.language} style= {{fontSize: 20, fontWeight: "bold"}} x={50} y={20} textAnchor="middle"/>
            <VictoryAxis
                dependentAxis
                tickValues={ticks}
                />
            <VictoryAxis
                independentAxis
                tickValues={["1 kyu", "2 kyu", "3 kyu", "4 kyu", "5 kyu", "6 kyu", "7 kyu", "8 kyu"]}
                />
            <VictoryBar horizontal
                labels={({datum})  => datum.y}
                labelComponent={<VictoryLabel/>}
                barRatio = {0.8}
                style={{
                    data: { fill: "#c43a31" }
                    }}
                data={plotData.dataPoints}
            />
        </VictoryChart>
    )
}
