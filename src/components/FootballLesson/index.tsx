import React from 'react';
import styled, { StyledComponent } from 'styled-components';

const StyledSection = styled.section`
    color: white;
    background-color: #6D3EA2;
    h2 {
        margin-bottom: 7.5rem;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 7.5rem 0 10rem 0;
    img {
        margin-right: 2vw;
        width: 38vw;
    }
    overflow: hidden;
`; 

const Wrapper = styled.div`
    padding: 0 15vw 0 15vw; 
    display: flex;    
    div {
        display: flex;
        flex-direction: column;
        p {
            margin-bottom: 1.25rem;
        }
    };
`;

const Li = styled.li<{attr: string}>`
    margin-bottom: 1.25rem;
    list-style-position: inside;
    list-style-image: url(${props => props.attr === 'phone' ? './img/lesson/phone.png' : './img/lesson/letter.png'});
    i {
        position: relative;
        top: -18px;
    }
`; 

const FootballLesson: React.FC = () => {
    return (
        <StyledSection>
            <h2>Проведем у вас занятие по футболу</h2>
            <Wrapper>
                <img src="./img/lesson/lesson_video.png" alt=""/>
                <div>
                    <p>Середина 1980-х и середина 1990-х ознаменовались бурным развитием теории струн, 
                        ожидалось, что в ближайшее время на основе теории струн будет сформулирована так 
                        называемая «единая теория», или «теория всего»,
                        поискам которой Эйнштейн безуспешно посвятил десятилетия.</p>
                    <ul>
                        <Li attr='phone'><i>+7(812)242 62 91</i></Li>
                        <Li attr='e-mail'><i>info@parksosnovka.ru</i></Li>
                    </ul>
                </div>
            </Wrapper>
        </StyledSection>
    );
} 

export default FootballLesson;