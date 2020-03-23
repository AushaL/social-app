import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import AppAside from './components/Navbar/App-aside';
import UserProfile from './components/Profile/User-profile';
import Messages from './components/Messages/Messages'
import {BrowserRouter, Route } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <AppAside />
        <div className='app-wrapper-content'>
          <Route path='/messages' component={Messages} />
          <Route path='/profile' component={UserProfile} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
