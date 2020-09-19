import React from 'react';
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AboutUs from './components/about_us';
import Home from './components/home';
import UserRegistration from './components/user_registration';

function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <nav className='navbar navbar-expand navbar-dark bg-dark'>
            <div className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <Link to={'/home'} className='nav-link'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to={'/register'} className='nav-link'>
                  Register User
                </Link>
              </li>
              <li className='nav-item'>
                <Link to={'/aboutus'} className='nav-link'>
                  About us
                </Link>
              </li>
            </div>
          </nav>

          <div className='container mt-3'>
            <Switch>
              <Route exact path={['/', '/home']} component={Home} />
              <Route exact path='/register' component={UserRegistration} />
              <Route path='/aboutus' component={AboutUs} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
