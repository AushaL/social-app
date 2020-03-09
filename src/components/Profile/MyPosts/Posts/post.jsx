import React from 'react';
import classes from './post.module.css';

const Post = () => {
    return (
        <div className={classes.item}>
            <img src="https://toppng.com/public/uploads/preview/app-icon-set-login-icon-comments-avatar-icon-11553436380yill0nchdm.png" alt="user avatar"/>
            item 1
            <button>like</button>
        </div>
    )
}

export default Post;