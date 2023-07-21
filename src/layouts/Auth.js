import React, { useEffect, useState } from 'react';
import { Grid, CardMedia, Box } from '@mui/material';
import '@fontsource/roboto/300.css';
import WomanOnTech from '../Media/WomanOnTech.mp4';
import Logo from '../Media/logo.png';
import { Outlet } from 'react-router-dom';

const SignUp = () => {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
  }

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

  return (
    <Grid container spacing={0} sx={{ overflow: 'hidden', minHeight: '100vh' }}>
      <Grid
        item
        xs={showVideo ? 5 : 12}
        align='center'
        sx={{ backgroundColor: 'rgba(200,141,154,0.4)' }}
      >
        {!showVideo && (
          <Box
            sx={{
              position: 'absolute',
              overflow: 'hidden',
              width: '100%',
              height: '100%',
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
        <Outlet />
      </Grid>
      {showVideo && (
        <Grid item xs={showVideo ? 7 : 0}>
          <video
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              height: '100%',
              width: '100%',
            }}
            controls={false}
            muted={true}
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

export default SignUp;
