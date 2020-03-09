import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import AppAside from './components/Navbar/App-aside';
import UserProfile from './components/Profile/User-profile';


const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <AppAside />
      <UserProfile />
    </div>
  );
}

export default App;
