import React, {useEffect, useRef, useState} from 'react';
import {StyledDiv, StyledSection, StyledButton} from './CafeStyle';
import CafeAdvantages from './CafeAdvantages/index';

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
  }, [container, load]);
	
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
    <StyledSection id='cafe'>
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
          text='В нашем кафе транслируются самые лучшие спортивные события на огромном экране. Забронируйте зал для индивидуального просмотра фильмов.'
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