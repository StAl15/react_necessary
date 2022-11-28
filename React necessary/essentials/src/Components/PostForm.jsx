import React from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';
import { useState } from 'react';



const PostForm = ({create}) => {
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

            <MyButton onClick={addNewPost}>Create post</MyButton>
        </form>
    );
}

export default PostForm;
