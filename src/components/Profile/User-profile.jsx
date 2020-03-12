import React from 'react';
import classes from './User-profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const userProfile = () => {
    return (
        <main className={classes.main}>
            <div className="user-info">
                <h2></h2>
                <p></p>
            </div>
            <MyPosts />
        </main>
    )
}

export default userProfile;