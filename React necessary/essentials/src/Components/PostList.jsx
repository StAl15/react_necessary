import React from 'react';
import PostItem from './PostItem';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import { Typography } from '@mui/material';

const PostList = ({ posts, title, remove }) => {

    if (!posts.length) {
        return (
            <h1 style={{ textAlign: 'center' }}>
                Nothing found
            </h1>
        )
    }
    return (
        <div>
            <Typography variant='h3' sx={{ textAlign: 'center' }} gutterBottom>
                {title}
            </Typography>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem remove={remove} number={index + 1} post={post} />
                    </CSSTransition>

                )}
            </TransitionGroup>

        </div>
    );
}

export default PostList;
