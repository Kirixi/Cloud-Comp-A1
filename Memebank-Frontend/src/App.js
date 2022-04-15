import React, { Fragment } from 'react';
import './App.css';
import Header from './Header'
import Login from './Login'
import {Routes, Route} from 'react-router-dom';
import Home from "./Home";
import Upload from "./gallery/Upload";


function App() {
  return (
    <Fragment>
      <Header />
        <main>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/' element={<Home />} />
                <Route path='/Upload' element={<Upload />} />
            </Routes>
        </main>
    </Fragment>
  );
}

export default App;
