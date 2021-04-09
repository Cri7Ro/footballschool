import styled from 'styled-components';

export const StyledDiv = styled.div<{textColor: string, columnColor: string}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        margin-bottom: 1.25rem;
    }
    h5 {
        margin-bottom: 1.4rem;
    }
    p {
        margin-bottom: 7rem;
    }
    border-radius: 40px;
    color: ${props => props.textColor};
    background-color: ${props => props.columnColor};
    padding: 3rem 5vw;
    z-index: 10;
    text-align: center;

    @media screen and (max-width: 650px) {
        width: 75vw;
        padding: 1.5rem 5vw;
        img {
            margin-bottom:.5rem;
        }
        h5 {
            margin-bottom: 1.4rem;
        }
        p {
            margin-bottom: 3rem;
        }
        margin-bottom: 1.5rem;
}
`;