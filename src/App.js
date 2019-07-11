import React, { Component } from 'react';
import { Link, Switch , Route} from 'react-router-dom';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Index from './pages/Homepage/Index';
import userService from './utils/userService';
import LogIn from './pages/LogIn/LogIn';
import SignUp from './pages/SignUp/SignUp';
import SignUpPage from './pages/SignUp/SignUp';

class App extends Component {
    constructor() {
        super();
        this.state={
            user: userService.getUser()
        }
    }

    handleSignupOrLogin = () => {
        this.setState({ user: userService.getUser() });
      };
    
      handleLogOut = () => {
        console.log("handlelogout called");
        userService.logout();
        console.log("logged out");
        this.setState({ user: null });
        console.log(this.state.user);
      };

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
            <li className="nav-item">
                <Link to={'/signup'} className="nav-link">Sign Up</Link>
              </li>
            <li className="nav-item">
                <Link to={'/login'} className="nav-link">Log In</Link>
              </li>
            <li className="nav-item">
                <Link 
                    to={'/login'} 
                    className="nav-link"
                    onClick={this.handleLogOut}
                >Log Out</Link>
              </li>
              {/* <li className="nav-item">
                <Link to={'/create'} className="nav-link">Create</Link>
              </li> */}
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path='/' component={ Index } />
          <Route 
          exact path='/signup' 
          render={props => (
              <SignUpPage
                {...props}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact path='/login'
            render={props => (
              <LogIn
                {...props}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
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
