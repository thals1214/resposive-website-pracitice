import React from 'react'
import styled, { css } from 'styled-components'
import logo1 from '../image/1.png'
import logo2 from '../image/2.png'
import logo3 from '../image/3.png'

const sizes = {
  desktop: 1024,
  tablet: 768,
}

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `
  return acc
}, {})

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 50px 30px;
  justify-content: center;
  align-items: center;
  background-color: gray;
  /* ${media.tablet`
  flex-direction: column;
  gap: 100px;
  padding: 100px;
  `} */
`

const Logo = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  margin: 20px 10%;
  img {
    position: relative;
    top: 25%;
    left: 25%;
    height: 50%;
    width: 50%;
  }

  ${media.tablet`
  margin: 10px;
  display:none;
  `}
  :hover {
    width: 300px;
    opacity: 0.5;
  }
`

const Circle = () => {
  return (
    <Wrapper>
      <Logo>
        <img src={logo1} />
      </Logo>
      <Logo>
        <img src={logo2} style={{ height: '15%', top: '42%' }} />
      </Logo>
      <Logo>
        <img src={logo3} style={{ width: '30%', left: '36%' }} />
      </Logo>
    </Wrapper>
  )
}

export default Circle
