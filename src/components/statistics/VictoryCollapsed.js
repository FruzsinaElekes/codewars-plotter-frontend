import React from 'react'
import { VictoryGroup, VictoryBar, VictoryChart, VictoryLegend, VictoryTooltip } from 'victory'
import styled from 'styled-components'

export default function VictoryCollapsed({ plotList }) {
    console.log(plotList[0].dataPoints)
    const barWidth = 8
    const offSet = 10
    const domainPadding = offSet * (plotList.length/2)
    const plotHeight = (barWidth + offSet/2) * 8 * plotList.length + 80

    return (
        <ChartContainer>
        <VictoryChart padding={0, 50} height={plotHeight} domainPadding={domainPadding}>   
            <VictoryLegend 
                y={10}
                x={10}
                padding= {100}
                orientation="horizontal"
                colorScale="red"
                data = {plotList.map(pd => { return {name: pd.language}})}
                />
            <VictoryGroup offset={offSet} colorScale="red">
                {plotList.map(pd => <VictoryBar
                    key ={pd.language}
                    sortKey="x"
                    sortOrder="descending"
                    horizontal 
                    barWidth={barWidth} 
                    data = {pd.dataPoints} 
                    labels={({ datum }) => datum.longLabel}
                    labelComponent={<VictoryTooltip/>}/>)}
            </VictoryGroup>
            
        </VictoryChart>
        </ChartContainer>
        
    )
}


const ChartContainer = styled.div`
    width: 80%;
    margin: auto
`