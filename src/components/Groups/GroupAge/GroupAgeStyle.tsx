import styled from 'styled-components';

export const StyledDiv = styled.div<{side: string}>`
    padding: 3rem;
    background-color: #2E0062;
    border-radius: 20px;
    margin-bottom: 1.25rem;
    margin-left: ${props => props.side === 'left' ? '15vw' : '45.3vw'};
    margin-right: ${props => props.side === 'left' ?  '45.3vw' : '15vw'};
    position: relative;
    h4 {
        margin-bottom: .75rem;
    }
    h5 {
        margin-right: 2rem;
    }
    overflow: hidden;


    @media screen and (max-width: 480px) {
        align-items: center;
        padding: 3rem 0 3rem 2rem;
        margin-left: 0;
        margin-right: 0;
    }
    @media screen and (min-width: 480px) and (max-width: 767px) {
        margin-left: 0;
        margin-right: 0;
    }
    @media screen and (min-width: 768px) and (max-width: 991px) {
        margin-left: 0;
        margin-right: 0;
    }
    @media screen and (min-width: 992px) and (max-width: 1199px) {
        margin-left: ${props => props.side === 'left' ? '10vw' : '30vw'};
        margin-right: ${props => props.side === 'left' ?  '30vw' : '10vw'};
    }
`;

export const Ellipse = styled.img<{side: string}>`
    position: absolute;
    top: ${props => props.side === 'left' ?  '100%' : '0'};
    left: ${props => props.side === 'left' ?  '97%' : '5%'};
    transform: ${props => props.side === 'left' ?  'translate(-100%, -100%)' : ''};

    @media screen and (max-width: 480px) {
        top: ${props => props.side === 'right' ?  '100%' : '0'};
        left: 3%;
        transform: ${props => props.side === 'right' ?  'rotate(-180deg) translateY(100%)' : 'rotate(-180deg)'};
    }
    @media screen and (min-width: 480px) and (max-width: 767px) {
        top: ${props => props.side === 'left' ?  '0' : '100%'};
        left: ${props => props.side === 'left' ?  '100%' : '0'};
        transform: ${props => props.side === 'left' ?  'rotate(-180deg) translateX(100%)' : 'rotate(-180deg) translateY(100%)'};
    }
    @media screen and (min-width: 768px) and (max-width: 991px) {
        left: ${props => props.side === 'left' ?  '97%' : '97%'};
        transform: ${props => props.side === 'left' ?  '' : 'translateX(-100%)'};
    }
    @media screen and (min-width: 992px) and (max-width: 1199px) {
        top: ${props => props.side === 'left' ?  '0' : '100%'};
        left: ${props => props.side === 'left' ?  '97%' : '97%'};
        transform: ${props => props.side === 'right' ?  'rotate(-180deg) translate(100%, 100%)' : 'rotate(-180deg) translateX(100%)'};
    }
`;

export const StyledContainer = styled.div`
    display: flex;
`;

export const Image = styled.img`
    max-height: 120px;
    align-self: flex-end;

    @media screen and (max-width: 480px) {
        display: none;
    }
`;