import React from "react"
import GlobalStyles from "../GlobalStyles"
import styled from "styled-components"

import AccountArea from "../components/AccountArea"
import NewEntryButton from "../components/NewEntryButton"
import SleepDuration from "../components/SleepDuration"
import StatsCards from "../components/StatsCardsList"
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
        <Footer>
          <p>{'</>'} by <a href="https://www.github.com/idnzozkan" title="GitHub" target='_blank'>Deniz Ozkan</a></p>
        </Footer>
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
  width: 55%;
  height: calc(100vh + 10rem);
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
  padding-right: 15rem;
`

const Panel = styled.div`
  padding: 3rem;
  background: #2e2e48;
  width: 45%;
  height: auto;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
`

const Footer = styled.div`
  padding-top: 4rem;

  p, p > a {
    color: #9595c530;
    font-size: 0.75rem;

    a {
      font-weight: 600;

      &:hover {
      color: #9595c540;
      }
    }

  }
`

export default Dashboard
