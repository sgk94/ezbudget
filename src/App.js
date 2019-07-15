import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// pages
import Index from './pages/Homepage/Index';
import userService from './utils/userService';
import LogIn from './pages/LogIn/LogIn';
import SignUp from './pages/SignUp/SignUp';
import SignUpPage from './pages/SignUp/SignUp';
// Profile
import Profile from './pages/Profilepage/Profile';
import EditProfile from './pages/EditProfile/EditProfile';
// Transaction CRUD
import CreateTransaction from './pages/CreateTransaction/CreateTransaction';
import ShowTransaction from './pages/ShowTransaction/ShowTransaction';
import EditTransaction from './pages/EditTransaction/EditTransaction';
import IndexTransaction from './pages/IndexTransaction/IndexTransactions';

import { Link, Switch , Route} from 'react-router-dom';

class App extends Component {

    handleSignupOrLogin = () => {
        this.setState({ user: userService.getUser() });
      };
    
      handleLogOut = () => {
        console.log("handlelogout called");
        userService.logout();
        console.log("logged out");
        this.setState({ user: null });
        // console.log(this.state.user);
      };

  render () {
    return (
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={'/'} className="navbar-brand">EZBUDGET</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to={'/signup'} className="nav-link">Sign Up</Link>
                </li>
                {
                    1 ? 
                    <li className="nav-item">
                        <Link to={'/login'} className="nav-link">Log In</Link>
                    </li> 
                    :
                    <li className="nav-item">
                        <Link 
                        to={'/login'} 
                        className="nav-link"
                        onClick={this.handleLogOut}
                        >Log Out</Link>
                    </li>
                }
                <li className="nav-item">
                    <Link 
                        to={'/profile'} 
                        className="fas fa-user fa-2x nav-link"
                    ></Link>
                </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path='/' 
          render={props => (
              <Index 
              {...props}
              />
          )}
          />
          
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
          <Route
            exact path='/profile'
            render={props => (
              <Profile
                {...props}
              />
            )}
          />
          <Route
            exact path='/profile/edit'
            render={props => (
              <EditProfile
                {...props}
              />
            )}
          />
          <Route
            exact path='/transactions/new'
            render={props => (
              <CreateTransaction
                {...props}
              />
            )}
          />
          <Route
            exact path='/transactions/:id'
            render={props => (
              <ShowTransaction
                {...props}
              />
            )}
          />
          <Route
            exact path='/transactions/:id/edit'
            render={props => (
              <EditTransaction
                {...props}
              />
            )}
          />
          <Route
            exact path='/transactions'
            render={props => (
              <IndexTransaction
                {...props}
              />
            )}
          />
        </Switch>
      </div>
    )
  }
}

export default App;
