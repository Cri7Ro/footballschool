import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
    padding-bottom: 30%;
    display: flex;
    flex-direction: column;
    padding-left: 21vw;
    color: white;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
    background-image: url(./img/main_pic.jpg);
    background-size: cover;
    h1 {
        margin-top: 10rem;
    }
    p {
        font-size: 2rem;
        line-height: 2.6rem;
        margin-top: 4.3%;
        margin-bottom: 4.3%;
    }
    button {
        color:white;
        background: #2E0062;
        box-shadow: 0px 4px 0px #230C3D;
        border: 0;
        border-radius: 50px;
        width: 20vw;
        padding-top: 1.3%;
        padding-bottom: 1.3%;
        cursor: pointer;
        font-size: 1.5rem;
        line-height: 2.3rem;
        font-family: inherit;
        &: focus {
            outline: none;
        }
        &: before {
            content: '👉';
        }
    }
    overflow: hidden;

    @media screen and (max-width: 480px) {
        padding-left: 0;
        align-items: center;
        text-align: center;
        h1 {
            margin-top: 3rem;
        }
        p {
            font-size: 1.5rem;
            line-height: 1.9rem;
            margin-top: 3rem;
            margin-bottom: 10rem;
        }
        button {
            width: 70vw;
            padding-top: 1.3%;
            padding-bottom: 1.3%;
        }
    };

    @media screen and (min-width: 481px) and (max-width: 991px) {
        padding-left: 11vw;
        padding-right: 5vw;
        button {
            width: 30vw;
        }
    };

    
`;


const MainHeading: React.FC = () => {
    return (
        <StyledSection>
            <h1>Футбольная школа<br/>для детей от 3-х до 10 лет</h1>
            <p>Наши ученики становятся звездами<br/>футбола среди ровесников</p>
            <button>Записаться</button>
        </StyledSection>
    );
}

export default MainHeading;