import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import './index.css';
import Home from './component/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import One from './component/One';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}>
        <Route path='one' element={<One/>}/>
      </Route>
     </Routes>
     </BrowserRouter>
  </React.StrictMode>
);


