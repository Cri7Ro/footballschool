import React from 'react';
import {StyledLink, StyledUl} from './NavStyle';

const Nav = React.forwardRef<HTMLElement | null>((props, ref) => {

    return (
        <nav ref={ref}>
            <StyledUl>
                <li><StyledLink smooth to="/footballschool#advantages">Преимущества</StyledLink></li>
                <li><StyledLink smooth to="/footballschool#trainers">Тренеры</StyledLink></li>
                <li><StyledLink smooth to="/footballschool#cafe">Кафе</StyledLink></li>
                <li><StyledLink smooth to="/footballschool#cost">Стоимость</StyledLink></li>
                <li><StyledLink smooth to="/footballschool#contacts">Контакты</StyledLink></li>
                <li><StyledLink smooth to="/footballschool#signup">Записаться</StyledLink></li>
                <div>
                    <button><img src="./img/socials/vk_red.png" alt="VK_LOGO"/></button>
                    <button><img src="./img/socials/insta_red.png" alt="INST_LOGO"/></button>
                    <button><img src="./img/socials/telegramm_red.png" alt="TELEGRAM_LOGO"/></button>
                </div>
            </StyledUl>
        </nav>
    );
});

export default Nav;