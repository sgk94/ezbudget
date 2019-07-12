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
            <div>
                <h1>Edit Profile</h1>
                <hr/>
                <form onSubmit={this.handleSubmit}>
                    <label> Budget </label>
                    <br/>
                    <input onChange={this.handleBudget} placeholder={this.state.budget}/>
                    <br/>
                    <label> Name </label>
                    <br/>
                    <input onChange={this.handleName} placeholder={this.state.name}/>
                    <br/>
                    <input type="submit" className="btn btn-primary" value="Update"/>
                </form>
            </div>

        )
    }
}

export default EditProfile;