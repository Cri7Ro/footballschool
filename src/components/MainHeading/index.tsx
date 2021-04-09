import React from 'react';
import {StyledSection} from './MainHeadingStyle';

interface ISignup {
    setSignup: (value: boolean | ((prevHeight: boolean) => boolean)) => void,
}

const MainHeading: React.FC<ISignup> = ({setSignup}) => {

    function handleOnClick(): void {
        setSignup(prev => !prev);
    }

    return (
        <StyledSection>
            <h1>Футбольная школа<br/>для детей от 3-х до 10 лет</h1>
            <p>Наши ученики становятся звездами<br/>футбола среди ровесников</p>
            <button onClick={handleOnClick} id='signup'>Записаться</button>
        </StyledSection>
    );
}

export default MainHeading;