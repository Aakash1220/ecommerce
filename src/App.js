import './App.css';
import React, { Component } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

import Register from './components/Register';
import Products from './components/Products'
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Homee from './components/Homee';
import Description from './components/Description';
function App() {
  return (
<div className="App">
  <Header/>
     
     
     <Route exact path="/"> <Homee/> </Route>
  <Route path="/products"> <Products /> </Route>
  <Route path="/login"> <Login /> </Route>
  <Route path="/register"> <Register /> </Route>
  <Route path="/details"> <Description /> </Route>
      <Footer/>
     
   
      </div>    
  );
}

export default App;
