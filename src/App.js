import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import getUser from './utils/userService';
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

import { Link, Switch , Route, Redirect} from 'react-router-dom';

class App extends Component {
    constructor() {
        super();
        this.state = {
            user: userService.getUser()
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
     <div className="bg">
        <Switch>
          <Route exact path='/' 
          render={props => (
                  userService.getUser() ? 
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
                userService.getUser() ? 
              <Profile
                {...props}
              />
              :
              <Redirect to='/login' />
            )}
          />
          <Route
            exact path='/profile/edit'
            render={props => (
                userService.getUser() ? 
              <EditProfile
                {...props}
              />
              :
              <Redirect to='/login' />
            )}
          />
          <Route
            exact path='/transactions/new'
            render={props => (
                userService.getUser() ? 
              <CreateTransaction
                {...props}
              />
              :
              <Redirect to='/login' />
            )}
          />
          <Route
            exact path='/transactions/:id'
            render={props => (
                userService.getUser() ? 
              <ShowTransaction
                {...props}
              />
              :
              <Redirect to='/login' />
            )}
          />
          <Route
            exact path='/transactions/:id/edit'
            render={props => (
                userService.getUser() ? 
              <EditTransaction
                {...props}
              />
              :
              <Redirect to='/login' />
            )}
          />
          <Route
            exact path='/transactions'
            render={props => (
                userService.getUser() ? 
              <IndexTransaction
                {...props}
              />
              :
              <Redirect to='/login' />
            )}
          />
        </Switch>
       </div>
      </div>
    )
  }
}

export default App;
