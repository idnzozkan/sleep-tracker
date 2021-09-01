import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import AvarageSleepDuration from './AvarageSleepDuration'
import AvarageSleepWakeUpTimes from './AvarageSleepWakeUpTimes'
import LessThanSixHours from './LessThanSixHours'
import MoreThanSixHours from './MoreThanSixHours'

const StatsCards = () => {
    const entriesData = useSelector(state => state.entry.entries)

    return (
        <Container>
            <AvarageSleepDuration data={entriesData} />
            <AvarageSleepWakeUpTimes data={entriesData} />
            <LessThanSixHours data={entriesData} />
            <MoreThanSixHours data={entriesData} />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5rem 0;
`

export default StatsCards
