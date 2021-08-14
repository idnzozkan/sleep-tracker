import React from 'react'
import styled from 'styled-components'
import { Line } from '@ant-design/charts'
import { Tabs } from 'antd'

const SleepDuration = () => {
    const data = [
        {
            date: 'Aug 1',
            duration: '6H'
        },
        {
            date: 'Aug 2',
            duration: '7H'
        },
        {
            date: 'Aug 3',
            duration: '6H'
        },
        {
            date: 'Aug 4',
            duration: '8H'
        },
        {
            date: 'Aug 5',
            duration: '4H'
        },
        {
            date: 'Aug 6',
            duration: '4H'
        },
        {
            date: 'Aug 7',
            duration: '10H'
        },
    ]

    var config = {
        data,
        padding: 'auto',
        xField: 'date',
        yField: 'duration',
        xAxis: { tickCount: 7 },
        smooth: true,
    };

    const { TabPane } = Tabs

    return (
        <Container>
            <h2>Sleep Duration</h2>
            <Tabs defaultActiveKey="1" tabBarStyle={{}}>
                <TabPane tab="WEEK" key="1">
                    <ChartContainer>
                        <Line {...config} />
                    </ChartContainer>
                </TabPane>
                <TabPane tab="MONTH" key="2">
                    Content of Tab Pane 2
                </TabPane>
                <TabPane tab="YEAR" key="3">
                    Content of Tab Pane 3
                </TabPane>
            </Tabs>
        </Container>
    )
}

const Container = styled.div`
    h2 {
        color: white;
        font-size: 1.62500rem;
        font-weight: 700
    }

    .ant-tabs-nav::before {
        border: none;
    }

`

const ChartContainer = styled.div`
    max-height: 100%;
    background: #2e2e48;
    border-radius: 24px;
`

export default SleepDuration
