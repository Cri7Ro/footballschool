import React, {useRef, useState} from 'react';
import styled from 'styled-components';

const StyledImg = styled.img<{top: number, left: number, run: boolean}>`
  @keyframes mov {
    100% {
      transform: translate(50%, 50%);
      transform: rotate(360deg);
    }
  };
  position: absolute;
  left: ${props => props.left + '%'};
  top: ${props => props.top + '%'};
  z-index: 1;
  animation: mov 2.5s linear infinite;
  animation-play-state: ${props => props.run ? 'running' : 'paused'};
`;

interface Iprops {
  image: string,
  top: number,
  left: number,
  run: boolean
}

const BackImg = React.forwardRef<HTMLImageElement, Iprops>((props, ref) => {
  return (
    <StyledImg ref={ref} src={props.image} top={props.top} left={props.left} run={props.run}/>
  );
});

export default BackImg;