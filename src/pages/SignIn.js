import React, { useState, useEffect } from 'react';
import '@fontsource/roboto/300.css';
import {
  Button,
  Typography,
  InputAdornment,
  FormControl,
  Input,
  CircularProgress,
} from '@mui/material';
import { EmailTwoTone, VpnKeyRounded, Clear } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/slices/UserSlice';
import { useNavigate } from 'react-router-dom';
import API from '../api';

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [errorMsg, setErrorMsg] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    errorMsg && setIsLoading(false);
  }, [errorMsg]);

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();

    setIsLoading(true);
    setErrorMsg('');

    try {
      const user = { username: inputs.username, password: inputs.password };
      const res = await API.post(`/auth/login`, user);
      dispatch(addUser(inputs));
      navigate('/dashboard');
    } catch (error) {
      setErrorMsg(error.response.data.message);
    }
  };

  return (
    <FormControl component='form' align='center' onSubmit={handleSubmit}>
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
      {errorMsg ? (
        <div className='loginError'>
          <Typography variant='subtitle2' className='close'>
            {errorMsg}
          </Typography>
          <button
            onClick={() => setErrorMsg()}
            style={{
              background: 'none',
              border: 'none',
              color: 'inherit',
              paddingTop: '3px',
              float: 'right',
            }}
          >
            <Clear className='close' sx={{ width: '1rem', height: '1rem' }} />
          </button>
        </div>
      ) : null}
      <br />
      <Typography variant='subtitle1' align='left'>
        Username
      </Typography>
      <Input
        placeholder='alina.aftab2001@gmail.com'
        onChange={handleChange}
        name='username'
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
        required
      />
      <br />

      <Typography variant='subtitle1' align='left'>
        Password
      </Typography>
      <Input
        placeholder='********'
        onChange={handleChange}
        type='password'
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
        required
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
      {isLoading && (
        <div>
          <CircularProgress />
        </div>
      )}
    </FormControl>
  );
};

export default SignIn;
