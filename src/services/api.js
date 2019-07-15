import tokenService from "../utils/tokenService";

// index
export function getOneUser() {
    return fetch(`/api/users`,{
        headers: {
            // 'content-type': 'application/json',
            'Authorization': "Bearer " + tokenService.getToken()
        }
    }).then(function(res) {
      return res.json();
    })
  }

  // show profile
  export function getProfile(id) {
      return fetch(`/api/profile`).then(function(res) {
          return res.json();
      })
  }

  // edit profile
  export function editProfile(profile) {
      return fetch(`/api/profile/edit`, {
          method: 'PUT',
          body: JSON.stringify({
            budget: profile.budget,
            name: profile.name
          }),
          headers: {
            'content-type': 'application/json',
            'Authorization': "Bearer " + tokenService.getToken()
          }
      }).then(function(res) {
          return res.json();
      })
  }

  // get all transactions
  export function getAllTransactions() {
    return fetch(`/api/transactions/`, {
        headers: {
          'Authorization': "Bearer " + tokenService.getToken()
        }
    }).then(function(res) {
        return res.json();
    }) 
  }
  
  // create Transaction
  export function createTransaction(transaction) {
      return fetch('/api/transactions/new', {
          method: 'POST',
          body: JSON.stringify({
            date: transaction.date,
            amount: transaction.amount,
            transactionType: transaction.transactionType,
            description: transaction.description
          }),
          headers: {
            'content-type': 'application/json',
            'Authorization': "Bearer " + tokenService.getToken()
          }
      }).then(function(res) {
          return res.json();
      })
  }
  
//   get Transaction
  export function getOneTransaction(id) {
      console.log(id)
      return fetch(`/api/transactions/${id}`, {
          headers: {
            'Authorization': "Bearer " + tokenService.getToken()
          }
      }).then(function(res) {
          return res.json();
      })
  }
  
  // edit Transaction
  export function editTransaction(transaction) {
    return fetch(`/api/transactions/${transaction.id}/edit`, {
      method: 'PUT',
      body: JSON.stringify({
        date: transaction.date,
        amount: transaction.amount,
        transactionType: transaction.transactionType,
        description: transaction.description
      }),
      headers: {
        'content-type': 'application/json',
        'Authorization': "Bearer " + tokenService.getToken()
      }
    }).then(function(res) {
        return res.json();
    })
  }
  
  // delete Transaction
  export function deleteTransaction(id) {
    return fetch(`/api/transactions/${id}`, {
      method: 'delete',
      headers: {
        'content-type': 'application/json',
        'Authorization': "Bearer " + tokenService.getToken()
      }
    }).then(function(res) {
      return res.json()
    });
  }
  
  // upvote/downvote posts
//   export function upvotePost(id, type) {
//     var type = type === "downvote" ? "downvote" : "upvote";
//     return fetch(`/api/posts/${id}/${type}`, {
//       method: 'PUT',
//       body: JSON.stringify({
//         upvotes: 1
//       }),
//       headers: {
//         'content-type': 'application/json'
//       }
//     })
//   }
  
  // add a comment to post
//   export function addComment(postId, comment) {
//     return fetch(`/api/posts/${postId}/comments`, {
//       method: 'POST',
//       body: JSON.stringify({
//         body: comment
//       }),
//       headers: {
//         'content-type': 'application/json'
//       }
//     })
//   }