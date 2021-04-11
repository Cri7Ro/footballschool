import React, { useEffect, useState } from 'react';
import {StyledSection, StyledForm, StyledButton} from './PopupStyle';

interface ISignup {
    signup: boolean
    setConfirmSignup: (value: boolean | ((prevHeight: boolean) => boolean)) => void,
    setSignup: (value: boolean | ((prevHeight: boolean) => boolean)) => void,
}

const Popup: React.FC<ISignup> = ({signup, setSignup, setConfirmSignup}) => {

    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [age, setAge] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [disabled, setDisabled] = useState<boolean>(true);

    useEffect(() => {
        if(name && phone && age && date) {
            setDisabled(false);
        } else setDisabled(true);
    }, [name, phone, age, date]);

    function handleSubmit(event: React.SyntheticEvent) {
        event.preventDefault();
        if(name && phone && age && date) {
            
            setSignup(prev => !prev);
            setConfirmSignup(prev => !prev);
        }
        setName('');
        setPhone('');
        setAge('');
        setDate('');
    };

    function handleClickClose(): void {
        setSignup(prev => !prev);
        setName('');
        setPhone('');
        setAge('');
        setDate('');
    };
    
    return (signup ? 
        <StyledSection>
            <StyledForm onClick={event => event.stopPropagation()} onSubmit={handleSubmit} disabled={disabled}>
                <h3>Запись на разовое занятие</h3>
                <h5>Проходят по вторникам и четвергам с 16:00 до 17:00</h5>
                <label htmlFor="name"></label>
                    <input type="text" id='name' value={name} onChange={event=>setName(event.target.value)} placeholder='Ваше имя'/>
                <label htmlFor="phone"></label>
                    <input type="tel" id='phone' value={phone} onChange={event=>setPhone(event.target.value)} placeholder='Телефон'/>
                <label htmlFor="age"></label>
                    <input type='text' id='age' value={age} onChange={event=>setAge(event.target.value)} placeholder='Возраст ребенка'/>
                <label htmlFor="date"></label>
                    <input type="text" id='date' value={date} onChange={event=>setDate(event.target.value)} placeholder='Дата занятия'/>
                <input type="submit"/>
            </StyledForm>
            <StyledButton onClick={handleClickClose}><img src="./img/close.png" alt=""/></StyledButton>
        </StyledSection>
        : null
    );
};

export default Popup;