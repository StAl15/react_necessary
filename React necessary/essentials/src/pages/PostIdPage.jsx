import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import PostService from '../API/PostService';
import Loader from '../Components/UI/Loader/Loader';

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
            <h1>You opened post page with {params.id}</h1>
            {isLoading
                ? <Loader />
                : <div>{post.id}. {post.title}</div>
            }
            <h1>Comments</h1>
            {isComLoading
                ? <Loader />
                :
                <div>
                    {comments.map(comm =>
                        <div key={comm.id} style={{ marginTop: 15 }}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>)}
                </div>
            }

        </div>
    );
}

export default PostIdPage;
