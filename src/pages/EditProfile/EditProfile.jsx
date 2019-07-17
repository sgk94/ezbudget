import React, { Component } from 'react'
import { getOneUser, editProfile } from '../../services/api';

class EditProfile extends Component {
    constructor() {
        super();
        this.state = {
            budget: '',
            name: ''
        }
    }

    componentDidMount() {
        // var id = this.props.match.params.id;
        var self = this;

        getOneUser().then(function(profile) {
            self.setState({
                budget: profile.budget,
                name: profile.name
            })
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        editProfile(this.state).then(function() {
            window.location = '/profile';
        })
    }

    handleBudget = (e) => {
        this.setState({ budget: e.target.value })
    }

    handleName = (e) => {
        this.setState({ name: e.target.value })
    }

    render() {
        return(
            <div className="container">
                <h1>Edit Profile</h1>
                <div className="card-panel">
                    <form onSubmit={this.handleSubmit}>
                        <label> Budget </label>
                        <br/>
                        <input onChange={this.handleBudget} value={this.state.budget}/>
                        <br/>
                        <label> Name </label>
                        <br/>
                        <input onChange={this.handleName} value={this.state.name}/>
                        <br/>
                        <input type="submit" className="btn light-blue darken-4 col s5 m5 l5" value="Update"/>
                    </form>
                </div>
            </div>

        )
    }
}

export default EditProfile;