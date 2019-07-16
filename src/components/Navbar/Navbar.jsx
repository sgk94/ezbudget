import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import userService from '../../utils/userService';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user : this.props.user
        }
    }

    handleLogOut = (e) => {
        e.preventDefault();
        console.log("handlelogout called");
        userService.logout();
        console.log("logged out");
        this.setState({ user: null });
        window.location = '/login'
        // console.log(this.state.user);
      };

    render() {
        return(
        <div>
            <nav className="nav light-blue darken-4">
          <div className="nav-wrapper">
          <Link to={'/'} className="brand-logo center">EZBUDGET</Link>
          <Link to={'#'}className="sidenav-trigger" data-target="mobile-links"><i className="material-icons hide-on-large-only">menu</i></Link>
            <ul>
                <li id="profile-icon" className="right">
                    <Link 
                        to={'/profile'} 
                    ><i className="large material-icons">account_circle</i>
                    </Link>
                </li>
                {
                    this.props.user ? 
    
                    <li className="right hide-on-med-and-down">
                        <Link 
                        to={'/login'} 
                        onClick={this.handleLogOut}
                        >Log Out</Link>
                    </li>
                    :
                    <li></li>
                }
            </ul>
          </div>
        </nav>
            <ul className="sidenav light-blue darken-4" id="mobile-links"> 
        {
            this.props.user ?
        <div>
        <li><Link className="white-text" to="/">Home</Link></li>
            <li>
                <Link 
                className="white-text"
                to={'/login'} 
                onClick={this.handleLogOut}
                >Log Out</Link>
            </li>
        </div>
        :
        <div>
        <li><Link className="white-text" to="/signup">Sign Up</Link></li>
        <li><Link className="white-text" to="/login">Log In</Link></li>
        </div>
        }
        </ul>
        </div>
        )
    }
}

export default Navbar;