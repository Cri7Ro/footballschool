import React, {useRef, useState} from 'react';
import {StyledImg} from './BackImgStyle';

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