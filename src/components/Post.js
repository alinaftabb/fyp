import {
  Avatar,
  Button,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import React, { Fragment, useState } from 'react';
import {
  FavoriteBorder,
  Comment,
  Repeat,
  BarChart,
  Reply,
} from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';

const Post = ({ post, getFullName }) => {
  const [showFullText, setShowFullText] = useState(false);
  const nav = useNavigate();

  const toggleText = e => {
    e.stopPropagation();
    setShowFullText(!showFullText);
  };

  const handleClick = () => {
    nav('/post-detail/' + post.id);
  };

  return (
    <Fragment key={post.id}>
      <ListItem
        alignItems='flex-start'
        sx={{ padding: '0px', cursor: 'pointer' }}
        onClick={handleClick}
      >
        <Avatar className='avatar' />
        <ListItemText
          primary={
            <span
              style={{
                fontWeight: 'bold',
                letterSpacing: '1px',
              }}
            >
              {getFullName(post)}
            </span>
          }
          secondary={
            <Fragment>
              <Typography
                variant='body2'
                component='span'
                color='textPrimary'
                className='post-body'
              >
                {showFullText ? post.body : post.body.slice(0, 100) + '...'}
                {!showFullText && (
                  <Button
                    onClick={toggleText}
                    sx={{
                      textTransform: 'lowercase',
                      padding: '3px',
                      paddingBottom: '5px',
                    }}
                  >
                    See more
                  </Button>
                )}
              </Typography>
              <div>
                <ListItemIcon
                  className='post-opt'
                  onClick={e => e.stopPropagation()}
                >
                  <span style={{ display: 'flex' }}>
                    <Typography variant='subtitle2' sx={{ marginTop: '10px' }}>
                      {post.reactions}
                    </Typography>
                    <FavoriteBorder className='icon' />
                  </span>
                  <Comment className='icon' />
                  <Repeat className='icon' />
                  <BarChart className='icon' />
                  <Reply className='icon' />
                </ListItemIcon>
              </div>
              <Divider sx={{ padding: '5px' }} />
            </Fragment>
          }
        />
      </ListItem>
    </Fragment>
  );
};

export default Post;
