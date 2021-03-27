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
            theme={VictoryTheme.grayscale}
            domainPadding={{ x: 20 }}
            height={400}
            style={{labels: { fontSize: 30 }}}
            >
            <VictoryLabel text={plotData.language} style= {{fontSize: 30, fontWeight: "bold"}} x={80} y={20} textAnchor="middle"/>
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
                barWidth= {20}
                height= {400}
                style={{
                    labels: { fontSize: "16"},
                    data: { fill: "#cc3939" },
                    }}
                data={plotData.dataPoints}
            />
        </VictoryChart>
    )
}
