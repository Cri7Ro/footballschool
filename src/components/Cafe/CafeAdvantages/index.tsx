import React, {useEffect, useRef, useState} from 'react';
import {StyledDiv, StyledContainer, Image} from './CafeAdvantagesStyle';

interface IGroup {
    src: string,
    heading: string,
    text: string
};

const CafeAdvantages = React.forwardRef<HTMLDivElement, IGroup>((props, ref) => {
    return (
        <StyledDiv ref={ref}>
            <h4>{props.heading}</h4>
            <StyledContainer>
                <Image src={props.src} alt=""/>
                <h5>{props.text}</h5>
            </StyledContainer>
        </StyledDiv>
    );
});

export default CafeAdvantages;