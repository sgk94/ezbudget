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
            <div className="container">
                    <h1>Show Transaction</h1>
                <div class="card-panel">
                    <label>Date</label>
                    <h3>{new Date(this.state.date).toLocaleDateString()}</h3>
                    <label>Amount</label>
                    <h3>{this.state.amount}</h3>
                    <label>Type</label>
                    <h3>{this.state.transactionType}</h3>
                    <label>Description</label>
                    <h3>{this.state.description}</h3>
                </div>
                    <Link id="edit-btn" className="btn light-blue darken-4 col s5 m5 l5" to={`/transactions/${this.state.id}/edit`}>Edit Transaction</Link>
                    <br/>
            </div>
        )
    }
}

export default ShowTransaction;