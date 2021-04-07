import React from 'react';
import {StyledSection} from './AttentionStyle';

const Attention: React.FC = () => {
  return (
    <StyledSection>
        <div>
            <img src="./img/boy.png" alt=""/>
            <h4>Внимание к детям превыше всего</h4>
        </div>
        <div>
            <h5>Все наши занятия проходят в ФОЦ «Сосновка Парк», на базе которой создана школа.</h5>
            <h5>Мы не сетевой проект и направляем внимание только на качественную подготовку воспитанников.</h5>
        </div>
    </StyledSection>
  );
}

export default Attention;