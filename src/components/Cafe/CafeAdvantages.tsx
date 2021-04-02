import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    padding: 3rem;
    background-color: #2E0062;
    border-radius: 20px;
    margin-bottom: 1.25rem;
    h4 {
        margin-bottom: .75rem;
    }
    h5 {
        margin-right: 2rem;
    }
    color: white;
    width: 40vw;
    margin-right: 2rem;
`;

const StyledContainer = styled.div`
    display: flex;
`;

const Image = styled.img`
    max-height: 120px;
    align-self: flex-end;
`;

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
                <h5>{props.text}</h5>
                <Image src={props.src} alt=""/>
            </StyledContainer>
        </StyledDiv>
    );
});

export default CafeAdvantages;