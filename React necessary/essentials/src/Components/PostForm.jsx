import React from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';
import { useState } from 'react';



const PostForm = ({ create }) => {
    const [post, setPost] = useState({ title: '', body: '' });

    function addNewPost(e) {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({ title: '', body: '' })

    }



    return (
        <form>

            <MyInput
                sx={{ mb: 2 }}
                type="text"
                placeholder="title name"
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
            />

            <MyInput
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })}
                type="text"
                placeholder="desc name" />
                
            <MyButton sx={{ backgroundColor: 'rgb(144 202 249)', color: 'rgb(0 0 0 / 87%)', mt: 2 }} variant="contained" disableElevation onClick={addNewPost}>Create post</MyButton>

        </form>
    );
}

export default PostForm;
