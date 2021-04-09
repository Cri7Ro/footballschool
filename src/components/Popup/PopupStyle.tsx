import styled from 'styled-components';

export const StyledForm = styled.form<{disabled: boolean}>`
    margin-top: 2.5rem;
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
        width: 70%;
        cursor: ${props => props.disabled ? '' : 'pointer'};
    };
    input[type='date'] {
        padding-right: 10%;
    }
    
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
    right: 3%;
    border: none;
    background: none;
    cursor: pointer;
    &: focus {
        outline: none;
    }
`;

export const StyledSection = styled.section<{signup: boolean}>`
    position: fixed;
    top: 5%;
    left: 50%;
    height: 90vh;
    overflow-y: auto;
    ovrflow-x: hidden;
    scrollbar-width: none;
    ::-webkit-scrollbar {
        width: 0px;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
    transform: translateX(-50%);
    background: #FFF6E1;
    border: 10px solid rgba(255, 225, 151);
    box-sizing: border-box;
    border-radius: 40px;
    color: #2E0062;
    width: 35vw;
    display: ${props => props.signup ? 'flex' : 'none'};
    align-items: center;
    padding: 0 5rem;
    z-index: 25;

    @media screen and (max-width: 480px) {
        padding: 0 .5rem;
        width: 87vw;
        h3 {
            font-size: 2.5rem;
            line-height: 2.1rem;
        }
        h5 {
            line-height: 1.5rem;
        }
    };
    @media screen and (min-width: 481px) and (max-width: 767px) {
        padding: 0 10%;
        width: 87vw;
    }
    @media screen and (min-width: 768px) and (max-width: 1199px) {
        padding: 0 10%;
        width: 50vw;
    }
`;