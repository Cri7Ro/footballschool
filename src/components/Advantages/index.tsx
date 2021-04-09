import React from 'react';
import {StyledSection, Grid} from './AdvantagesStyle';
import GridCells from './GridCells/';
import { useHistory } from 'react-router-dom';


const Advantages: React.FC = () => {

    const history = useHistory();

    window.onload = () => {
        history.push('/');
    }

    return (
        <StyledSection id='advantages'>
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