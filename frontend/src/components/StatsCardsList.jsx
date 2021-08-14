import React from 'react'
import styled from 'styled-components'
import StatsCard from './StatsCard'

const StatsCards = () => {
    const data = [
        {
            title: 'Avarage Sleep Duration',
            value: '9 Hours'
        },
        {
            title: 'Avarage Sleep - Wake Up Times',
            value: 'S: 01:00 AM W: 10:00 AM'
        },
        {
            title: 'Less Than 6 Hours',
            value: '1 Day'
        },
        {
            title: 'More Than 8 Hours',
            value: '3 Days'
        }
    ]

    return (
        <Container>
            {data.map(item => (
                <StatsCard title={item.title} value={item.value} key={item.title} />
            ))}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5rem 0;
`

export default StatsCards
