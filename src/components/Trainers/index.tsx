import React, { useState } from 'react';
import {StyledSection, StyledButton, StyledDiv} from './TrainersStyle';
import TrainerInfo from './TrainerInfo/'; 
import {trainers_info} from './trainers_info';
import { useHistory } from 'react-router-dom';

const Trainers: React.FC = () => {
    const [trainer, setTrainer] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);

    function handleLeftClick(): void {
        if (trainer) {
            setTrainer(prev => prev - 1)
        } else {
            setTrainer(trainers_info.length - 1)
        }
    }

    function handleRightClick(): void {
        if (trainer + 1 < trainers_info.length) {
            setTrainer(prev => prev + 1)
        } else {
            setTrainer(0)
        }
    }

    const history = useHistory();

    window.onload = () => {
        history.push('/');
    }

    return (
    <StyledSection id='trainers'>
        <h2>Опытные тренеры</h2>
        <StyledButton height={height} side='right' onClick={handleRightClick}><img src="./img/trainers/arrow_right.png" alt=""/></StyledButton>
        <StyledDiv>
            <TrainerInfo 
                trainer_name={trainers_info[trainer].name}
                trainer_education={trainers_info[trainer].education}
                trainer_achievements={trainers_info[trainer].achievements}
                trainer_image={trainers_info[trainer].image}
                height={height}
                setHeight={setHeight}
            />
        </StyledDiv>
        <StyledButton height={height} side='left' onClick={handleLeftClick}><img src="./img/trainers/arrow_left.png" alt=""/></StyledButton>
    </StyledSection>
    );
}

export default Trainers;
