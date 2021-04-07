import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import trainFoto from './foto';

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
    };
    z-index: 2;
    position: absolute;
    top: 50%;
    left: ${props => props.side === 'left' ? 'calc(100vw - (100vw - 100%))'  : '1%'};
    transform: ${props => props.side === 'left' ? 'translateX(-120%)'  : ''};
    
    @media screen and (max-width: 480px) {
        height: 20px;
        width: ;
    }
`;

const StyledSection = styled.section`
    position: relative;
    h2 {
        position: absolute;
        top: 5rem;
        left: 2.5vw;
        z-index: 3;
        color: white;
        width: 10vw;
    }
    overflow: hidden;

    @media screen and (max-width: 480px) {
        h2 {
            font-size: 1rem;
            line-height: 1rem;
            top: 1.5rem;
            left: 2.5vw;
            z-index: 3;
            color: white;
            width: 10vw;
        }
    }
`;

const StyledImg = styled.img`
    width: 100%;
    display: block;
    z-index: 1;
`;

const Frame = styled.img`
    position: absolute;
    top: 2.5rem;
    left: 0;
    z-index: 2;
    width: 300px;
    opacity: .9;

    @media screen and (max-width: 480px) {
        top: .5rem;
        width: 100px;
    }
`;

const Foto: React.FC = () => {

    const [foto, setFoto] = useState<number>(0);

    function handlePrevClick(): void {
        if (trainFoto[foto - 1])
            setFoto(prev => prev - 1);
        else setFoto(trainFoto.length - 1);
    };
    
    function handleNextClick(): void {
        if (trainFoto[foto + 1])
            setFoto(prev => prev + 1);
        else setFoto(0);
    };  

    return (
        <StyledSection>
        <h2>Фото занятий</h2>
        <Frame src="./img/foto/frame.png" alt=""/>
            <StyledButton side='right'onClick={handlePrevClick}><img src="./img/trainers/arrow_right.png" alt=""/></StyledButton>
                <StyledImg src={trainFoto[foto].image} alt=""/>
            <StyledButton side='left' onClick={handleNextClick}><img src="./img/trainers/arrow_left.png" alt=""/></StyledButton>
        </StyledSection>
    );
}

export default Foto;