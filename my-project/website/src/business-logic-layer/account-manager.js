const accountValidator = require("./account-validator")

module.exports = function({accountRepository}){
    const exports = {}

    exports.getAllAccounts = function(callback){
        accountRepository.getAllAccounts(callback)
    }
    exports.createAccount = function(callback){
        const error = accountValidator.getErrorsNewAccount(account)

        if(0 < error.length){
            callback(error, null)
            return 
        }

        accountRepository.createAccount(account, callback)
    }

    exports.getAccountByUsername = function(username, callback){
        accountRepository.getAccountByUsername(username, callback)
    }

    return exports
}

