import React from 'react';
import { Outlet } from 'react-router-dom';
// import HomeBG from '../media/HomeBG.mp4';
import { Box } from '@mui/material';

const HomePage = () => {
  return (
    <Box
      sx={{
        maxHeight: '100vh',
        overflow: 'hidden',
        position: 'relative',
        minHeight: '100vh',
      }}
    >
      {/* <video
        style={{
          position: 'absolute',
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
        <source src={HomeBG} />
      </video> */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background:
            'linear-gradient(to right,rgba(65, 0, 130, 0.4),rgba(100, 0, 100, 0.3))',
        }}
      />{' '}
      {/* <div
        style={{
          position: 'absolute',
          right: '12px',
          top: '4px',
          textAlign: 'center',
          lineHeight: 0,
          zIndex: 2,
        }}
      >
        
      </div> */}
      <div style={{ position: 'relative', color: '#ffffff' }}>
        <Outlet />
      </div>
    </Box>
  );
};

export default HomePage;
