import React, { useEffect, useState } from 'react';
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
import ConfirmAdd from './components/ConfirmAdd';

const App: React.FC = () => {

  const [signup, setSignup] = useState<boolean>(false)
  const [confirmSignup, setConfirmSignup] = useState<boolean>(false)

  return (
  <>
  <Header />
  <main>
    <MainHeading setSignup={setSignup}/>
    <Advantages />
    <Groups />
    <Attention />
    <Trainers />
    <Cost />
    <Cafe />
    <FootballLesson />
  </main>
  <Footer />
  <Popup signup={signup} setConfirmSignup={setConfirmSignup} setSignup={setSignup}/>
  <ConfirmAdd confirm={confirmSignup} setConfirmSignup={setConfirmSignup}/>
  </>
  );
}

export default App;
