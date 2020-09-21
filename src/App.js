import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Main from './components/Main';

function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;