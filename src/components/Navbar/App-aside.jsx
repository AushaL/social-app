import React from 'react';
import classes from './App-aside.module.css';

const appAside = () => {
    return (        
            <nav className={classes.nav}>
                <ul>
                    <li className={classes.item}><a className={classes.link}>Profile</a></li>
                    <li className={classes.item}><a className={classes.link}>Messages</a></li>
                    <li className={classes.item}><a className={classes.link}>News</a></li>
                    <li className={classes.item}><a className={classes.link}>Music</a></li>
                    <li className={classes.item}><a className={classes.link}>Settings</a></li>
                </ul>
            </nav>
    )
}

export default appAside;