import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import logoSrc from 'assets/logo.png'

class Header extends Component {
  static propTypes = {}

  render() {
    return (
      <Wrapper>
        <Logo src={logoSrc} />
        <Tagline>
          Your daily dose of FIRE inspiration, education & entertainment.
        </Tagline>
        <DividerLine />
      </Wrapper>
    )
  }
}

export default Header

const Wrapper = styled.div`
  padding: 30px;
  text-align: center;
`

const Logo = styled.img`
  width: 620px;
  max-width: 100%;
  margin-bottom: 2px;
`

const Tagline = styled.div`
  font-size: 17px;
  font-weight: 300;
  color: #ffe0e0;

  @media (max-width: 620px) {
    font-size: 14px;
    margin-top: 8px;
  }
`

const DividerLine = styled.div`
  border-bottom: 1px solid #d2000080;
  width: 80%;
  margin: 40px auto 0;

  @media (max-width: 620px) {
    width: 90%;
  }
`
