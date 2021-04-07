import styled from 'styled-components';

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem 2vw;
    background-color: #FFF0CB;
    color: #2E0062; 
    position: relative;
    overflow: hidden;
    h2 {
        text-align: center;
    }
`;

export const StyledButton = styled.button<{side: string, height: number}>`
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
    
    @media screen and (max-width: 480px) {
        top: ${props => props.height + 'px'};
    }
    @media screen and (min-width: 481px) and (max-width: 767px) {
        top: ${props => props.height + 'px'};
    }
    @media screen and (min-width: 768px) and (max-width: 991px) {
        top: ${props => props.height + 'px'};
    }
`;

export const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    margin-left: 21vw;

    @media screen and (max-width: 480px) {
        margin-left: 0;
    }
    @media screen and (min-width: 481px) and (max-width: 767px) {
        margin-left: 0;
    }
    @media screen and (min-width: 768px) and (max-width: 991px) {
        margin-left: 0;
    }
`;