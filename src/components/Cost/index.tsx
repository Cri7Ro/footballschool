import React, { RefObject, useEffect, useLayoutEffect, useRef, useState } from 'react';
import CostLvl from './CostLvl';
import styled from 'styled-components';
import BackImg from './BackImg';

const StyledDiv = styled.div`
  display: flex;
  gap: 2vw;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #2E0062;
  h2 {
    margin: 7rem 0 7.5rem;
  }
  position: relative;
  p:last-child {
    color: #7DCE94;
    font-size: 1.3rem;
    line-height: 1.7rem;
    margin-bottom: 4rem;
  }
  overflow: hidden;
`;

const StyledButton = styled.button`
  color: white;
  background-color: #7DCE94;
  box-shadow: 0px 4px 0px #40A85D;
  border: 0;
  border-radius: 50px;
  font-size: 1.5rem;
  line-height: 2.25rem;
  &: focus {
    outline: none;
  }
  display: flex;
  align-items: center;
  padding: .75rem 4vw;
  margin: 4rem 0 1.7rem;
  cursor: pointer; 
`;

type myRef = null | HTMLHeadingElement;

const Cost: React.FC = () => {

  const myRef = useRef<myRef>(null);
  const curRef = useRef<HTMLImageElement | null>(null);
  const curRef2 = useRef<HTMLImageElement | null>(null);
  const curRef3 = useRef<HTMLImageElement | null>(null);
  const curRef4 = useRef<HTMLImageElement | null>(null);
  const curRef5 = useRef<HTMLImageElement | null>(null);
  const curRef6 = useRef<HTMLImageElement | null>(null);
  const curRef7 = useRef<HTMLImageElement | null>(null);
  const curRef8 = useRef<HTMLImageElement | null>(null);
  const curRef9 = useRef<HTMLImageElement | null>(null);
  const curRef10 = useRef<HTMLImageElement | null>(null);
  const curRef11 = useRef<HTMLImageElement | null>(null);
  const curRef12 = useRef<HTMLImageElement | null>(null);
  const curRef13 = useRef<HTMLImageElement | null>(null);
  const curRef14 = useRef<HTMLImageElement | null>(null);
  const curRef15 = useRef<HTMLImageElement | null>(null);

  const [visible, setVisible] = useState<boolean>(false);

  const [top, setTop] = useState<number>(30);

  const options: Object = {
      root: null,
      rootMargin: '0px',
      threshold: 0
  }

  function handleOnScroll(entries: IntersectionObserverEntry[]) {
      const [entry]: IntersectionObserverEntry[] = entries;
      setVisible(entry.isIntersecting);     
  }

  useEffect(() => {
      const observer: IntersectionObserver = new window.IntersectionObserver(handleOnScroll, options);
      if (myRef.current) {
          observer.observe(myRef.current);
      }
      return (() => {
          if (myRef.current) {
              observer.unobserve(myRef.current);
          }
      });
  }, [myRef, options]);

  return (
      <StyledSection ref={myRef}>
        <h2>Сколько стоит школа</h2>
        <BackImg ref={curRef} image='./img/cost/1.png' top={5} left={10} run={visible} />
        <BackImg ref={curRef2} image='./img/cost/2.png' top={-5} left={70} run={visible}/>
        <BackImg ref={curRef3} image='./img/cost/3.png' top={30} left={0} run={visible}/>
        <BackImg ref={curRef4} image='./img/cost/4.png' top={70} left={0} run={visible}/>
        <BackImg ref={curRef5} image='./img/cost/5.png' top={50} left={35} run={visible}/>
        <BackImg ref={curRef6} image='./img/cost/6.png' top={80} left={90} run={visible}/>
        <BackImg ref={curRef7} image='./img/cost/7.png' top={50} left={57} run={visible}/>
        <BackImg ref={curRef8} image='./img/cost/8.png' top={20} left={60} run={visible}/>
        <BackImg ref={curRef9} image='./img/cost/9.png' top={10} left={30}  run={visible}/>
        <BackImg ref={curRef10} image='./img/cost/10.png' top={50} left={90} run={visible}/>
        <BackImg ref={curRef11} image='./img/cost/11.png' top={30} left={80} run={visible}/>
        <BackImg ref={curRef12} image='./img/cost/12.png' top={50} left={10} run={visible}/>
        <BackImg ref={curRef13} image='./img/cost/13.png' top={5} left={85} run={visible}/>
        <BackImg ref={curRef14} image='./img/cost/14.png' top={80} left={70} run={visible}/>
        <BackImg ref={curRef15} image='./img/cost/15.png' top={80} left={20} run={visible}/>
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
        <StyledButton>
          <img src="./img/cost/ball.png" alt=""/>
          Попробовать
        </StyledButton>
        <p>Первое занятие бесплатно</p>
      </StyledSection>
  );
}

export default Cost;