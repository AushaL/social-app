import React from 'react';
import './App.css';
import Header from './components/Header';
import AppAside from './components/App-aside';
import UserProfile from './components/User-profile';


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
