import React, { useEffect, useRef } from 'react';
import {StyledLink, StyledUl} from './NavStyle';

const Nav = React.forwardRef<HTMLElement | null>((props, ref) => {

    return (
        <nav ref={ref}>
            <StyledUl>
                <li><StyledLink href="">Преимущества</StyledLink></li>
                <li><StyledLink href="">Тренеры</StyledLink></li>
                <li><StyledLink href="">Отзывы</StyledLink></li>
                <li><StyledLink href="">Стоимость</StyledLink></li>
                <li><StyledLink href="">Контакты</StyledLink></li>
                <li><StyledLink href="">Записаться</StyledLink></li>
                <div>
                    <a href='#'><img src="./img/socials/vk_red.png" alt="VK_LOGO"/></a>
                    <a href='#'><img src="./img/socials/insta_red.png" alt="INST_LOGO"/></a>
                    <a href='#'><img src="./img/socials/telegramm_red.png" alt="TELEGRAM_LOGO"/></a>
                </div>
            </StyledUl>
        </nav>
    );
});

export default Nav;