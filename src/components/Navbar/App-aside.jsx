import React from 'react';
import classes from './App-aside.module.css';

const appAside = () => {
    return (        
            <nav className={classes.nav}>
                <ul>
                    <li className={classes.item}><a className={classes.link} href="#">Profile</a></li>
                    <li className={classes.item}><a className={classes.link} href="#">Messages</a></li>
                    <li className={classes.item}><a className={classes.link} href="#">News</a></li>
                    <li className={classes.item}><a className={classes.link} href="#">Music</a></li>
                    <li className={classes.item}><a className={classes.link} href="#">Settings</a></li>
                </ul>
            </nav>
    )
}

export default appAside;