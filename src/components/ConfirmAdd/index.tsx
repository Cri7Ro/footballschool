import React from 'react';
import {StyledSection, StyledButton} from './ConfirmAddStyle';

interface IState {
    confirm: boolean,
    setConfirmSignup: (value: boolean | ((prevHeight: boolean) => boolean)) => void
};

const ConfirmSignup: React.FC<IState> = ({confirm, setConfirmSignup}) => {
    
    function handleClickClose(): void {
        setConfirmSignup(prev => !prev);
    };

    return ( confirm ?
        <StyledSection>
            <h3>Лучшее решение за сегодня!</h3>
            <img src="./img/hand.png" alt=""/>
            <h4>Заявка уже улетела нам на почту, скоро позвоним</h4>
            <StyledButton onClick={handleClickClose}><img src="./img/close.png" alt=""/></StyledButton>
        </StyledSection>
        : null
    );
};

export default ConfirmSignup;