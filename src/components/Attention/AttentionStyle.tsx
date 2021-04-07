import styled from 'styled-components';

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem 10%;
    div {
        display: flex;
        align-items: center;
        margin-bottom: 2.5rem;
    }
    div:last-child {
        margin-bottom: 0;
    }
    h5 {
        margin-right: 2vw;
    }
    h5:last-child {
        margin-right: 0;
    }
    background-color: #00B0FF;
    color: white;
    overflow: hidden;

    @media screen and (max-width: 480px) {
        div {
            display: flex;
            flex-direction: column;
            text-align: center;
        }
        div:last-child {
            display: flex;
            flex-direction: column;
            text-align: center;
            h5 {
                margin-bottom: 1rem;
            }
        }
    }
    @media screen and (min-width: 481px) and (max-width: 667px) {
        div {
            display: flex;
            flex-direction: column;
            text-align: center;
        }
        div:last-child {
            display: flex;
            flex-direction: row;
            text-align: center;
        }
    }
`;