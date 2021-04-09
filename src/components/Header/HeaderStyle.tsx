import styled from 'styled-components';

export const StyledHeader = styled.header`
    background: #2E0062;
    box-shadow: 0px 4px 0px #230C3D;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1vh 7vw;
`;

export const StyleDiv = styled.div`
    display: flex;
    align-items: center;
    span {
        font-size: 1.2rem;
        line-height: 1.7rem;
        margin-right: 1.3vw;
    }
    img {
        margin-right: 0.9vw;
    }
    div {
        display: flex;
        align-items: center;

        @media screen and (max-width: 480px) {
            display: none;
        }
    }
    button {
        background: #2E0062;
        border: none;
        &: focus {
            outline: none;
        }
        cursor: pointer;
    }
`;

export const Burger = styled.button`
    display: none;
    background: #2E0062;
    border: 0;
    poesition: relative;
    cursor: pointer;
    &: focus {
        outline: none;
    }
    @media screen and (max-width: 1200px) {
        display: block;
    }
`;

export const DropBox = styled.div`
    @media screen and (max-width:1200px) {
        position: relative;
        order: 1;
    }
`;
