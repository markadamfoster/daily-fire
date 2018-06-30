import React, { Component } from 'react'
// import Link from 'gatsby-link'
import styled from 'styled-components'

import Header from 'components/HomePage/Header'
import TodaysPost from 'components/HomePage/TodaysPost'

class HomePage extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <TodaysPost />
      </Wrapper>
    )
  }
}

export default HomePage

const Wrapper = styled.div``
