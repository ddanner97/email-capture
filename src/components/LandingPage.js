import React from 'react'
import { Button } from '@mui/material';
import Brandon from '../assets/brandon.jpg';
import Warner from '../assets/warner.jpeg';
import Darrel from '../assets/darrell.jpeg';

//mui components
import InstagramIcon from '@mui/icons-material/Instagram';

function LandingPage({ cancelLandingPage }) {
  return (
    <div className='nav-buttons z-40 flex justify-center' style={{ backgroundColor: 'black' }}>
      <div className='artist-container mt-4'>

        <div className='artist-content-container my-2'>
          <img className='w-3/4' src={Brandon} />
          <div className='artist-info'>
            <a>
              <InstagramIcon/>
            </a>
          </div>
        </div>

        <div className='artist-content-container my-2'>
          <img className='w-3/4' src={Warner} />
          <div className='artist-info'>

          </div>
        </div>

        <div className='artist-content-container my-2'>
          <img className='w-3/4' src={Darrel} />
          <div className='artist-info'>

          </div>
        </div>

        <Button variant="contained" color="secondary" style={{ color: 'black' }} onClick={cancelLandingPage}>
          Back
        </Button>
      </div>
    </div>
  )
}

export default LandingPage