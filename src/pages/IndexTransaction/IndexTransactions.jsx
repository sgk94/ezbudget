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
                <Link key={idx} to={`/transactions/${transaction._id}`}>
                <div className="row card-panel">
                    <div className="row">
                        <div className="col s4 m4 l4 ">Date</div>
                        <div className="col s4 m4 l4">Type</div>
                        <div className="col s4 m4 l4">Amount</div>
                    </div>
                    <div className="row">
                        <div className="col s4 m4 l4">{new Date(transaction.date).toLocaleDateString()}</div>
                        <div className="col s4 m4 l4">{transaction.transactionType}</div>
                        <div className="col s4 m4 l4">${transaction.amount}</div>
                    </div>
                </div>
                </Link>
            )
        })
        return (
            <div className="container center">
                <h1>Transactions</h1>
                    { transactions.length > 0 ? transactions: <h3>No Transactions</h3>}
            </div>
        )
    }
}

export default IndexTransaction;