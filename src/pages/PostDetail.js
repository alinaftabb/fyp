import React, { useEffect, useState } from 'react';
import Comment from '../components/Comment';
import { Avatar, ListItem, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import API from '../api';

const PostDetail = () => {
  const [post, setPost] = useState();
  // const [comment, setComment] = useState([]);
  const posts = useSelector(state => state.post);
  const { postId } = useParams();
  const navigate = useNavigate();

  const getComments = async post => {
    try {
      const res = await API.get(`/comments/post/${post.id}`);
      const comments = res.data.comments;

      if (comments) {
        post = {
          ...post,
          comments,
        };
      }

      setPost(post);

      // setComment(res.data.comments);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!postId) {
      navigate('/posts');
    }

    let post = posts.find(p => p.id == postId);

    if (!post) {
      navigate('/posts');
    }

    getComments(post);
  }, []);

  return !post ? (
    <></>
  ) : (
    <ListItem sx={{ flexDirection: 'column', alignItems: 'baseline' }}>
      <div className='post-header'>
        <Typography variant='h4' sx={{ color: 'black', fontWeight: 'bold' }}>
          {post.title}
        </Typography>
        <div className='img-name'>
          <Avatar className='avatar' />
          <span>
            <Typography
              variant='subtitle2'
              sx={{
                fontWeight: 'bold',
                fontSize: '18px',
                letterSpacing: '0.1em',
              }}
            >
              {post.user.firstName} {post.user.lastName}
            </Typography>
          </span>
        </div>

        <div className='tags'>
          {post.tags.map((tag, index) => (
            <span key={index} className='tag'>
              # {tag}
            </span>
          ))}
        </div>
      </div>
      <Typography variant='subtitle2' className='post-body'>
        {post.body}
      </Typography>
      <div className='reactions'></div>
      <div className='comments'>
        <Comment comments={post.comments} />
      </div>
    </ListItem>
  );
};

export default PostDetail;
