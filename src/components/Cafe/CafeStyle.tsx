import styled from 'styled-components';

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    background-image: url(./img/cafe/background.png);
    background-size: cover;
    h2 {
        text-align: center;
        margin: 7.5rem auto 27.5rem;
    }
    position: relative;
    overflow: hidden;

    @media screen and (max-width: 699px) {
        h2 {
            margin: 7.5rem auto 10rem;
        }
    }
`;

export const StyledDiv = styled.div`
    display: flex;
    margin: 0 0 5rem 90%;
    transition: .5s;

    @media screen and (max-width: 699px) {
        flex-direction: column;
        align-items: center;
        margin: 0 0 5rem 0;
    }
`;

interface IProps {
    side: string
    disabled: boolean
}
  
interface Attrs {
    disabled: boolean
}
  
export const StyledButton = styled.button.attrs<Attrs>(props => ({disabled: props.disabled}))<IProps>`
    min-width: 80px;
    height: 80px;
    background-color: #6D3EA2;
    border: 0;
    border-radius: 50%;
    cursor:  ${props => !props.disabled  ? 'pointer' : ''};
    &: focus {
        outline: none;
    }
    &: ${props => !props.disabled  ? 'active { outline: none; background-color: #FFE197;}' : ''};
    filter: ${props => props.disabled  ? 'grayscale(70%)' : ''};
    z-index: 2;
    position: absolute;
    top: 75%;
    left: ${props => props.side === 'left' ? 'calc(100vw - (100vw - 100%))'  : '1%'};
    transform: ${props => props.side === 'left' ? 'translateX(-120%)'  : ''};

    @media screen and (max-width: 699px) {
        display: none;
    }
 `;