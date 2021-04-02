import React from 'react';
import styled from 'styled-components';
import GridCells from './grid_cells';

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    color: #2E0062;
    h2 {
        margin: auto;
        margin-bottom: 7.5rem;
    }
    padding: 7.5rem 15vw 10rem 15vw;
    background-color: #FFF0CB;
    overflow: hidden;

    @media screen and (max-width: 480px) {
        h2 {
            margin: auto;
            margin-bottom: 5rem;
        }
        padding: 7.5rem 15vw 5rem 15vw;
    }

    @media screen and (min-width: 480px) and (max-width: 992px) {
        padding: 7.5rem 10vw 5rem 10vw;
    }
`;

const Grid = styled.div`
    display: grid;
    grid-template-rows: auto, auto;
    grid-template-columns: repeat(3, auto);
    column-gap: 2vw;
    row-gap: 3rem;

    @media screen and (max-width: 480px) {
        display: flex;
        flex-direction: column;
    }
`;

const Advantages: React.FC = () => {
    return (
        <StyledSection>
            <h2>Преимущества</h2>
            <Grid>
                <GridCells src='./img/advantages/present.png' alt='ЛОГО ПОДАРКА' text={<h5>Первое занятие<br/>бесплатно</h5>}/>
                <GridCells src='./img/advantages/cup.png' alt='ЛОГО КУБКА' text={<h5>Индивидуальный подход к каждому<br/>ученику и уникальная методика</h5>}/>
                <GridCells src='./img/advantages/tent.png' alt='ЛОГО ПАЛАТКИ' text={<h5>Футбольный лагерь — способ занять<br/>ребенка на каникулах</h5>}/>
                <GridCells src='./img/advantages/person.png' alt='ЛОГО ЧЕЛОВЕКА' text={<h5>Тренеры — действующие футболисты<br/>и победители соревнований</h5>}/>
                <GridCells src='./img/advantages/hands.png' alt='ЛОГО РУК' text={<h5>Мини-группы до 10 человек</h5>}/>
                <GridCells src='./img/advantages/dish.png' alt='ЛОГО БЛЮДА' text={<h5>В PINEcafe можно перекусить после<br/>тренировки полезной едой</h5>}/>
            </Grid>
        </StyledSection>
    );
}

export default Advantages;