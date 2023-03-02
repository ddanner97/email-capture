import React, { useState, useEffect } from 'react';
import { createTheme } from '@mui/material/styles';
import "./styles/main.css"

//import components
import Loading from './components/Loading';
import Intro from './components/Intro.js'
import NavButtons from './components/NavButtons.js'
import CaptureForm from './components/CaptureForm';
import LandingPage from './components/LandingPage';

function App() {

  //State Variables
  const [intro, setIntro] = useState(true)
  const [loading, setLoading] = useState(false)
  const [navButtons, setNavButtons] = useState(false)
  const [viewForm, setViewForm] = useState(false)
  const [viewLandingPage, setViewLandingePage] = useState(false)

  //Helper Functions
  const updateViewForm = () => {
    setNavButtons(false)
    setViewForm(true)
  }

  const cancelForm = () => {
    setViewForm(false)
    setNavButtons(true)
  }

  const viewLoading = () => {
    setViewForm(false)
    setLoading(true)
  }

  const redirectForm = () => {
    setLoading(false)
    setViewLandingePage(true)
  }

  const updateViewLandingPage = () => {
    setNavButtons(false)
    setViewLandingePage(true)
  }

  const cancelLandingPage = () => {
    setViewLandingePage(false)
    setNavButtons(true)
  }

  //Theme
  const theme = createTheme({
    palette: {
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#FFFFFF',
        },
        text: {
            primary: '#000000',
            secondary: '#666666',
        },
    },
  }); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntro(false);
      setNavButtons(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="email-capture-app min-h-screen min-w-full">
      <div className='main-container grid row-auto my-2'>

        {/* Loading Icon */}
        {loading && 
          <Loading
            theme={theme}
          />
        }

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
            redirectForm={redirectForm}
            viewLoading={viewLoading}
            theme={theme}
          />
        }

        {/* Landing Page */}
        {viewLandingPage && 
          <LandingPage
            cancelLandingPage={cancelLandingPage}
            theme={theme}
          />
        }

      </div>
    </div>
  );
}

export default App;