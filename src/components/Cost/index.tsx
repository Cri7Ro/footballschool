import React, { useMemo, useEffect, useRef, useState } from 'react';
import CostLvl from './CostLvl/';
import {StyledButton, StyledDiv, StyledSection} from './CostStyle';
import BackImg from './BackImg/';
import { useHistory } from 'react-router-dom';

type myRef = null | HTMLHeadingElement;

interface IState {
  setSignup: (value: boolean | ((prevHeight: boolean) => boolean)) => void,
}

const Cost: React.FC<IState> = ({setSignup}) => {

  const myRef = useRef<myRef>(null);
  
  const [visible, setVisible] = useState<boolean>(false);

  const options: Object = useMemo(() => ({
      root: null,
      rootMargin: '0px',
      threshold: 0
  }), []);

  function handleOnScroll(entries: IntersectionObserverEntry[]) {
      const [entry]: IntersectionObserverEntry[] = entries;
      setVisible(entry.isIntersecting);     
  }

  useEffect(() => {
      const section = myRef.current;
      const observer: IntersectionObserver = new window.IntersectionObserver(handleOnScroll, options);
      if (section) {
          observer.observe(section);
      }
      return (() => {
          if (section) {
              observer.unobserve(section);
          }
      });
  }, [myRef, options]);

  function handleClick(): void {
    setSignup(prev => !prev);
  };

  const history = useHistory();

  window.onload = () => {
      history.push('/');
  }

  return (
      <StyledSection ref={myRef} id='cost'>
        <h2>Сколько стоит школа</h2>
        <BackImg image='./img/cost/1.png' top={5} left={10} run={visible} />
        <BackImg image='./img/cost/2.png' top={-5} left={70} run={visible}/>
        <BackImg image='./img/cost/3.png' top={30} left={0} run={visible}/>
        <BackImg image='./img/cost/4.png' top={70} left={0} run={visible}/>
        <BackImg image='./img/cost/5.png' top={50} left={35} run={visible}/>
        <BackImg image='./img/cost/6.png' top={80} left={90} run={visible}/>
        <BackImg image='./img/cost/7.png' top={50} left={57} run={visible}/>
        <BackImg image='./img/cost/8.png' top={20} left={60} run={visible}/>
        <BackImg image='./img/cost/9.png' top={10} left={30}  run={visible}/>
        <BackImg image='./img/cost/10.png' top={50} left={90} run={visible}/>
        <BackImg image='./img/cost/11.png' top={30} left={80} run={visible}/>
        <BackImg image='./img/cost/12.png' top={50} left={10} run={visible}/>
        <BackImg image='./img/cost/13.png' top={5} left={85} run={visible}/>
        <BackImg image='./img/cost/14.png' top={80} left={70} run={visible}/>
        <BackImg image='./img/cost/15.png' top={80} left={20} run={visible}/>
        <StyledDiv>
          <CostLvl
            image='./img/cost/cat.png'
            lvl='Разовое занятие'
            numTrain='1 тренировка'
            cost={700}
            textColor='white'
            columnColor='#6D3EA2'
          />
          <CostLvl
            image='./img/cost/tiger.png'
            lvl='Начальный'
            numTrain='4 тренировки в месяц'
            cost={2600}
            textColor='#2E0062'
            columnColor='#FFE197'
          />
          <CostLvl
            image='./img/cost/lion.png'
            lvl='Оптимальный'
            numTrain='8 тренировок в месяц'
            cost={4800}
            textColor='white'
            columnColor='#C94336'
          />
        </StyledDiv>
        <StyledButton onClick={handleClick}>
          <img src="./img/cost/ball.png" alt=""/>
          Попробовать
        </StyledButton>
        <p>Первое занятие бесплатно</p>
      </StyledSection>
  );
}

export default Cost;