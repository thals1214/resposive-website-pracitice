import React from "react";
import styled from "styled-components";

const LoadCircle = styled.div`
  border: 16px solid grey;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;

  animation: App-logo-spin 1s linear infinite;
  @keyframes App-logo-spin {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
  position: fixed;
  top: 50%;
  left: 50%;
`;

const Loading = () => {
  return <LoadCircle />;
};

export default Loading;
