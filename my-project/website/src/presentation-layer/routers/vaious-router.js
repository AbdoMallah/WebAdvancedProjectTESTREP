const MIN_USERNAME_LENGTH = 3
const MAX_USERNAME_LENGTH = 10

exports.getErrorNewAccount = function(callback){
    const errors = []
    if(!account.hasOwnProperty("username")){
        errors.push("usernameMissing")
    }else if(account.username.length < MIN_USERNAME_LENGTH){
        errors.push("usernameToShort")
    }else if(account.username.length > MAX_USERNAME_LENGTH){
        errors.push("usernameTooLong")
    }

    return errors
}