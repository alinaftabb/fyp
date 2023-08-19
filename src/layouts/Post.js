import React, { Fragment, useEffect, useState } from 'react';
import API from '../api';
import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import {
  HomeOutlined,
  SearchOutlined,
  NotificationsOutlined,
  EmailOutlined,
  ListAlt,
  VerifiedOutlined,
  Person,
  MoreHoriz,
  BookmarkBorderOutlined,
} from '@mui/icons-material';
import PostNav from '../components/PostNav';
import { useDispatch } from 'react-redux';
import { post } from '../store/slices/PostSlice';
import { Outlet } from 'react-router-dom';

const Posts = () => {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);

  if (!posts) return null;

  const sidebar = [
    'Home',
    'Explore',
    'Notifications',
    'Messages',
    'Lists',
    'Bookmarks',
    'Verified',
    'Profile',
    'More',
  ];

  return (
    <Fragment>
      <PostNav />
      <ListItem
        alignItems='flex-start'
        sx={{ overflow: 'auto', maxHeight: '88vh' }}
      >
        <List sx={{ padding: '0' }}>
          <ListItemText
            primary={<Fragment></Fragment>}
            secondary={
              <div
                style={{
                  backgroundColor: '#EEEEEE',
                  borderRadius: '35px',
                  padding: '10px',
                  paddingLeft: '20px',
                }}
              >
                {sidebar.map((opt, index) => (
                  <Button
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      height: '50px',
                      width: '220px',
                      color: 'black',
                      justifyContent: 'flex-start',
                    }}
                  >
                    <div
                      style={{
                        paddingRight: '10px',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      {index === 0 ? (
                        <HomeOutlined />
                      ) : index === 1 ? (
                        <SearchOutlined />
                      ) : index === 2 ? (
                        <NotificationsOutlined />
                      ) : index === 3 ? (
                        <EmailOutlined />
                      ) : index === 4 ? (
                        <ListAlt />
                      ) : index === 5 ? (
                        <BookmarkBorderOutlined />
                      ) : index === 6 ? (
                        <VerifiedOutlined />
                      ) : index === 7 ? (
                        <Person />
                      ) : (
                        <MoreHoriz />
                      )}
                    </div>

                    <Typography variant='h6' className='sidebar'>
                      {opt}
                    </Typography>
                  </Button>
                ))}{' '}
                <Button
                  fullWidth
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    color: 'black',
                    height: '50px',
                    borderRadius: '35px',
                    background:
                      'linear-gradient(30deg, rgba(238, 174, 202, 1)0%,rgba(148, 187, 233, 1) 100%)',
                  }}
                >
                  POST
                </Button>
              </div>
            }
          />
        </List>
        <Outlet />
        <List>
          <div
            style={{
              background: '#EEEEEE',
              padding: '15px',
              borderRadius: '35px',
            }}
          >
            <div>
              <Typography variant='subtitle2' sx={{ color: 'black' }}>
                Trending in Pakistan
              </Typography>
              <Typography sx={{ color: 'black', fontWeight: 'bold' }}>
                #BoycottSwedishBrands
              </Typography>
              <Typography variant='subtitle2' sx={{ color: 'black' }}>
                18.1K Posts
              </Typography>
              <Divider sx={{ marginTop: '10px', marginBottom: '10px' }} />
            </div>
            <div>
              <Typography variant='subtitle2' sx={{ color: 'black' }}>
                Trending in Pakistan
              </Typography>
              <Typography sx={{ color: 'black', fontWeight: 'bold' }}>
                #BoycottSwedishBrands
              </Typography>
              <Typography variant='subtitle2' sx={{ color: 'black' }}>
                18.1K Posts
              </Typography>
              <Divider sx={{ marginTop: '10px', marginBottom: '10px' }} />
            </div>
            <div>
              <Typography variant='subtitle2' sx={{ color: 'black' }}>
                Trending in Pakistan
              </Typography>
              <Typography sx={{ color: 'black', fontWeight: 'bold' }}>
                #BoycottSwedishBrands
              </Typography>
              <Typography variant='subtitle2' sx={{ color: 'black' }}>
                18.1K Posts
              </Typography>
              <Divider sx={{ marginTop: '10px', marginBottom: '10px' }} />
            </div>
          </div>
        </List>
      </ListItem>
    </Fragment>
  );
};

export default Posts;
