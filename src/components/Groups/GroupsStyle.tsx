import styled from 'styled-components';

export const StyledSection = styled.section`
    padding: 7.5rem .5rem;
    display: flex;
    flex-direction: column;
    color: white;
    h2 {
        margin: auto;
        margin-bottom: 7.5rem;
    }
    background-color: #6D3EA2;
    overflow: hidden;


    @media screen and (max-width: 480px) {
        h2 {
            text-align: center;
        }
    }
    @media screen and (min-width: 480px) and (max-width: 767px) {
        h2 {
            text-align: center;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 991px) {
        h2 {
            text-align: center;
        }
    }
    @media screen and (min-width: 992px) and (max-width: 1199px) {
        h2 {
            text-align: center;
        }
    }
`;