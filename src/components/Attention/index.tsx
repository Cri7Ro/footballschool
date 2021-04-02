import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem 10%;
    div {
        display: flex;
        align-items: center;
        margin-bottom: 2.5rem;
    }
    div:last-child {
        margin-bottom: 0;
    }
    h5 {
        margin-right: 2vw;
    }
    h5:last-child {
        margin-right: 0;
    }
    background-color: #00B0FF;
    color: white;
    overflow: hidden;
`;

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