import React, {useLayoutEffect, useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";

const StyledMapBox = styled.div`
    width: 50vw;
    height: 50vh;
    margin: 5vh auto;
    border-radius: 20px;
`;

const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #2E0062;
    color: white;
    padding-bottom: 3.5rem;
`; 

const StyledSection = styled.section` 
    a {
        color: inherit;
    }
    div {
        margin-right: 3vw;
    }
    display: flex;
    align-items: center;
`;

const Li = styled.li<{attr: string}>`
    margin-bottom: 1.25rem;
    list-style-position: inside;
    list-style-image: url(${props => {
        switch (props.attr) {
            case 'phone': {
                return './img/footer/phone.png';
                break;
            }
            case 'e-mail': {
                return './img/footer/letter.png';
                break;
            }
            case 'question': {
                return './img/footer/question.png';
                break;
            }
            case 'time': {
                return './img/footer/time.png';
                break;
            }
        }
    }});
    i {
        position: relative;
        top: -18px;
    }
`;

const StyledButton = styled.button`
    color: #2E0062;
    background-color: #FFE197;
    box-shadow: 0px 4px 0px #AB8A38;
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
    img {
        margin-right: 8px;
    }
`;

const Footer: React.FC = () => {

    const [marker, setMarker] = useState(null);
    const [map, setMap] = useState(null);

    mapboxgl.accessToken = "pk.eyJ1Ijoic3Rvcm1sb3JkOSIsImEiOiJja21na3JzNHMzZzFqMnVud2c2d2RrbzhnIn0.LinBWopkBBwFHrwjY-TQFA";

    useLayoutEffect(() => {
        setMap(
            new mapboxgl.Map({
              container: 'map',
              style: 'mapbox://styles/mapbox/streets-v11',
              center: [37.61192, 55.76199],
              zoom: 17
        }));
        
        setMap(prev =>
            // @ts-ignore
            prev.on('load', () => {
                // @ts-ignore
                prev.setLayoutProperty('country-label', 'text-field', ['get', 'name_ru']);
                // @ts-ignore
                prev.setLayoutProperty('road-label', 'text-field', ['get', 'name_ru']);
                // @ts-ignore
                prev.setLayoutProperty('state-label', 'text-field', ['get', 'name_ru']);
                // @ts-ignore
                prev.setLayoutProperty('settlement-label', 'text-field', ['get', 'name_ru']);
                // @ts-ignore
                prev.setLayoutProperty('settlement-subdivision-label', 'text-field', ['get', 'name_ru']);
                // @ts-ignore
                prev.setLayoutProperty('airport-label', 'text-field', ['get', 'name_ru']);
                // @ts-ignore
                prev.setLayoutProperty('poi-label', 'text-field', ['get', 'name_ru']);
                // @ts-ignore
                prev.setLayoutProperty('water-point-label', 'text-field', ['get', 'name_ru']);
                // @ts-ignore
                prev.setLayoutProperty('water-line-label', 'text-field', ['get', 'name_ru']);
                // @ts-ignore
                prev.setLayoutProperty('natural-point-label', 'text-field', ['get', 'name_ru']);
                // @ts-ignore
                prev.setLayoutProperty('natural-line-label', 'text-field', ['get', 'name_ru']);
                // @ts-ignore
                prev.setLayoutProperty('waterway-label', 'text-field', ['get', 'name_ru']);
            })
        );
      }, [])

      useEffect(() => {
        if (map) {
            setMarker(new mapboxgl.Marker()
                .setLngLat([37.61192, 55.76199])
                .addTo(map))
        }
      }, [map])

    return (
        <StyledFooter>
            <StyledSection>
                <div>
                    <ul>
                        <Li attr='question'><i>Есть вопросы?  <a href="">Пишите!</a></i></Li>
                        <Li attr='phone'><i>+7(812)242 62 91</i></Li>
                        <Li attr='e-mail'><i>info@parksosnovka.ru</i></Li>
                        <Li attr='time'><i>Занятия по вт. и чт. с 16:00 до 17:00</i></Li>
                    </ul>
                    <StyledButton> <img src="./img/footer/ball.png" alt=""/>Записаться</StyledButton>
                </div>
                <StyledMapBox id="map" />
            </StyledSection>
            <p>2020 «Парк Сосновка» — СПб, ул. Жака Дюкло 20Б</p>
        </StyledFooter>
    );
};

export default Footer;