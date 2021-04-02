import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import CafeAdvantages from './CafeAdvantages';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  background-image: url(./img/cafe/background.png);
  background-size: cover;
  h2 {
    margin: 7.5rem auto 27.5rem;
  }
  position: relative;
  overflow: hidden;
`;

const StyledDiv = styled.div`
  display: flex;
  margin: 0 0 5rem 90%;
  transition: .5s;
`;

interface IProps {
  side: string
  disabled: boolean
}

interface Attrs {
  disabled: boolean
}

const StyledButton = styled.button.attrs<Attrs>(props => ({disabled: props.disabled}))<IProps>`
    min-width: 80px;
    height: 80px;
    background-color: #6D3EA2;
    border: 0;
    border-radius: 50%;
    cursor:  ${props => !props.disabled  ? 'pointer' : ''};
    &: focus {
        outline: none;
    }
    &: ${props => !props.disabled  ? 'active { outline: none; background-color: #FFE197;}' : ''};
    filter: ${props => props.disabled  ? 'grayscale(70%)' : ''};
    z-index: 2;
    position: absolute;
    top: 75%;
    left: ${props => props.side === 'left' ? 'calc(100vw - (100vw - 100%))'  : '1%'};
    transform: ${props => props.side === 'left' ? 'translateX(-120%)'  : ''}; 
`;


const Cafe: React.FC = () => {

  //состояние disabled кнопки 
  const [visiblePrev, setVisiblePrev] = useState<boolean>(false);
  const [visibleNext, setVisibleNext] = useState<boolean>(false);

  //шаг на который сдвигать слайдер
	const scroll_step = 200;

  //текущее значение, на которое необходимо сдвинуть слайдер влево/вправо
  const [prev, setPrev] = useState<number>(scroll_step);
  const [next, setNext] = useState<number>(scroll_step);

  //текущее значение отступов слева/справа
  const [currentFinishPrev, setCurrentFinishPrev] = useState<number>(0);
  const [currentFinishNext, setCurrentFinishNext] = useState<number>(0);

  //значения, на которых надо заблокировать кнопку
  const [finishPrev, setFinishPrev] = useState<number>(0);
  const [finishNext, setFinishNext] = useState<number>(0);

  //текущее состояние рендера контейнера
  const [load, setLoad] = useState<boolean>(false);

  //ссылка на контейнер
  const myRef = useRef<HTMLDivElement | null>(null);
  const container = myRef.current;

  //после рендера контейнера вычисляем начальные значения
  useEffect(() => {
    setLoad(true);
    if (container && load) {  
      setFinishPrev(Math.ceil(container.getBoundingClientRect().right) - window.innerWidth);
      setCurrentFinishNext(container.offsetLeft);
      setFinishNext(container.offsetLeft);
    }
  }, [container]);
	
  function handlePrevClick(): void {
    setVisibleNext(false);
    if (container)
      if (currentFinishPrev <= finishPrev) {
        setCurrentFinishNext(next => next - scroll_step);
        setCurrentFinishPrev(prev => prev + scroll_step);

        setPrev(prev => prev += scroll_step);
        setNext(next => next -= scroll_step);

        container.style.transform = `translateX(${-prev}px)`;
      } else {
        setVisiblePrev(true);
      }
  };

  function handleNextClick(): void {
    setVisiblePrev(false);
    if (container && load) {
      if (currentFinishNext <= finishNext) {
        setCurrentFinishNext(next => next + scroll_step);
        setCurrentFinishPrev(prev => prev - scroll_step);

        setNext(next => next += scroll_step);
        setPrev(prev => prev -= scroll_step);

        container.style.transform = `translateX(${next}px)`;
      } else {
        setVisibleNext(true);
      }
    }
  };

  return (
    <StyledSection>
      <h2>Уютное спортивное кафе PINECafe</h2>
      <StyledButton side='right' disabled={visiblePrev} onClick={handlePrevClick}><img src="./img/trainers/arrow_right.png" alt=""/></StyledButton>
      <StyledDiv ref = {myRef}>
        <CafeAdvantages
          heading='Вкусная еда'
          text='Здесь вы сможете выпить кофе, молочный коктейль или свежевыжатый сок. Сделайте заказ перед тренировкой ко времениее окончания.'
          src='./img/cafe/dish.png'
        />
        <CafeAdvantages
          heading='На большом экране'
          text='В нашем кафе ранслируются самые лучшие спортивные события на огромном экране. Забронируйте зал для индивидуального просмотра фильмов.'
          src='./img/cafe/tv.png'
        />
        <CafeAdvantages
          heading='Проведение праздников'
          text='Ну и конечно можно провести любой ваш праздник в кафе или на открытой площадке барбекю. Мы организуем лучший фуршет или банкет.'
          src='./img/cafe/present.png'
        />
      </StyledDiv>
      <StyledButton side='left' disabled={visibleNext} onClick={handleNextClick}><img src="./img/trainers/arrow_left.png" alt=""/></StyledButton>
    </StyledSection>  
  );
};

export default Cafe;