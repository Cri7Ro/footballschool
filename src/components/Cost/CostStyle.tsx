import styled from 'styled-components';

export const StyledDiv = styled.div`
    display: flex;
    gap: 2vw;

    @media screen and (max-width: 650px) {
        flex-direction: column;
    }
`;

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #2E0062;
    h2 {
        text-align: center;
        margin: 7rem 0 7.5rem;
    }
    position: relative;
    p:last-child {
        color: #7DCE94;
        font-size: 1.3rem;
        line-height: 1.7rem;
        margin-bottom: 4rem;
    }
    overflow: hidden;
`;

export const StyledButton = styled.button`
    color: white;
    background-color: #7DCE94;
    box-shadow: 0px 4px 0px #40A85D;
    border: 0;
    border-radius: 50px;
    font-size: 1.5rem;
    line-height: 2.25rem;
    &: focus {
        outline: none;
    }
    display: flex;
    align-items: center;
    padding: .75rem 4vw;
    margin: 4rem 0 1.7rem;
    cursor: pointer;
    z-index: 10; 
`;
