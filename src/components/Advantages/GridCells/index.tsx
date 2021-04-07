import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const StyledImg = styled.img`
    margin-bottom: 1.5rem;
`

interface cell {
    src: string,
    alt: string,
    text: JSX.Element
};

const GridCells: React.FC<cell> = ({src, alt, text}) => {
    return (
        <StyledDiv >
            <StyledImg src={src} alt={alt}/>
            {text}
        </StyledDiv >
    );
};

export default GridCells;

