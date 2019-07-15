import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getOneTransaction } from '../../services/api';

class ShowTransaction extends Component {
    constructor() {
        super();
        this.state = {
            id:'',
            date: '',
            amount: '',
            transactionType: '',
            description: ''
        }
    }

    componentDidMount() {
        var id = this.props.match.params.id;
        var self = this;

        getOneTransaction(id).then(function(transaction) {
            self.setState({ 
                id: transaction._id, 
                date: transaction.date, 
                amount: transaction.amount, 
                transactionType: transaction.transactionType, 
                description: transaction.description})
            })
            console.log(self.state)
    }

    render() {
        return(
            <div>
                <h1>Show Transaction</h1>
                <label>Date</label>
                <h3>{this.state.date}</h3>
                <label>Amount</label>
                <h2>{this.state.amount}</h2>
                <label>Type</label>
                <h2>{this.state.transactionType}</h2>
                <label>Description</label>
                <h2>{this.state.description}</h2>
                <Link to={`/transactions/${this.state.id}/edit`}>Edit</Link>
            </div>
        )
    }
}

export default ShowTransaction;