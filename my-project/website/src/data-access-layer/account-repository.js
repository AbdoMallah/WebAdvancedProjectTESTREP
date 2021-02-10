const db = require("./db")

module.exports = function(){
    const exports = {}

    /*
    *   Retrieves all accounts ordered by firstname.
    *   Possible errors: internalError
    *   Success value: The fetched accounts in an array.
    */ 

    exports.getAllUsers = function(callback){
        const query = `SELECT * FROM users ORDER BY user_firstname`
        const values = []

        db.query(query, values, function(error, usersAccounts){
            if(error){
                callback(['internalError'], null)
            }
            else{
                callback([], usersAccounts)
            }
        })
    }

    /*
    *   Retrieves the account with the given username.
    *   Possible errors: internalError
    *   Success value: The fetched account, or null if no account has that username. 
    */

    exports.getAccountByUsername =function(username,callback){
        const query = ` SELECT * FROM users WHERE username = ? LIMIT 1`
        const values = [username]
        db.query(query, values, function(error, accounts){
            if(error){
                callback(['internalError'], null)
            }else{
                callback([], accounts[0])
            }
        })
    }
    
    /*
    *   Create a new account.
    *   account: {username, firstname, lastname, mobile number, email, password, role default 0}
    *   Possible errors: internalError, usernameTaken, emailTaken
    *   Success value: The fetched accounts in an array.
    */
   exports.createAccount = function(account, callback){
        const query = `INSERT INTO users(user_username, user_firstname, user_lastname, user_mobile_number, user_email, user_password, user_role)
        VALUES (?,?,?,?,?,?,?)`
        const values = [account.user_username, account.user_firstname, account.user_lastname, account.user_mobile_number, account.user_email, account.user_password, account.user_role]
        db.query(query, values, function(error, results){
            if(error){
                if(error.sqlMessage.includes("usernameUnique")){
                    callback(["usernameTaken"], null)
                }else{
                    callback(["internalError"], null)
                }
            }else{
                callback([], results.insertId)
            }

        })

    }

    return exports

}
