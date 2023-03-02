import React from 'react'

function NavButtons({
    viewForm,
    viewLandingPage
}) {
  return (
    <div className='nav-buttons h-screen z-40 flex flex-col items-center justify-center'>
        <button 
            className='my-4 w-60 px-2 py-4 border-2 border-black rounded fade-in'
            onClick={viewForm}
        >
            Enter The Raffle
        </button>
        <button 
            className='my-4 w-60 px-2 py-4 border-2 border-black rounded'
            onClick={viewLandingPage}
        >
            Navigate to Landing Page
        </button>
        <button 
            className='my-4 w-60 px-2 py-4 border-2 border-black rounded'
        >
            <a href='https://distrokid.com/hyperfollow/asweleftit/call-it-what-you-want' target='_blank'>Pre-Save Form</a>
        </button>
    </div>
  )
}

export default NavButtons