import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {
  Logout,
  PostAdd,
  FormatListBulleted,
  ProductionQuantityLimits,
  AccountCircle,
} from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import { Avatar } from '@mui/material';
import ava from '../media/Avatar.jpg';
import { Link } from 'react-router-dom';

const Drawerr = ({ drawer, setDrawer }) => {
  const data = useSelector(state => state.currUser);
  // const nav = text =>
  //   text == 'products' ? `/${text.slice(0, -1)}` : `/${text}`;

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role='presentation'
      onClick={() => setDrawer(false)}
      onKeyDown={() => setDrawer(false)}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Avatar src={ava} sx={{ width: '100%', height: '50%' }} />
        <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>
          {data.email}
        </Typography>
      </div>
      <List>
        {['User Profile', 'Products', 'Posts', 'Todos'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              component={Link}
              to={`/${text.toLowerCase().split(' ').join('-')}`}
            >
              <ListItemIcon>
                {index === 0 ? (
                  <AccountCircle />
                ) : index === 1 ? (
                  <ProductionQuantityLimits />
                ) : index === 2 ? (
                  <PostAdd />
                ) : (
                  <FormatListBulleted />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      {
        <Button sx={{ width: '100%', justifyContent: 'left' }}>
          <Logout sx={{ padding: '12px' }} />
          <Typography>Logout</Typography>
        </Button>
      }
    </Box>
  );

  return (
    <Drawer anchor={'right'} open={drawer} onClose={() => setDrawer(false)}>
      {list()}
    </Drawer>
  );
};

export default Drawerr;
