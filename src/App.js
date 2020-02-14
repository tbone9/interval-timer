import React from 'react';
import './App.css';
import MainContainer from './MainContainer';
import Header from './Header';

function App() {
  return (
    <div className="App">

      <Header />
    
      <MainContainer id="mainContainer" />

      <footer id='footer'>
        <p>by <a href="https://github.com/tbone9/interval-timer" target="_blank" rel="noopener noreferrer">Tyler Walker</a>, 2020</p>
      </footer>
      
    </div>
  );
}

export default App;