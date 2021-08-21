import React from 'react'
import styled from 'styled-components'
import { Tabs } from 'antd'
import { Link } from 'react-router-dom'
import SignInForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'

const Login = () => {
    const { TabPane } = Tabs

    return (
        <Container>
            <Content>
                <Link to="/">
                    <Logo>
                        <h1>
                            <span>Sleep</span>Tracker
                        </h1>
                    </Logo>
                </Link>
                <LoginFormArea>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Login" key="1">
                            <SignInForm />
                        </TabPane>
                        <TabPane tab="Register" key="2">
                            <RegisterForm />
                        </TabPane>
                    </Tabs>
                </LoginFormArea>
            </Content>
            <SideArea>
                <h1>Welcome to SleepTracker</h1>
                <p>Track your sleep times day by day to protect your productivity and health.</p>
            </SideArea>
        </Container >
    )
}

const Container = styled.div`
    display: flex;
    height: 100vh; 
`

const Content = styled.div`
    padding: 3rem 5rem; 
    height: 100vh; 
    width: 65vw;
`

const Logo = styled.div`
    display: inline-block;
    user-select: none;
    height: 10vh;
  h1 {
    font-size: 2.5rem;
    color: #465EAD;
    font-weight: 400;
    transition: all .25s ease-in;

    span {
      font-weight: 700;
    }

    &:hover {
     color: #5976d6;
    }
  }

  &:hover {
      cursor: pointer;
  }
`

const LoginFormArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 84vh; 
`

const SideArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 35vw;
    height: 100%;
    padding: 2rem;
    background: #465EAD;
    background: linear-gradient(0deg, rgba(50,58,134,1) 0%, rgba(70,94,173,1) 100%);
    text-align: center;

    h1, p {
        color: white;
    }

    h1 {
        font-size: 3rem;
        font-weight: 700;
    }

    p {
        font-size: 1.5rem;
    }
`

export default Login
