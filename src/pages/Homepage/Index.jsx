import React, { Component } from 'react';
import { getOneUser } from '../../services/api';
import { Link } from 'react-router-dom'; 
import './homepage.css'

class Index extends Component {
    constructor() {
        super();
        this.state = {
            transactions: [],
            budget: '',
        }
    }
   
    componentDidMount() {
        var self = this;
        getOneUser().then(function(user) {
            console.log("USER", user);
            self.setState({
                name: user.name,
                budget: user.budget,
                transactions: user.transactions,
                date: user.date
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
                <Link key={idx }to={`/transactions/${transaction._id}`}>
                    <div className="row card-panel">
                        <div className="row">
                            <div className="col s4 m4 l4 ">Date</div>
                            <div className="col s4 m4 l4">Type</div>
                            <div className="col s4 m4 l4">Amount</div>
                        </div>
                        <div className="row">
                            <div className="col s4 m4 l4">{new Date(transaction.date).toLocaleDateString()}</div>
                            <div className="col s4 m4 l4">{(transaction.transactionType)}</div>
                            <div className="col s4 m4 l4">${transaction.amount}</div>
                        </div>
                    </div>
                </Link>
            )
        });

        return(
           
        <div className="bg">
            <div className="container">
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
                    { (this.state.budget - count) >= 0 ?
                    <h2 className="positive col s6">${ this.state.budget - count }</h2>
                    :
                    <h2 className="negative col s6">${ this.state.budget - count }</h2>
                    }
                </div>
                <div className="row">
                    <h4>Recent Transaction</h4>
                </div>
                    { transactions.length > 0 ? transactions.slice(0, 5): <h3>No Transactions</h3>}
                    <br/>
                <div className="row">
                    <Link id="add-trans-btn" to='/transactions/new' className="btn light-blue darken-4 col s5 m5 l5">Add</Link>
                    <div className="col s2 m1l1"></div>
                    <Link id="view-all-btn" to='/transactions' className="btn light-blue darken-4 col s5 m5 l5">View All</Link>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default Index;