import React from 'react'
import styled from 'styled-components'

const WelcomingArea = () => {
    return (
        <Container>
            <h2>Hello <span>John Doe</span> 👋</h2>
            <p>Welcome to SleepTracker!</p>
            <span>Aug 12 2021 12:07 AM</span>
        </Container>
    )
}

const Container = styled.div`
    h2 {
        font-size: 2rem;
        font-weight: 400;
        color: white;   
        line-height: normal;

        span {
            font-weight: 700;
        }
    }

    p {
        font-size: 1.37500rem;
        color: #9595C5;
        line-height: normal;
    }

    &>span {
        font-size: 1rem;
        font-weight: 300;
        color: #9595C5;
        line-height: normal;

    }

`

export default WelcomingArea
