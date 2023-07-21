import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import HomeBG from '../Media/HomeBG.mp4';

const HomePage = () => {
  return (
    <Box sx={{ maxHeight: '100vh', overflow: 'hidden' }}>
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: 1,
            background:
              'linear-gradient(to right,rgba(65, 0, 130, 0.4),rgba(100, 0, 100, 0.3))',
          }}
        />
        <Outlet />
        <video
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
        </video>
      </div>
    </Box>
  );
};

export default HomePage;
