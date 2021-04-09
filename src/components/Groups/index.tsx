import React from 'react';
import {StyledSection} from './GroupsStyle';
import GroupAge from './GroupAge/';

const Groups: React.FC = () => {
    return (
    <StyledSection>
        <h2>Две возрастные группы</h2>
        <GroupAge
            src='./img/groups/bear.png'
            side='left'
            heading='3-5 лет'
            text='Специалисты рекомендуют начинать заниматься футболом с 3 лет. Не все школы идут на это. У нас дети занимаются по уникальной методике, разработанной для самых маленьких.' 
        />
        <GroupAge
            src='./img/groups/controller.png'
            side='right'
            heading='6-10 лет'
            text='В группу постарше переходят как опытные ребята из младшей группы, так и те, кто только начинают занятия футболом.'
        />
    </StyledSection>
    );
}

export default Groups;