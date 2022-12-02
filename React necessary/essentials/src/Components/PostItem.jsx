import { Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MyButton from './UI/button/MyButton';

const PostItem = (props) => {
    const router = useNavigate()

    console.log(props)
    return (
        <div className="post">
            <div className='post__content'>
                <Typography variant='h5' gutterBottom>{props.post.id}. {props.post.title}</Typography>
                <Typography gutterBottom>
                    {props.post.body}
                </Typography>
            </div>
            <div className='post__btns' style={{marginTop: 20}}>
                <MyButton sx={{ backgroundColor: 'rgb(144 202 249)', color: 'rgb(0 0 0 / 87%)', mr: 2}} variant="contained" disableElevation onClick={() => router(`/posts/${props.post.id}`)}>Open</MyButton>
                <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>

            </div>
        </div>
    );
}

export default PostItem;
