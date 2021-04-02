import React, { useState } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button<{inf: boolean}>`
    display: flex;
    align-items: center;
    padding: 1rem 1.3vw;
    background-color: ${props => props.inf ? '#FFE197' : '#6D3EA2'};
    color: ${props => props.inf ? '#6D3EA2' : 'white'};
    border: 0;
    cursor: pointer;
    border-radius: 8px;
    font-family: inherit;
    font-size: 1.25rem;
    line-height: 1.75rem;
    &: focus {
        outline: none;
    }
    margin-right: .6vw;
`;

const StyledButtonContainer = styled.div`
    display: flex;
    margin-bottom: 2.5rem;
`;

const StyledContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 7.5rem;
    h4 {
        margin-bottom: 2rem;
    }
`;

const StyledContainer = styled.div`
    display: flex;
    align-items: flex-start;
`;

const StyledImage = styled.img`
    max-width: 700px;
    position: relative;
`;

interface trainerInfo {
    trainer_name: string,
    trainer_education: string,
    trainer_achievements: string,
    trainer_image: string
};

const TrainerInfo: React.FC<trainerInfo> = ({trainer_name, trainer_education, trainer_achievements, trainer_image}) => {
    const [info, setInfo] = useState<boolean>(false);
    const [presshand, setPresshand] = useState<boolean>(true);
    const [pressedu, setPressedu] = useState<boolean>(false);

    function handleEduClick(): void {
        setInfo(true);
        setPressedu(true);
        setPresshand(false);
    }

    function handleHandClick(): void {
        setInfo(false);
        setPressedu(false);
        setPresshand(true);   
    }

    return (
        <StyledContainer>
            <StyledContentContainer>
                <h4>{trainer_name}</h4>
                <StyledButtonContainer>
                    <StyledButton inf={presshand} onClick={handleHandClick}>
                        <img src="./img/trainers/hand.png" alt=""/>
                        Достижения
                    </StyledButton>
                    <StyledButton inf={pressedu} onClick={handleEduClick}>
                        <img src="./img/trainers/edu.png" alt=""/>
                        Образование
                    </StyledButton>
                </StyledButtonContainer>
                <h5>{info ? trainer_education : trainer_achievements}</h5>
               
            </StyledContentContainer>
            <StyledImage src={trainer_image} alt=""/>
        </StyledContainer>
  );
}

export default TrainerInfo;