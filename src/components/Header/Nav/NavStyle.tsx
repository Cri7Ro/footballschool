import styled from 'styled-components';

export const StyledLink = styled.a`
    text-decoration: none;
    color: white;
    font-size: 1.2rem;
    line-height: 1.7rem;
    &: hover {
        color: #F9E840;
    }
`;

export const StyledUl = styled.ul`
    display: flex;
    li {
        margin-right: 1.7vw;
    }
    li:last-of-type {
        margin-right: 0;
        a {
            color: #FFE197;
            &: before {
                content: '👉';
            }
        }    
    }
    div {
        display: none;
    }
    @media screen and (max-width: 1200px) {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        flex-direction: column;
        li {
            margin: 1rem 2vw;
        }
        background-color: #2E0062;
    }
    @media screen and (max-width: 480px) {
        div {
            display: flex;
            align-self: center;
            a {
                margin-right: 2.5vw;
            }
        }
    }
`;