import {Routes , Route} from 'react-router-dom';
import React from 'react';
import './App.css';
import Login from './login';
import Signup from './signup';

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    </Routes>
    </>
      );
}

export default App;
