import React, { useState } from 'react';
import '@fontsource/roboto/300.css';
import {
  Button,
  Typography,
  InputAdornment,
  FormControl,
  Input,
} from '@mui/material';
import { EmailTwoTone, VpnKeyRounded } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

const SignIn = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <FormControl
      component='form'
      align='center'
      onSubmit={handleSubmit}
      action='/dashboard'
    >
      <Typography variant='h5' component={'h1'} sx={{ fontWeight: 'bold' }}>
        Sign In to your account
      </Typography>
      <Typography>
        Don't have an account?{' '}
        <NavLink style={{ color: '#fc767a', fontWeight: 'bold' }} to='/sign-up'>
          SignUp
        </NavLink>
      </Typography>
      <br />
      <Typography variant='subtitle1' align='left'>
        Email address
      </Typography>
      <Input
        placeholder='alina.aftab2001@gmail.com'
        onChange={handleChange}
        name='email'
        fullWidth
        startAdornment={
          <InputAdornment position='start'>
            <EmailTwoTone sx={{ color: '#fc767a' }} />
          </InputAdornment>
        }
        sx={{
          '&::after': {
            borderBottomColor: '#f0767a',
          },
        }}
      />
      <br />

      <Typography variant='subtitle1' align='left'>
        Password
      </Typography>
      <Input
        placeholder='********'
        onChange={handleChange}
        name='password'
        fullWidth
        startAdornment={
          <InputAdornment position='start'>
            <VpnKeyRounded sx={{ color: '#fc767a' }} />
          </InputAdornment>
        }
        sx={{
          '&::after': {
            borderBottomColor: '#f0767a',
          },
        }}
      />
      <br />
      <Button
        variant='contained'
        sx={{
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          borderRadius: '50px',
        }}
        type='submit'
      >
        Sign In
      </Button>
      <br />
    </FormControl>
  );
};

export default SignIn;
