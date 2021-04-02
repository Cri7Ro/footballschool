import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import GroupAge from './GroupAge';

const StyledSection = styled.section`
    padding: 7.5rem .5rem;
    display: flex;
    flex-direction: column;
    color: white;
    h2 {
        margin: auto;
        margin-bottom: 7.5rem;
    }
    background-color: #6D3EA2;
    overflow: hidden;

    @media screen and (max-width: 480px) {
        h2 {
            text-align: center;
        }
        
    }
`;



const Groups: React.FC = () => {
    return (
    <StyledSection>
        <h2>Две возрастные группы</h2>
        <GroupAge
            src='./img/groups/bear.png'
            side='left'
            heading='3-5 лет'
            text='Специалисты рекомендуют начинать заниматься футболом с 3 лет. Не все школы идут на это. У нас дети занимаются по уникальной методике, разработанной для самых маленьких.' 
        />
        <GroupAge
            src='./img/groups/controller.png'
            side='right'
            heading='6-10 лет'
            text='В группу постарше переходят как опытные ребята из младшей группы, так и те, кто только начинают занятия футболом.'
        />
    </StyledSection>
    );
}

export default Groups;