import React from 'react';
import {StyledImg} from './BackImgStyle';

interface Iprops {
  image: string,
  top: number,
  left: number,
  run: boolean
}

const BackImg: React.FC<Iprops> = (props) => {
  return (
    <StyledImg src={props.image} top={props.top} left={props.left} run={props.run}/>
  );
};

export default BackImg;