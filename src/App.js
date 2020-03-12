import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import AppAside from './components/Navbar/App-aside';
import UserProfile from './components/Profile/User-profile';
import Messages from './components/Messages/Messages'


const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <AppAside />
      {/* <UserProfile /> */}
      <div className='app-wrapper-content'>
        <Messages />
      </div>
    </div>
  );
}

export default App;
