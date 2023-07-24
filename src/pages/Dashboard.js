import React from 'react';
import { Typography } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const data = useSelector(state => state.currUser);
  return (
    <div>
      <Typography variant='h1' className='WebName'>
        Dashboard
      </Typography>

      <div
        style={{
          color: '#ffffff',
          zIndex: 1,
          position: 'absolute',
          right: '10px',
          top: '10px',
          textAlign: 'center',
          lineHeight: 0,
        }}
      >
        <AccountCircle
          sx={{
            height: '40px',
            width: '40px',
          }}
        />
        <Typography variant='subtitle1'>{data.email}</Typography>
      </div>
    </div>
  );
};

export default Dashboard;
