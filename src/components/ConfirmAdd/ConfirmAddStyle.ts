import styled from 'styled-components';

export const StyledSection = styled.section<{confirm: boolean}>`
    position: fixed;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    height: 70vh;
    overflow-y: auto;
    ovrflow-x: hidden;
    scrollbar-width: none;
    ::-webkit-scrollbar {
        width: 0px;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
    display: ${props => !props.confirm ? 'none' : 'flex'};
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 30vw;
    padding: 4rem 2.5rem 5rem;
    background: #FFF6E1;
    border: 10px solid rgba(255, 225, 151);
    box-sizing: border-box;
    border-radius: 40px;
    color: #2E0062;
    width: 35vw;
    h3 {
        margin-bottom: 2.5rem;
    }
    img {
        margin-bottom: 3.5rem;
    }
    z-index: 25;


    @media screen and (max-width: 480px) {
        width: 80vw;
        height: 70vh;
        padding: 4rem 1rem 5rem;
        top: 5%;
        h3 {
            font-size: 2.5rem;
            line-height: 2.1rem;
        }  
    };
    @media screen and (min-width: 481px) and (max-width: 650px) {
        width: 80vw;
        height: 70vh;
        padding: 4rem 2.5rem 2.5rem;
        top: 10%;
        h3 {
            font-size: 2.5rem;
            line-height: 2.1rem;
        }
    };
    @media screen and (min-width: 651px) and (max-width: 767px) {
        width: 65vw;
        height: 70vh;
        padding: 4rem 2.5rem 2.5rem;
        top: 10%;
        h3 {
            font-size: 2.5rem;
            line-height: 2.1rem;
        }
    };
    @media screen and (min-width: 768px) and (max-width: 1199px) {
        width: 50vw;
        height: 70vh;
        padding: 4rem 2.5rem 1.5rem;
        top: 10%;
        h3 {
            font-size: 2.5rem;
            line-height: 2.1rem;
        }
    };
`;

export const StyledButton = styled.button`
    position: absolute;
    top: 3%;
    right: 3%;
    border: none;
    background: none;
    cursor: pointer;
    &: focus {
        outline: none;
    }
`;