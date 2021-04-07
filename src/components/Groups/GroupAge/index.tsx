import React, {useEffect, useRef, useState} from 'react';
import {StyledDiv, StyledContainer, Image, Ellipse} from './GroupAgeStyle';

type Side = 'left' | 'right';

interface IGroup{
    heading: string,
    text: string,
    side: Side,
    src: string
}

type imgRef = HTMLImageElement | null;

const GroupAge: React.FC<IGroup> = ({src, side, heading, text}) => {
  
    return (
        <StyledDiv side={side}>
            <h4>{heading}</h4>
            <StyledContainer>
                <h5>{text}</h5>
                <Image src={src} alt=""/>
            </StyledContainer>
            <Ellipse side={side} src={side === 'left' ?  './img/groups/Ellipse_top.png' : './img/groups/Ellipse_bottom.png'} alt="ЭЛЛИПС"/>
        </StyledDiv>
    );
}

export default GroupAge;