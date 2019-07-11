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
        var id = this.props.match.params.id;
        var self = this;
        getAllUser().then(function(json) {
            self.setState({
                // id: json._id,
                // username: json.username,
                // email: json.email,
                // name: json.name,
                budget: json.budget,
                // transactions: json.transactions

            })
    console.log("USER", json);
    // console.log(self.state)
        })
    }


    render() {
        return(
            <div>
                <h1>Hello World</h1>
                <h2>{this.state.budget}</h2>
                <p>{this.state.email}</p>
            </div>
            
        )
    }
}

export default Index;