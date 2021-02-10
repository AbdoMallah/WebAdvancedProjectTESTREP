const express = require('express')

module.exports = function({accountManager}){
    const router = express.Router()

    router.get("/sign_up", function(req, res){
        res.render("accounts-sign-up-hbs")
    })

    router.get("/sign_in", function(req, res){
        res.render("accounts-sign-in.hbs")
    })
    router.get("/sign_up", function(req, res){
        res.render("accounts-sign-up.hbs")
    })

    router.get("/", function(req, res){
        accountManager.getAll 
    })
    return router
}
