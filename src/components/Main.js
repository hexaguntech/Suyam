import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';

import Contact from './Contact';
import Home from './home';
import Registration from './Registration';
import Glory from './Glory';
import Courses from './Courses';
import Institute from './Institute';
import Payment from './Payment';

export default class Main extends React.Component {
  render() {
    return <div>
        <Header />
        <div className='container mt-3'>
            <Switch>
              <Route exact path={['/', '/Home']} component={Home} />
              <Route exact path='/Institute' component={Institute} />
              <Route path='/Glory' component={Glory} />
              <Route path='/Courses' component={Courses} />
              <Route path='/Register' component={Registration} />
              <Route path='/Payment' component={Payment} />
              <Route path='/Contactus' component={Contact} />
            </Switch>
          </div>
        <Footer />
    </div>;
  }
}
