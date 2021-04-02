import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
    background-image: url(./img/form/form.png);
    background-size: 100% auto;
    background-repeat: no-repeat;
    position: relative;
    img {
        position: absolute;
        top: 5%;
        left: 70%;
        z-index: 1;
    }
    div {
        display: flex;
        flex-direction: column;
        margin-left: 70vw;
        h2 {
            font-size: 3rem;
            width: 20vw;
            z-index: 2;
            position: absolute;
            top: 15%;
            left: 73%;
        }
        h3 {
            margin-top: 40rem;
            margin-bottom: 4.6rem;
            z-index: 2;
        }
        h4 {
            margin-bottom: 25rem;
        }
    }
    color: white;
`

const SchoolForm: React.FC = () => {
    return (
        <StyledSection>
            <img src="./img/form/frame.png" alt="РАМКА ДЛЯ ТЕКСТА"/>
            <div>
                <h2>У нас модная спортивная форма</h2>
                <h3>Брендированные футболки, шорты и гетры Joma</h3>
                <h4>Стоимость комплекта — 2500₽</h4>
            </div>
        </StyledSection>
    );

}

export default SchoolForm;