import React from "react"
import GlobalStyles from "../GlobalStyles"
import styled from "styled-components"

import AccountArea from "../components/AccountArea"
import NewEntryButton from "../components/NewEntryButton"
import SleepDuration from "../components/SleepDuration"
import StatsCards from "../components/StatsCards"
import StatsTable from "../components/StatsTable"
import WelcomingArea from "../components/WelcomingArea"

const Dashboard = () => {
  return (
    <Container>
      <GlobalStyles />
      <Content>
        <Logo>
          <h1>
            <span>Sleep</span>Tracker
          </h1>
        </Logo>
        <WelcomingAreaWrapper>
          <WelcomingArea />
          <NewEntryButton />
        </WelcomingAreaWrapper>
        <SleepDuration />
      </Content>

      <Panel>
        <AccountArea />
        <StatsCards />
        <StatsTable />
      </Panel>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
`

const Content = styled.div`
  padding: 3rem 5rem;
  width: 60%;
  height: 100vh;
`

const Logo = styled.div`
  h1 {
    font-size: 2.5rem;
    color: white;
    font-weight: 400;

    span {
      font-weight: 700;
    }
  }
`

const WelcomingAreaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 6rem 0;
  padding-right: 20rem;
`

const Panel = styled.div`
  padding: 3rem;
  background: #2e2e48;
  width: 40%;
  height: 100vh;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
`

export default Dashboard
