import styled from 'styled-components';

export const StyledDiv = styled.div`
    padding: 3rem;
    background-color: #2E0062;
    border-radius: 20px;
    margin-bottom: 1.25rem;
    h4 {
        margin-bottom: .75rem;
    }
    h5 {
        margin-right: 2rem;
    }
    color: white;
    width: 40vw;
    margin-right: 2rem;
    opacity: .9;

    @media screen and (max-width: 699px) {
        box-sizing: border-box;
        width: 90vw;
        margin-right: 0;
        padding: 2rem;
    }
`;

export const StyledContainer = styled.div`
    display: block;
`;

export const Image = styled.img`
    max-height: 120px;
    align-self: flex-end;
    display: inline-block;
    float: right;
`;