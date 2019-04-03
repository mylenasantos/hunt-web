import React, { Component } from 'react';
import Header from './components/Header/Index.js';
import Main from './pages/main';
//import api from ".services/api";
import './styles.css';
import Routes from './routes';


const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>

);



export default App;
