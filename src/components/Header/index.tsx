import React, { useEffect, useRef, useState } from 'react';
import Nav from './Nav'
import {StyledHeader, StyleDiv, Burger, DropBox} from './HeaderStyle';

const Header: React.FC = () => {

    const ref = useRef<HTMLElement | null>(null);
    const [refUl, setRefUl] = useState<any>(null);
    
    useEffect(() => {
        if (ref) setRefUl(ref.current?.firstChild);    
    }, [ref]);

    function handleOnClick(): void {
        if (refUl) {
            let display: string = getComputedStyle(refUl).display;
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
        <StyledHeader>
            <img src="./img/logo.png" alt="ЛОГО ШКОЛЫ"/>
            <DropBox>
                <Burger onClick={handleOnClick}><img src="./img/burger.png" alt=""/></Burger>
                <Nav ref={ref}/>
            </DropBox>
            <StyleDiv>
                <span>+7(812)242 62 91</span>
                <div className="socials">
                    <button onClick={handleVkClick}><img src="./img/socials/vk_red.png" alt="VK_LOGO"/></button>
                    <button onClick={handleInstClick}><img src="./img/socials/insta_red.png" alt="INST_LOGO"/></button>
                    <button onClick={handleTgClick}><img src="./img/socials/telegramm_red.png" alt="TELEGRAM_LOGO"/></button>
                </div>
            </StyleDiv>
        </StyledHeader>
    );
}



export default Header;