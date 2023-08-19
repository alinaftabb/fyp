import React, { Fragment, useEffect, useState } from 'react';
import API from '../api';
import {
  BottomNavigation,
  BottomNavigationAction,
  List,
  ListItem,
} from '@mui/material';
import Post from '../components/Post';
import { useDispatch } from 'react-redux';
import { post } from '../store/slices/PostSlice';

const Posts = () => {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const post_res = await API.get('posts');

      const postsData = [];
      const users = await API.get(`users?limit=150`);

      post_res.data.posts.forEach(post => {
        post.user = users.data.users.find(u => post.userId === u.id);
        postsData.push(post);
      });

      setPosts(postsData);
      dispatch(post(postsData));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const getFullName = post => post.user.firstName + ' ' + post.user.lastName;

  if (!posts) return null;

  return (
    <Fragment>
      <List sx={{ width: '700px' }}>
        <ListItem>
          <BottomNavigation
            showLabels
            sx={{ margin: 'auto', background: '#EEEEEE' }}
            // value={value}
            // onChange={(event, newValue) => {
            //   setValue(newValue);
            // }}
          >
            <BottomNavigationAction
              label='Top'
              sx={{
                paddingRight: '70px',
                paddingLeft: '70px',
                fontWeight: 'bold',
              }}
            />
            <BottomNavigationAction
              label='Latest'
              sx={{
                paddingRight: '70px',
                paddingLeft: '70px',
                fontWeight: 'bold',
              }}
            />
            <BottomNavigationAction
              label='Photos'
              sx={{
                paddingRight: '70px',
                paddingLeft: '70px',
                fontWeight: 'bold',
              }}
            />
            <BottomNavigationAction
              label='Videos'
              sx={{
                paddingRight: '70px',
                paddingLeft: '70px',
                fontWeight: 'bold',
              }}
            />
          </BottomNavigation>
        </ListItem>
        <ListItem sx={{ display: 'flex', flexDirection: 'column' }}>
          {posts.map(post => (
            <Post post={post} getFullName={getFullName} />
          ))}
        </ListItem>
      </List>
    </Fragment>
  );
};

export default Posts;
