import styled from 'styled-components';

export const StyledSection = styled.section<{confirm: boolean}>`
    position: fixed;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    display: ${props => !props.confirm ? 'none' : 'flex'};
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 30vw;
    padding: 4rem 7.5rem 5rem;
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
`;

export const StyledButton = styled.button`
    position: absolute;
    top: 3%;
    left: 90%;
    border: none;
    background: #FFF6E1;
    cursor: pointer;
    &: focus {
        outline: none;
    }
`;