import React from 'react';
import classes from './User-profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const userProfile = () => {
    return (
        <main className={classes.main}>
            <div>
                <img src="https://previews.123rf.com/images/peshkov/peshkov1904/peshkov190401017/121172277-creative-new-york-city-background-skyline-tourism-and-downtown-concept.jpg" alt=""/>
            </div>
            <div className="user-info">
                <img className="user-avatar" src="https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=" alt=""/>
                <h2></h2>
                <p></p>
            </div>
            <MyPosts />
        </main>
    )
}

export default userProfile;