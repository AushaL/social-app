import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Posts/post';

const MyPosts = () => {
    return (
            <div className="user-posts">
                <h2>My Posts</h2>
                <input type="text"/>
                <Post />
                <Post /> 
                <Post />
                <Post />       
            </div>
    )
}


export default MyPosts;