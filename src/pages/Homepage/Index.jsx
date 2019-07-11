import React, { Component } from 'react';
import { getAllUser } from '../../services/api';
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
        getAllUser().then(function(json) {
            self.setState({
        //         id: user._id,
        //         username: user.username,
        //         email: user.email,
        //         name: user.name,
                budget: json,
        //         transactions: user.transactions

            })
    console.log(json);
        })
    }


    render() {
        return(
            <>
            <h1>Hello World</h1>
            <h2>{this.state.budget}</h2>
            <p>{this.state.budget}</p>
            </>
        )
    }
}

export default Index;