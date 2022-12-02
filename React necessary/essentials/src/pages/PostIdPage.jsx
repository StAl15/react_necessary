import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import PostService from '../API/PostService';
import Loader from '../Components/UI/Loader/Loader';
import { Typography } from '@mui/material';

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const [comments, setComments] = useState([])
    const [isComLoading, setIsComLoading] = useState(false);
    const [comError, setComError] = useState(null);

    async function fetchPostById(id) {
        setIsLoading(true)
        const response = await PostService.getById(id)
        setPost(response.data)
        setIsLoading(false)

    }
    async function fetchComments(id) {
        setIsComLoading(true)
        const response = await PostService.getCommentsById(id)
        setComments(response.data)
        setIsComLoading(false)

    }

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div>
            <Typography variant="h4" gutterBottom>You opened post page with {params.id}</Typography>
            {isLoading
                ? <Loader />
                : <Typography>{post.id}. {post.title}</Typography>
            }
            <Typography variant='h4'>Comments</Typography>
            {isComLoading
                ? <Loader />
                :
                <div>
                    {comments.map(comm =>
                        <div key={comm.id} style={{ marginTop: 15 }}>
                            <Typography variant='h6'>{comm.email}</Typography>
                            <Typography>{comm.body}</Typography>
                        </div>)}
                </div>
            }

        </div>
    );
}

export default PostIdPage;
