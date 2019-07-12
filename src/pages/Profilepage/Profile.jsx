import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import getOneUser from '../'
import { getOneUser }from '../../services/api';

class Profile extends Component {
    constructor() {
        super();
        this.state = {}
    }

    componentDidMount() {
        var self = this;
        getOneUser().then(function(user) {
            console.log("USER", user);
            self.setState({
                name: user.name,
                budget: user.budget,
                transactions: user.transactions
            })
            console.log(self.state)
        })
    } 

    render() {
        return (
            <div>
                <h1>This is the profile page</h1>
                <ul>
                    <li>${this.state.budget}</li>
                    <li>{this.state.name}</li>
                </ul>
                <Link to={`/profile/edit`} className="btn btn-secondary">Edit Profile</Link>
            </div>
        )
    }
}

export default Profile;