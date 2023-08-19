import {
  Avatar,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import React, { Fragment } from 'react';

const Comment = ({ comments }) => {
  console.log(comments);
  return (
    <Paper
      elevation={3}
      style={{ padding: '20px', width: '700px', margin: 'auto' }}
    >
      <Typography variant='h6' gutterBottom>
        Comments
      </Typography>
      <List>
        {comments.map((comment, index) => (
          <Fragment>
            <ListItem key={index} className='comment-content'>
              <Avatar sx={{ marginRight: '20px' }} />
              <ListItemText
                primary={
                  <span style={{ fontWeight: 'bold' }}>
                    {comment.user.username}
                  </span>
                }
                secondary={comment.body}
              />
            </ListItem>
            <Divider />
          </Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default Comment;
