import React from 'react';
import styled, { keyframes } from 'styled-components';

const CircularProgress = styled.div`
  width: ${props => props.size || '100px'};
  height: ${props => props.size || '100px'};
  border-radius: 50%;
  position: relative;
  background: ${props => props.backgroundColor || '#f1f1f1'};
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const ProgressFill = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  clip: rect(0, ${props => 100 - props.progress}%, 100%, 0);
  background-color: ${props => props.progressColor || '#3498db'};
  animation: ${rotate} ${props => props.duration || '1s'} linear infinite;
`;

const CircularProgressIndicator = ({ progress, size, backgroundColor, progressColor, duration }) => {
  return (
    <CircularProgress size={size} backgroundColor={backgroundColor}>
      <ProgressFill progress={progress} progressColor={progressColor} duration={duration} />
    </CircularProgress>
  );
};

export default CircularProgressIndicator;
