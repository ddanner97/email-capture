import React from 'react'
import { Button } from '@mui/material';

function LandingPage({ cancelLandingPage }) {
  return (
    <div className='nav-buttons h-screen z-40'>
      <Button variant="contained" color="secondary" style={{ color: 'black' }} onClick={cancelLandingPage}>
        Back
      </Button>
    </div>
  )
}

export default LandingPage