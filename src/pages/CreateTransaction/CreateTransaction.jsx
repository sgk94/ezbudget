import React, { Component } from 'react';
import { createTransaction } from '../../services/api';

class CreateTransaction extends Component {
    constructor() {
        super();
        this.state = {
            date: '',
            amount: '',
            transactionType: '',
            description: ''
        }
    }

handleDate = (e) => {
    this.setState({ date: e.target.value })
}

handleAmount = (e) => {
    this.setState({ amount: e.target.value })
}

handleTransactionType = (e) => {
    this.setState({ transactionType: e.target.value })
}

handleDescription = (e) => {
    this.setState({ description: e.target.value })
}

handleSubmit = (e) => {
    e.preventDefault();
    createTransaction(this.state).then(function() {
        window.location ='/'
    })
}
    render() {
        return(
            <div>
                <h1>Create Transaction</h1>
                <form onSubmit= {this.handleSubmit}>
                    <label>Date</label>
                    <br/>
                    <input onChange={this.handleDate} placeholder="mm/dd/yy"/>
                    <br/>
                    <label>Amount</label>
                    <br/>
                    <input onChange={this.handleAmount} placeholder="500"/>
                    <br/>
                    <label>Transaction Type</label>
                    <br/>
                    <input onChange={this.handleTransactionType }placeholder="e.g. Food, Retail"/>
                    <br/>
                    <label>Description</label>
                    <br/>
                    <textarea onChange={this.handleDescription}></textarea>
                    <br/>
                    <input type="submit" className="btn btn-secondary" value="Add"/>
                </form>
            </div>
        )
    }
}

export default CreateTransaction;