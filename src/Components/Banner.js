import React from 'react'
import styled, { css } from 'styled-components'
import pub from '../image/beer.jpeg'

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
  position: relative;
  text-align: center;
  width: 40%;
  ${media.tablet`
  width: 100%;
  `}
`

const Photo = styled.img`
  width: 100%;
  margin-top: 5vh;
  transition: all 0.35s;
  :hover {
    opacity: 0.5;
  }
`

const Title = styled.div`
  font-weight: 300;
  font-weight: bold;
  color: white;
  position: absolute;
  font-size: 2em;
  bottom: 5%;
  left: 5%;
  ${media.tablet`
  font-size: 20px;
  width: 100%;
  font-weight: none;
  top: 65%;
  left: 50%;
  margin: 0;
  transform: translate(-50%, -50%);
  text-align: center;
  `}
`

const Banner = () => {
  return (
    <Wrapper>
      <Photo src={pub}></Photo>
      <Title>반응형 웹 사이트 만들기 실습</Title>
    </Wrapper>
  )
}

export default Banner
