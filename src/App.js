import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Signin from './components/Signin';
import Signup from './components/Signup';
import ProductsPage from './components/ProductsPage';
import Admin from './components/Admin';

export default class App extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
         
      }
  }

  render() {
    return (
      <Router>
        <div className="container justify-content-center">
          <Route path='/user/signup' component={Signup} />
          <Route path='/user/signin' component={Signin} />
          <Route path='/products/page' component={ProductsPage} />
          <Route path='/admin/panel' component={Admin} />
        </div>
      </Router>
    );  
  }

}