import React from 'react'
import { ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material';
import Brandon from '../assets/brandon.jpg';
import Warner from '../assets/warner.jpeg';
import Darrel from '../assets/darrell.jpeg';

//mui components
import InstagramIcon from '@mui/icons-material/Instagram';

function LandingPage({ cancelLandingPage, theme }) {
  return (
    <div className='nav-buttons z-40 relative' style={{ backgroundColor: 'black' }}>
      <h1 className='text-white text-center mt-2 font-bold underline'>Featured Artists</h1>

      <div className='artist-container px-2 py-2 flex flex-col justify-center'>
        <div className='artist-content-container my-2 flex flex-col items-center'>
          <img className='w-3/4' src={Brandon} />
          <div className='artist-info text-center'>
            <h2 className='text-white'>Lee Samson</h2>
            <div className='artist-links mt-2 flex gap-8'>
              <a href=''>
                <i class="fa-brands fa-spotify text-white text-2xl"></i>
              </a>
              <a href=''>
                <i class="fa-brands fa-apple text-white text-2xl"></i>
              </a>
              <a href=''>
                <i class="fa-brands fa-instagram text-white text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        <div className='artist-content-container my-2 flex flex-col items-center'>
          <img className='w-3/4' src={Warner} />
          <div className='artist-info text-center'>
            <h2 className='text-white'>Rarie</h2>
            <div className='artist-links mt-2 flex gap-8'>
              <a href=''>
                <i class="fa-brands fa-spotify text-white text-2xl"></i>
              </a>
              <a href=''>
                <i class="fa-brands fa-apple text-white text-2xl"></i>
              </a>
              <a href=''>
                <i class="fa-brands fa-instagram text-white text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        <div className='artist-content-container my-2 flex flex-col items-center'>
          <img className='w-3/4' src={Darrel} />
          <div className='artist-info text-center'>
            <h2 className='text-white mx-auto'>Darrell Chism</h2>
            <div className='artist-links mt-2 flex gap-8'>
              <a href=''>
                <i class="fa-brands fa-spotify text-white text-2xl"></i>
              </a>
              <a href=''>
                <i class="fa-brands fa-apple text-white text-2xl"></i>
              </a>
              <a href=''>
                <i class="fa-brands fa-instagram text-white text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <h1 className='text-white text-center mt-2 font-bold underline pb-4 mt-8'>Production Credits</h1>

      <div className='production-container px-2 py-2 flex gap-4 flex-col justify-center text-white pb-10 mb-16'>
        <div className='flex gap-4 mx-auto'>
          <h2>Darrell Chism:</h2>
          <a href=''>
            <i class="fa-brands fa-instagram text-white text-2xl"></i>
          </a>
        </div>
        <div className='flex gap-4 mx-auto'>
          <h2>Damian Danner:</h2>
          <a href=''>
            <i class="fa-brands fa-instagram text-white text-2xl"></i>
          </a>
        </div>
      </div>

      <div className='fixed bottom-10 right-2'>
        <ThemeProvider theme={theme}>
          <Button variant="contained" color="secondary" style={{ color: 'black' }} onClick={cancelLandingPage}>
              Back
          </Button>
        </ThemeProvider>
      </div>
    </div>
  )
}

export default LandingPage