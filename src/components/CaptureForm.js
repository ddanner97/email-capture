import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { createBin } from '../utils';

function CaptureForm({ cancelForm, redirectForm, viewLoading, theme }) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (firstName === ''){
            return alert('First Name Cannot Be Blank');
        }

        if (lastName === ''){
            return alert('Last Name Cannot Be Blank');
        }

        if (email === ''){
            return alert('Email Cannot Be Blank')
        }

        const data = { 
            fullName: `${firstName} ${lastName}`,
            email: email 
        }

        console.log(data);
        viewLoading();
        createBin(data).then(redirectForm)
    };

    return (
        <div className='capture-form h-screen p-4 flex items-center justify-center'>
            <form onSubmit={handleSubmit}>
                <ThemeProvider theme={theme}>
                    <TextField
                        label="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        fullWidth
                        margin="normal"
                        color="primary"
                    />
                    <TextField
                        label="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        fullWidth
                        margin="normal"
                        color="primary"
                    />
                    <TextField
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        margin="normal"
                        color="primary"
                    />
                    <div className='flex flex-col'>
                        <Button variant="contained" color="primary" type="submit">
                            Submit
                        </Button>
                        <Button variant="contained" color="secondary" style={{ color: 'black' }} onClick={cancelForm}>
                            Back
                        </Button>
                    </div>
                </ThemeProvider>
            </form>
        </div>
    )
}

export default CaptureForm