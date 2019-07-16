import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// pages
import Index from './pages/Homepage/Index';
import userService from './utils/userService';
import LogIn from './pages/LogIn/LogIn';
import SignUp from './pages/SignUp/SignUp';
import SignUpPage from './pages/SignUp/SignUp';
import Navbar from './components/Navbar/Navbar';
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
    constructor() {
        super();
        this.state = {
            user: {}
        }
    }

    handleSignupOrLogin = () => {
        this.setState({ user: userService.getUser() });
      };

  render () {
    return (
    <div>
        <Navbar 
        user={this.state.user}
        />
     <div className="container">
        <Switch>
          <Route exact path='/' 
          render={props => (
              
                  this.state.user? 
                  <Index 
                  {...props}
                  />
                  :
                  <LogIn
                  {...props}
                  handleSignupOrLogin={this.handleSignupOrLogin}
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
                user={this.state.user}
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
      </div>
    )
  }
}

export default App;
