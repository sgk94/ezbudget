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
                <div id="table-row" className="row" key={idx}>
                    <Link to={`/transactions/${transaction._id}`}>
                    <div className="col s2 m2 l2">{transaction.date}</div>
                    <div className="col s5 m5 l5">{transaction.transactionType}</div>
                    <div className="col s5 m5 l5">${transaction.amount}</div>
                    </Link>
                </div>
            )
        });
        return(
            <div className="center">
                <div className="row">
                    <h1 className="col s12">{this.state.name}</h1>
                </div>
                <div className="row">
                    <h5 className="col s6">Starting</h5>
                    <h5 className="col s6">Current</h5>
                </div>
                <div className="row">
                    <h2 className="col s6">${this.state.budget}</h2>
                    <h2 className="col s6">${ this.state.budget - count }</h2>
                </div>
                <div className="row">
                    <div className="col s2 m2 l2">Date</div>
                    <div className="col s5 m5 l5">Type</div>
                    <div className="col s5 m5 l5">Amount</div>
                </div>
                    { transactions.length > 0 ? transactions.slice(0, 5): <p>No Transactions</p>}
                <div className="row">
                    <Link to='/transactions/new' className="btn btn-danger col s6 m6 l6">Add Transaction</Link>
                    <Link to='/transactions' className="btn btn-danger col s6 m6 l6">View All</Link>
                </div>
            </div>
            
        )
    }
}

export default Index;