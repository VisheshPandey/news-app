import logo from './logo.svg';
import './App.css';


import {
  BrowserRouter as Router , 
  Routes,
  Route
} from "react-router-dom" ;

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Loading from './components/Loading';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />

        <Routes>

        <Route exact path="/" element={<News key="general"  pageSize = {6} country='in' category="general" />} />
        <Route exact path="/science" element={<News key="science" pageSize = {6} country="in" category="science" />} />

        </Routes>

      </Router>
    )
  }
}

