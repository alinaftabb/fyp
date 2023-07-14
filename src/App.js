import React, { useEffect, useState } from 'react';
import {
  Button,
  Grid,
  Link,
  Typography,
  InputAdornment,
  Input,
  FormControl,
  CardMedia,
  Box,
  Divider,
} from '@mui/material';
import { styled } from '@mui/system';
import {
  AccountCircle,
  EmailTwoTone,
  VpnKeyRounded,
} from '@mui/icons-material';
import '@fontsource/roboto/300.css';
import WomanOnTech from './Media/WomanOnTech.mp4';
import Logo from './Media/logo.png';
import Google from './Media/google.png';
import Apple from './Media/apple.png';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}

const StyledSubtitleTypography = styled(Typography)({ fontSize: '12px' });

const StyledInput = styled(Input)({
  fontSize: '12px',
  '&::placeholder': {
    fontSize: '12px',
  },
});

const App = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const showVideo = windowDimensions.width > 768;

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
    <Grid container spacing={0}>
      <Grid item xs={showVideo ? 5 : 12} align='center' mt={showVideo ? 2 : 0}>
        {!showVideo && (
          <Box
            sx={{
              position: 'absolute',
              overflow: 'hidden',
              width: '100vw',
              height: '100vh',
            }}
          >
            <CardMedia
              image={Logo}
              alt='bg'
              component={'img'}
              sx={{
                height: '700px',
                width: '700px',
                position: 'absolute',
                left: -355,
                top: -255,
                transform: 'rotate(50deg)',
                opacity: '40%',
              }}
            />
            <CardMedia
              image={Logo}
              alt='bg'
              component={'img'}
              sx={{
                height: '700px',
                width: '700px',
                position: 'absolute',
                right: -355,
                bottom: -255,
                objectFit: 'cover',
                display: 'block',
                overflow: 'hidden',
                transform: 'rotate(230deg)',
                opacity: '40%',
              }}
            />
          </Box>
        )}
        <CardMedia
          image={Logo}
          alt='logo'
          component={'img'}
          sx={{
            height: '100px',
            width: '100px',
          }}
        />
        <FormControl component='form' align='center' onSubmit={handleSubmit}>
          <Typography variant='h5' component={'h1'} sx={{ fontWeight: 'bold' }}>
            Create your account
          </Typography>
          <StyledSubtitleTypography>
            Already have an account?{' '}
            <Link sx={{ color: '#fc767a', fontWeight: 'bold' }}>Sign In</Link>
          </StyledSubtitleTypography>
          <br />
          <StyledSubtitleTypography variant='subtitle1' align='left'>
            Full name
          </StyledSubtitleTypography>
          <StyledInput
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
          <StyledSubtitleTypography variant='subtitle1' align='left'>
            Email address
          </StyledSubtitleTypography>
          <StyledInput
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

          <StyledSubtitleTypography variant='subtitle1' align='left'>
            Password
          </StyledSubtitleTypography>
          <StyledInput
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
          <StyledSubtitleTypography variant='subtitle1' align='left'>
            <Divider sx={{ borderBottomWidth: 4 }}>OR</Divider>
          </StyledSubtitleTypography>
          <Grid container>
            <Grid item spacing={0} xs={6}>
              <CardMedia
                component={'img'}
                src={Google}
                alt='google logo'
                sx={{
                  height: '40px',
                  width: '40px',
                  borderRadius: '50%',
                  boxShadow:
                    '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
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
      </Grid>
      {showVideo && (
        <Grid item xs={showVideo ? 7 : 0}>
          <video
            style={{ objectFit: 'cover', width: '57.5vw', height: '100vh' }}
            controls
            autoPlay
            loop
          >
            <source src={WomanOnTech} />
          </video>
        </Grid>
      )}
    </Grid>
  );
};

export default App;
