import React from 'react'
import styled from 'styled-components'

const LoadCircle = styled.div`
  width: 120px;
  height: 120px;
  border: 16px solid grey;
  border-top: 16px lavenderblush solid;
  border-bottom: 50%;
  border-radius: 50%;

  @keyframes spin {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
  animation: spin 1s linear infinite;

  position: fixed;
  top: 50%;
  left: 50%;
`

const Loading = () => {
  return <LoadCircle />
}

export default Loading
