import React, {useLayoutEffect, useEffect, useState} from 'react';
import {StyledButton, StyledFooter, StyledMapBox, StyledSection, Li} from './FooterStyle';
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";

interface IState {
    setSignup: (value: boolean | ((prevHeight: boolean) => boolean)) => void,
}

const Footer: React.FC<IState> = ({setSignup}) => {

    const [marker, setMarker] = useState(null);
    const [map, setMap] = useState(null);

    mapboxgl.accessToken = "pk.eyJ1Ijoic3Rvcm1sb3JkOSIsImEiOiJja21na3JzNHMzZzFqMnVud2c2d2RrbzhnIn0.LinBWopkBBwFHrwjY-TQFA";

    useLayoutEffect(() => {
        setMap(
            new mapboxgl.Map({
              container: 'map',
              style: 'mapbox://styles/mapbox/streets-v11',
              center: [30.331064, 60.025306],
              zoom: 14
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
                .setLngLat([30.331064, 60.025306])
                .addTo(map))
        }
      }, [map]);

      function handleClick(): void {
        setSignup(prev => !prev);
      };

    return (
        <StyledFooter id='contacts'>
            <StyledSection>
                <div>
                    <ul>
                        <Li attr='question'><i>Есть вопросы? Оставляйте заявку!</i></Li>
                        <Li attr='phone'><i>+7(812)242 62 91</i></Li>
                        <Li attr='e-mail'><i>info@parksosnovka.ru</i></Li>
                        <Li attr='time'><i>Занятия по вт. и чт. с 16:00 до 17:00</i></Li>
                    </ul>
                    <StyledButton onClick={handleClick}> <img src="./img/footer/ball.png" alt=""/>Записаться</StyledButton>
                </div>
                <StyledMapBox id="map" />
            </StyledSection>
            <p>2020 «Парк Сосновка» — СПб, ул. Жака Дюкло 20Б</p>
        </StyledFooter>
    );
};

export default Footer;