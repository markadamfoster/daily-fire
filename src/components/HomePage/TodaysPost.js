import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

class TodaysPost extends Component {
  static propTypes = {}

  render() {
    return (
      <Wrapper>
        <Title>Today's Post</Title>

        <PostWrapper>
          <Why>
            <WhyLead>Why it's on 🔥:</WhyLead>Lorem ipsum dolor sit amet,
            consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum
          </Why>
        </PostWrapper>
      </Wrapper>
    )
  }
}

export default TodaysPost

const Wrapper = styled.div`
  padding: 0 30px 30px 30px;
`

const Title = styled.h2`
  text-align: center;
  color: white;
  font-weight: 700;
  font-size: 28px;
`
const Why = styled.div`
  margin: 0 auto;
  // color: #ffe0e0;
  font-weight: 300;
  font-size: 15px;
`

const WhyLead = styled.span`
  font-weight: 700;
`

const PostWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  height: 600px;
  width: 600px;
  margin: 30px auto;
  padding: 20px;
`
