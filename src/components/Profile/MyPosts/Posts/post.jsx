import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://toppng.com/public/uploads/preview/app-icon-set-login-icon-comments-avatar-icon-11553436380yill0nchdm.png" alt="user avatar"/>
            {props.message}
        </div>
    )
}

export default Post;