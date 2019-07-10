import React, { Component } from 'react';
import { Link, Switch , Route} from 'react-router-dom';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Index from './components/Homepage/Index';

class App extends Component {
  render () {
    return (
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={'/'} className="navbar-brand">EZBUDGET</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link to={'/'} className="nav-link">Home</Link>
              </li>
              {/* <li className="nav-item">
                <Link to={'/create'} className="nav-link">Create</Link>
              </li> */}
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path='/' component={ Index } />
          {/* <Route exact path='/create' component={ Create } />
          <Route exact path='/posts/:id' render={ (props) =>
            <Show {...props} />
           } />
          <Route exact path='/posts/:id/edit' render={ (props) => 
            <Edit {...props} />
           } /> */}
        </Switch>
      </div>
    )
  }
}

export default App;
