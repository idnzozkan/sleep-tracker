import React from 'react'
import styled from 'styled-components'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

const LoadingScreen = () => {
    const spinIcon = <LoadingOutlined style={{ fontSize: 48, color: '#465EAD' }} spin />

    return (
        <Container>
            <Spin indicator={spinIcon} />
            <span>Please Wait</span>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 100;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: #2A2A42;

    span {
        color: #465EAD;
        margin-top: 1rem;
        font-size: 1rem
    }
`

export default LoadingScreen
