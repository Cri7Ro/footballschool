import styled from 'styled-components';

export const StyledForm = styled.form<{disabled: boolean, signup: boolean}>`
    position: fixed;
    top: 5%;
    left: 50%;
    transform: translateX(-50%);
    display: ${props => props.signup ? 'flex' : 'none'};
    flex-direction: column;
    text-align: center;
    input{
        font-family: inherit;
        font-size: 1.5rem;
        line-height: 2.25rem;
        height: 3.75rem;
        width: 100%;
        margin-bottom: 2rem;
        border: 2px solid #FFE197;
        box-sizing: border-box;
        border-radius: 50px;
        padding-left: 2rem;
        &: focus {
            outline: none;
        }
    };
    input[type='submit'] {
        background: ${props => props.disabled ? '#B0B0B0' : '#2E0062'};
        box-shadow: 0px 4px 0px ${props => props.disabled ? '#888888' : '#2E0062'};
        border-radius: 50px;
        border: 0;
        color: white;
        cursor: ${props => props.disabled ? '' : 'pointer'};
    };
    input[type='date'] {
        padding-right: 10%;
    }
    padding: 4rem 7.5rem 5rem;
    background: #FFF6E1;
    border: 10px solid rgba(255, 225, 151);
    box-sizing: border-box;
    border-radius: 40px;
    color: #2E0062;
    width: 35vw;
    h3 {
        margin-bottom: 1rem;
    }
    h5 {
        margin-bottom: 2rem;
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