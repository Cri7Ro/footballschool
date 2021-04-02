import React from 'react';
import {createGlobalStyle} from 'styled-components';
import Header from './components/Header';
import MainHeading from './components/MainHeading';
import Advantages from './components/Advantages';
import Groups from './components/Groups/index';
import Attention from './components/Attention';
import Trainers from './components/Trainers';
import SchoolForm from './components/SchoolForm';
import Cost from './components/Cost';
import Cafe from './components/Cafe'; 
import Foto from './components/Foto';
import FootballLesson from './components/FootballLesson';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <MainHeading />
        <Advantages />
        <Groups />
        <Attention />
        <Trainers />
        {/*<SchoolForm />*/}
        <Cost />
        <Cafe />
        <Foto />
        <FootballLesson />
      </main>
      {/*<Footer />*/}
    </>
  );
}

export default App;
