import React from 'react';
import Button from '@mui/material/Button';
import './style.css';

function register() {
  return (
    <nav>
        <Button disabled variant="contained" id="register">Sign up</Button>
        <Button disabled variant="contained" id="register">Sign in</Button>
    </nav>

  );
}

export default register;