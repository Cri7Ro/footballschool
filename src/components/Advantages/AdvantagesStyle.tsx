import styled from 'styled-components';

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    color: #2E0062;
    h2 {
        margin: auto;
        margin-bottom: 7.5rem;
    }
    padding: 7.5rem 15vw 10rem 15vw;
    background-color: #FFF0CB;
    overflow: hidden;

    @media screen and (max-width: 480px) {
        h2 {
            margin: auto;
            margin-bottom: 5rem;
        }
        padding: 7.5rem 15vw 5rem 15vw;
    }

    @media screen and (min-width: 480px) and (max-width: 992px) {
        padding: 7.5rem 10vw 5rem 10vw;
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-rows: auto, auto;
    grid-template-columns: repeat(3, auto);
    column-gap: 2vw;
    row-gap: 3rem;

    @media screen and (max-width: 480px) {
        display: flex;
        flex-direction: column;
    }
`;