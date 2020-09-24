import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';

import Contact from './Contact';
import Home from './Home';
import Registration from './Registration';
import Glory from './Glory';
import Courses from './Courses';
import MissionPerseverance from './MissionPerseverance';
import RedKepi from './RedKepi';
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
              <Route path='/Missionperseverance2020' component={MissionPerseverance} />
              <Route path='/OperationRedKEPI2020' component={RedKepi} />
              <Route path='/Register' component={Registration} />
              <Route path='/Payment' component={Payment} />
              <Route path='/Contactus' component={Contact} />
            </Switch>
          </div>
        <Footer />
    </div>;
  }
}
