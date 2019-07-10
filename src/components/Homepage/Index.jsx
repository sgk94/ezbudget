import React, { Component } from 'react';
import { getUser } from '../../services/api';
import { Link } from 'react-router-dom';

class Index extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
            username: '',
            email: '',
            name: '',
            budget: '',
            transactions: []
        }
    }

    componentDidMount() {
        // var id = this.props.match.params.id;
        var self = this;
        getUser().then(function(user) {
            self.setState({
        //         id: user._id,
        //         username: user.username,
        //         email: user.email,
        //         name: user.name,
                budget: user,
        //         transactions: user.transactions

            })
    console.log(user);
        })
    }


    render() {
        return(
            <>
            <h1>Hello World</h1>
            <h2>{this.state.budget}</h2>
            </>
        )
    }
}

export default Index;