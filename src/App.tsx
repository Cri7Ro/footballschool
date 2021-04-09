import React, { useState } from 'react';
import Header from './components/Header';
import MainHeading from './components/MainHeading';
import Advantages from './components/Advantages';
import Groups from './components/Groups/index';
import Attention from './components/Attention';
import Trainers from './components/Trainers';
import Cost from './components/Cost';
import Cafe from './components/Cafe'; 
import FootballLesson from './components/FootballLesson';
import Footer from './components/Footer';
import Popup from './components/Popup';
import ConfirmSignup from './components/ConfirmAdd';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {

  const [signup, setSignup] = useState<boolean>(false)
  const [confirmSignup, setConfirmSignup] = useState<boolean>(false)

  return (
  <BrowserRouter>
    <Header />
      <main>
        <MainHeading setSignup={setSignup}/>
        <Advantages />
        <Groups />
        <Attention />
        <Trainers />
        <Cost setSignup={setSignup}/>
        <Cafe />
        <FootballLesson />
      </main>
      <Footer setSignup={setSignup}/>
    <Popup signup={signup} setConfirmSignup={setConfirmSignup} setSignup={setSignup}/>
    <ConfirmSignup confirm={confirmSignup} setConfirmSignup={setConfirmSignup}/>
  </BrowserRouter>
  );
}

export default App;
