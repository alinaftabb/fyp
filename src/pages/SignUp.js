import React, { useState } from 'react';
import { styled } from '@mui/system';
import '@fontsource/roboto/300.css';
import Google from '../Media/google.png';
import Apple from '../Media/apple.png';
import {
  Button,
  Grid,
  Typography,
  Input,
  InputAdornment,
  FormControl,
  CardMedia,
  Divider,
} from '@mui/material';
import {
  AccountCircle,
  EmailTwoTone,
  VpnKeyRounded,
} from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

const SignUp = () => {
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
    <FormControl component='form' align='center' onSubmit={handleSubmit}>
      <Typography variant='h5' component={'h1'} sx={{ fontWeight: 'bold' }}>
        Create your account
      </Typography>
      <Typography>
        Already have an account?{' '}
        <NavLink style={{ color: '#fc767a', fontWeight: 'bold' }} to='/sign-in'>
          SignIn
        </NavLink>
      </Typography>
      <br />
      <Typography variant='subtitle1' align='left'>
        Full name
      </Typography>
      <Input
        placeholder='Alina Aftab'
        onChange={handleChange}
        value={inputs.name}
        name='name'
        fullWidth
        startAdornment={
          <InputAdornment position='start'>
            <AccountCircle sx={{ color: '#fc767a' }} />
          </InputAdornment>
        }
        sx={{ '&::after': { borderBottomColor: '#fc767a' } }}
      />
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
        Sign Up
      </Button>
      <br />
      <Typography variant='subtitle1' align='left'>
        <Divider sx={{ borderBottomWidth: 4 }}>OR</Divider>
      </Typography>
      <Grid container align='center'>
        <Grid item spacing={0} xs={6}>
          <CardMedia
            component={'img'}
            src={Google}
            alt='google logo'
            sx={{
              height: '40px',
              width: '40px',
              borderRadius: '50%',
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <CardMedia
            component={'img'}
            src={Apple}
            alt='apple logo'
            sx={{
              height: '43px',
              width: '43px',
              borderRadius: '50%',
              boxShadow:
                '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
            }}
          />
        </Grid>
      </Grid>
    </FormControl>
  );
};

export default SignUp;
