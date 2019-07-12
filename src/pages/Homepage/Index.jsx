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
     let transactions = this.state.transactions.map((transaction, idx) => {
            return (
                <li key={idx}>
                    <Link to={`/transaction/${transaction._id}`}>{transaction.amount}</Link>
                </li>
            )
        });
        return(
            <div>
                <h1>{console.log(this.state.user)}</h1>
               <p>{this.state.name}</p>
               <div>Starting</div>
               <div>${this.state.budget}</div>
               <p>{console.log(transactions)}</p>
               <p>{this.state.email}</p>
                <ul>
                    { transactions.length > 0 ? transactions : 'No Transactions'}
                </ul>
            </div>
            
        )
    }
}

export default Index;