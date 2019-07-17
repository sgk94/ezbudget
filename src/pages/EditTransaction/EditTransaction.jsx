import React, { Component } from 'react';
import { getOneTransaction, editTransaction, deleteTransaction } from '../../services/api';

class EditTransaction extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
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
    }

    handleDelete = (id) => {
        deleteTransaction(id).then(function() {
            window.location ='/transactions';
        });
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        var self = this;
        editTransaction(this.state).then(function() {
            window.location =`/transactions/${self.state.id}`
            console.log('UPDATE', self.state)
        })
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
    

    render() {
        let date = (new Date(this.state.date).toLocaleDateString())
        return(
            <div className="container">
                <h1>Edit Transaction</h1>
                <div className="card-panel">
                    <form onSubmit= {this.handleSubmit}>
                        <label>Date</label>
                        <br/>
                        <input onChange={this.handleDate} placeholder={date} />
                        <br/>
                        <label>Amount</label>
                        <br/>
                        <input onChange={this.handleAmount} value={this.state.amount} />
                        <br/>
                        <label>Transaction Type</label>
                        <br/>
                        <input onChange={this.handleTransactionType } value={this.state.transactionType} />
                        <br/>
                        <label>Description</label>
                        <br/>
                        <textarea className="materialize-textarea" onChange={this.handleDescription} value={this.state.description}></textarea>
                        <br/>
                    
                        <input type="submit" className="btn light-blue darken-4 col s5 m5 l5" value="Update"/>
                    </form>
                </div>
                <br/>
                <div className="row">
                    <button className="btn red darken-2 col s12 m12 l12" type="submit" onClick= { () => this.handleDelete(this.state.id)} value="Delete">Delete</button>
                </div>
            </div>
        )
    }
}

export default EditTransaction;