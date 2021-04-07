import React from 'react';
import {StyledDiv} from './CostLvlStyle';

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