import React from 'react';
import classes from './App-aside.module.css';

const appAside = () => {
    return (        
            <nav className={classes.nav}>
                <ul>
                    <li className={classes.item}><a>Profile</a></li>
                    <li className={classes.item}><a>Messages</a></li>
                    <li className={classes.item}><a>News</a></li>
                    <li className={classes.item}><a>Music</a></li>
                    <li className={classes.item}><a>Settings</a></li>
                </ul>
            </nav>
    )
}

export default appAside;