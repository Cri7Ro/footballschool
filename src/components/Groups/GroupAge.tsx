import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div<{side: string}>`
    padding: 3rem;
    background-color: #2E0062;
    border-radius: 20px;
    margin-bottom: 1.25rem;
    margin-left: ${props => props.side === 'left' ? '15vw' : '45.3vw'};
    margin-right: ${props => props.side === 'left' ?  '45.3vw' : '15vw'};
    position: relative;
    h4 {
        margin-bottom: .75rem;
    }
    h5 {
        margin-right: 2rem;
    }
    overflow: hidden;

    @media screen and (max-width: 480px) {
        align-items: center;
        padding: 3rem 0 3rem 2rem;
        margin-left: 0;
        margin-right: 0;
    }
`;

const Ellipse = styled.img<{side: string}>`
    position: absolute;
    top: ${props => props.side === 'left' ?  '100%' : '0'};
    left: ${props => props.side === 'left' ?  '97%' : '5%'};
    transform: ${props => props.side === 'left' ?  'translate(-100%, -100%)' : ''};

    @media screen and (max-width: 480px) {
        top: ${props => props.side === 'right' ?  '100%' : '0'};
        left: 3%;
        transform: ${props => props.side === 'right' ?  'rotate(-180deg) translateY(100%)' : 'rotate(-180deg)'};
    }
`;

const StyledContainer = styled.div`
    display: flex;

    @media screen and (max-width: 480px) {
        flex-direction: column;
    }
`;

const Image = styled.img`
    max-height: 120px;
    align-self: flex-end;

    @media screen and (max-width: 480px) {
        display: none;
    }
`;

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