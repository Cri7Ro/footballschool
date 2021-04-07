import React, { useEffect, useState } from 'react';
import {StyledForm, StyledButton} from './PopupStyle';

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
    const [confirm, setConfirm] = useState<boolean>(true);

    useEffect(() => {
        if(name && phone && age && date) {
            setDisabled(false);
        } else setDisabled(true);
    }, [name, phone, age, date]);

    function close(): void {
        setSignup(false);
    }

    function handleSubmit(event: React.SyntheticEvent) {
        event.preventDefault();
        if(name && phone && age && date) {
            setConfirmSignup(prev => !prev);
            setSignup(prev => !prev);
        }
        setName('');
        setPhone('');
        setAge('');
        setDate('');
    };

    function handleClickClose(): void {
        setSignup(prev => !prev);
    };
    
    return (
        <>
        <StyledForm signup={signup} onClick={event => event.stopPropagation()} onSubmit={handleSubmit} disabled={disabled}>
            <h3>Запись на разовое занятие</h3>
            <h5>Проходят по вторникам и четвергам с 16:00 до 17:00</h5>
            <label htmlFor="name"></label>
                <input type="text" id='name' value={name} onChange={event=>setName(event.target.value)} placeholder='Ваше имя'/>
            <label htmlFor="phone"></label>
                <input type="tel" id='phone' value={phone} onChange={event=>setPhone(event.target.value)} placeholder='Телефон'/>
            <label htmlFor="age"></label>
                <input type='text' id='age' value={age} onChange={event=>setAge(event.target.value)} placeholder='Возраст ребенка'/>
            <label htmlFor="date"></label>
                <input type="date" id='date' value={date} onChange={event=>setDate(event.target.value)} placeholder='Дата занятия'/>
            <input type="submit"/>
            <StyledButton onClick={handleClickClose}><img src="./img/close.png" alt=""/></StyledButton>
        </StyledForm>
        </>
    );
};

export default Popup;