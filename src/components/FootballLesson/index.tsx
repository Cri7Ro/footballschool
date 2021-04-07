import React from 'react';
import {StyledSection, Wrapper, Li} from './FootballLessonStyle';

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