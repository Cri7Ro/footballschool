import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div<{textColor: string, columnColor: string}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    img {
        margin-bottom: 1.25rem;
    }
    h5 {
        margin-bottom: 1.4rem;
    }
    p {
        margin-bottom: 7rem;
    }
    border-radius: 40px;
    color: ${props => props.textColor};
    background-color: ${props => props.columnColor};
    padding: 3rem 5vw;
    z-index: 2;
`;

interface ICard {
    image: string,
    lvl: string,
    numTrain: string,
    cost: number,
    textColor: string,
    columnColor: string
}

const CostLvl: React.FC<ICard> = ({image, lvl, numTrain, cost, textColor, columnColor}) => {
  return (
    <StyledDiv textColor={textColor}  columnColor={columnColor}>
        <img src={image} alt="ИКОНКА КОЛОНКИ"/>
        <h5>{lvl}</h5>
        <p>{numTrain}</p>
        <h4>{cost + ' рублей'}</h4>  
    </StyledDiv>
  );
}

export default CostLvl;