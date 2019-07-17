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
            <div className="container">
                <h1>My Profile</h1>
                <div className="card-panel">
                    <div>
                        <label>Name</label>
                            <h3>{this.state.name}</h3>
                        <label>Budget</label>
                            <h3>${this.state.budget}</h3>
                    </div>
                </div>
                <br/>
                <Link to={`/profile/edit`} className="btn light-blue darken-4 col s5 m5 l5">Edit Profile</Link>
            </div>
        )
    }
}

export default Profile;