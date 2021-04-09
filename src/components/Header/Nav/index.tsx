import React from 'react';
import {StyledLink, StyledUl} from './NavStyle';

const Nav = React.forwardRef<HTMLElement | null>((props, ref) => {

    function handleVkClick(): void {
        console.log('ewfge4')
        window.open('https://vk.com/sosnovkapark');
    };

    function handleInstClick(): void {
        window.open('https://www.instagram.com/sosnovkapark/');
    };

    function handleTgClick(): void {
        window.open('https://t.me/strom_789');
    };

    return (
        <nav ref={ref}>
            <StyledUl>
                <li><StyledLink smooth to="/#advantages">Преимущества</StyledLink></li>
                <li><StyledLink smooth to="/#trainers">Тренеры</StyledLink></li>
                <li><StyledLink smooth to="/#cafe">Кафе</StyledLink></li>
                <li><StyledLink smooth to="/#cost">Стоимость</StyledLink></li>
                <li><StyledLink smooth to="/#contacts">Контакты</StyledLink></li>
                <li><StyledLink smooth to="/#signup">Записаться</StyledLink></li>
                <div>
                    <button onClick={handleVkClick}><img src="./img/socials/vk_red.png" alt="VK_LOGO"/></button>
                    <button onClick={handleInstClick}><img src="./img/socials/insta_red.png" alt="INST_LOGO"/></button>
                    <button onClick={handleTgClick}><img src="./img/socials/telegramm_red.png" alt="TELEGRAM_LOGO"/></button>
                </div>
            </StyledUl>
        </nav>
    );
});

export default Nav;