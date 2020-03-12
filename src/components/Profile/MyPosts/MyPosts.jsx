import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Posts/Post';
import Like from './Posts/Like';

const MyPosts = () => {
    return (
            <div className="user-posts">
                <h2 className={`${classes.greed} ${classes.size}`}>My Posts</h2>
                <input type="text"/>
                <Post message='Hi, how are you?' />
                <Like count='10' />
                <Post message='I like potato' />    
                <Like count='20' />
            </div>
    )
}


export default MyPosts;