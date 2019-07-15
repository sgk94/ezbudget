import React, { Component } from 'react';
import { getAllTransactions } from '../../services/api';
import { Link } from 'react-router-dom';

class IndexTransaction extends Component {
    constructor() {
        super();
        this.state = {
            transactions: []
        }
    }

    componentDidMount() {
        var self =this;
        getAllTransactions().then(function(json) {
            self.setState({ transactions: json })
            console.log(json)
        })

    }
    render() {
        let transactions = this.state.transactions.map((transaction, idx) => {
            return (
                <li key={idx}>
                    <Link to={`/transactions/${transaction._id}`}>Transaction {idx+1}</Link>
                </li>
            )
        })
        return (
            <div>
            <h1>This is the ALL Transactions page</h1>
            <ul>
                { transactions }
            </ul>

            </div>
        )
    }
}

export default IndexTransaction;