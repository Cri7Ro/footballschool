import styled from 'styled-components';

export const StyledImg = styled.img<{top: number, left: number, run: boolean}>`
    @keyframes mov {
        100% {
            transform: translate(50%, 50%);
            transform: rotate(360deg);
        }
    };
    position: absolute;
    left: ${props => props.left + '%'};
    top: ${props => props.top + '%'};
    z-index: 1;
    animation: mov 2.5s linear infinite;
    animation-play-state: ${props => props.run ? 'running' : 'paused'};

    @media screen and (max-width: 650px) {
        left: ${props => (props.top === 80 && props.left === 90) ? 0 : + props.left + '%'};
        top: ${props => (props.top === 5 && props.left === 10) ? 0 + '%' : 
                        (props.top === 80 && props.left === 90) ? 50 + '%' : + props.top + '%'};
    }
`;