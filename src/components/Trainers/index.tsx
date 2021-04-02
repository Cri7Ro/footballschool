import React, { useState } from 'react';
import styled from 'styled-components';
import TrainerInfo from './TrainerInfo'; 
import {trainers_info} from './trainers_info';

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem 2vw;
    background-color: #FFF0CB;
    color: #2E0062; 
    position: relative;
    overflow: hidden;
`;

const StyledButton = styled.button<{side: string}>`
    min-width: 80px;
    height: 80px;
    background-color: #6D3EA2;
    border: 0;
    border-radius: 50%;
    cursor: pointer;
    &: focus {
        outline: none;
    }
    &: active {
        outline: none;
        background-color: #FFE197;
    }
    z-index: 2;
    position: absolute;
    top: 50%;
    left: ${props => props.side === 'left' ? 'calc(100vw - (100vw - 100%))'  : '1%'};
    transform: ${props => props.side === 'left' ? 'translateX(-120%)'  : ''}; 
`;

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    margin-left: 21vw;
`;

const Trainers: React.FC = () => {
    const [trainer, setTrainer] = useState<number>(0);

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

    return (
    <StyledSection>
        <h2>Опытные тренеры</h2>
        <StyledButton side='right' onClick={handleRightClick}><img src="./img/trainers/arrow_right.png" alt=""/></StyledButton>
        <StyledDiv>
            <TrainerInfo 
                trainer_name={trainers_info[trainer].name}
                trainer_education={trainers_info[trainer].education}
                trainer_achievements={trainers_info[trainer].achievements}
                trainer_image={trainers_info[trainer].image}
            />
        </StyledDiv>
        <StyledButton side='left' onClick={handleLeftClick}><img src="./img/trainers/arrow_left.png" alt=""/></StyledButton>
    </StyledSection>
    );
}

export default Trainers;
