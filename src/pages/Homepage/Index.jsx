import React, { Component } from 'react';
import { getOneUser } from '../../services/api';
import { Link } from 'react-router-dom';

class Index extends Component {
    constructor() {
        super();
        this.state = {
            transactions: []
        }
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
        let count = 0;
     let total = this.state.transactions.map((transaction) => {
         count += transaction.amount
         console.log("COUNT", count);
     })


     let transactions = this.state.transactions.map((transaction, idx) => {
            return (
                <li key={idx}>
                    <Link to={`/transactions/${transaction._id}`}>{transaction.amount}</Link>
                </li>
            )
        });
        return(
            <div>
                <h1>{console.log(this.state.user)}</h1>
               <p>{this.state.name}</p>
               <div>Starting</div>
               <div>${this.state.budget}</div>
               <div>Current</div>
               <div>${ this.state.budget - count }</div>
               <p>{console.log(transactions)}</p>
               <p>{this.state.email}</p>
                <ul>
                   Transactions { transactions.length > 0 ? transactions : 'No Transactions'}
                </ul>
                <Link to='/transactions/new' className="btn btn-danger">Add Transaction</Link>
                <Link to='/transactions' className="btn btn-danger">View All</Link>
            </div>
            
        )
    }
}

export default Index;