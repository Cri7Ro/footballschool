import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Nav from './Nav'
import {StyledHeader, StyleDiv, Burger, DropBox} from './HeaderStyle';

const Header: React.FC = () => {

    const ref = useRef<HTMLElement | null>(null);
    let refUl: any;
    
    useEffect(() => {
        if (ref) refUl = ref.current?.firstChild;    
    }, [ref]);

    function handleOnClick(): void {
        if (refUl) {
            let display = getComputedStyle(refUl).display;

            if (display === 'none') {
                refUl.style.display = 'flex';
                refUl.style.top = '52px';
                refUl.style.transform = 'translateX(-65%)';
                refUl.style.borderBottomLeftRadius = '20px';
                refUl.style.borderBottomRightRadius = '20px';
                refUl.style.opacity = '.95';
            } else  refUl.style.display = 'none';  
        };
    };
    
    return (
        <StyledHeader>
            <img src="./img/logo.png" alt="ЛОГО ШКОЛЫ"/>
            <DropBox>
                <Burger onClick={handleOnClick}><img src="./img/burger.png" alt=""/></Burger>
                <Nav ref={ref}/>
            </DropBox>
            <StyleDiv>
                <span>+7(812)242 62 91</span>
                <div className="socials">
                    <a href='#'><img src="./img/socials/vk_red.png" alt="VK_LOGO"/></a>
                    <a href='#'><img src="./img/socials/insta_red.png" alt="INST_LOGO"/></a>
                    <a href='#'><img src="./img/socials/telegramm_red.png" alt="TELEGRAM_LOGO"/></a>
                </div>
            </StyleDiv>
        </StyledHeader>
    );
}



export default Header;