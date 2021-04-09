import styled from 'styled-components';
import { NavHashLink } from 'react-router-hash-link';

export const StyledLink = styled(NavHashLink)`
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
    button {
        background: #2E0062;
        border: none;
        &: focus {
            outline: none;
        }
        cursor: pointer;
    }
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