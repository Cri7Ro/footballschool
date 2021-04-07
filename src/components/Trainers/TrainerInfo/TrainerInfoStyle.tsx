import styled from 'styled-components';

export const StyledButton = styled.button<{inf: boolean}>`
    display: flex;
    align-items: center;
    padding: 1rem 1.3vw;
    background-color: ${props => props.inf ? '#FFE197' : '#6D3EA2'};
    color: ${props => props.inf ? '#6D3EA2' : 'white'};
    border: 0;
    cursor: pointer;
    border-radius: 8px;
    font-family: inherit;
    font-size: 1.25rem;
    line-height: 1.75rem;
    &: focus {
        outline: none;
    }
    margin-right: .6vw;
`;

export const StyledButtonContainer = styled.div`
    display: flex;
    margin-bottom: 2.5rem;
`;

export const StyledContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 7.5rem;
    h4 {
        margin-bottom: 2rem;
    }
   

    @media screen and (max-width: 480px) {
        order: 1;
        padding: 0 11.5rem 0;
    }
    @media screen and (min-width: 481px) and (max-width: 680px) {
        order: 1;
        padding: 0 7rem;
    }
    @media screen and (min-width: 681px) and (max-width: 767px) {
        order: 1;
        padding: 0 1rem;
    }
    @media screen and (min-width: 768px) and (max-width: 991px) {
        order: 1;
        padding: 0 1rem;
    }
`;

export const StyledContainer = styled.div`
    display: flex;
    align-items: flex-start;

    @media screen and (max-width: 480px) {
        flex-direction: column;
    }
    @media screen and (min-width: 481px) and (max-width: 767px) {
        flex-direction: column;
    }
    @media screen and (min-width: 768px) and (max-width: 991px) {
        align-items: center;
        flex-direction: column;
        
    }
`;

export const StyledImage = styled.img`
    max-width: 700px;
    position: relative;
`;