import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Main from './components/Main';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <ScrollToTop />
          <Main />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;