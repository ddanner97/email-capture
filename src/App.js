import React, { useState, useEffect } from 'react';
import "./styles/main.css"

//import components
import Intro from './components/Intro.js'
import NavButtons from './components/NavButtons.js'
import CaptureForm from './components/CaptureForm';
import LandingPage from './components/LandingPage';

function App() {

  //State Variables
  const [intro, setIntro] = useState(true)
  const [navButtons, setNavButtons] = useState(false)
  const [viewForm, setViewForm] = useState(false)
  const [viewLandingPage, setViewLandingePage] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntro(false);
      setNavButtons(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  //Helper functions
  const updateViewForm = () => {
    setNavButtons(false)
    setViewForm(true)
  }

  const updateViewLandingPage = () => {
    setNavButtons(false)
    setViewLandingePage(true)
  }

  const cancelForm = () => {
    setViewLandingePage(false)
    setNavButtons(true)
  }

  return (
    <div className="email-capture-app min-h-screen">
      <div className='main-container grid row-auto my-2'>

        {/* Conditionally render Intro Page */}
        {intro &&
          <Intro/>
        }

        {/* Enter Raffle or Landing Page Buttons */}
        {navButtons &&
          <NavButtons
            viewForm={updateViewForm}
            viewLandingPage={updateViewLandingPage}
          />
        }

        {/* Form for Raffle */}
        {viewForm &&
          <CaptureForm
            cancelForm={cancelForm}
          />
        }

        {/* Landing Page */}
        {viewLandingPage && 
          <LandingPage/>
        }

      </div>
    </div>
  );
}

export default App;