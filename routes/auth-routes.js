const router = require('express').Router()
const passport = require("passport");

//auth login
router.get('/login', (req, res) => {
    res.render("login");
});

// auth logout
router.get('/logout', (req, res) => {
    // handle with passport
    res.send('logging out');
});

// auth with facebook
router.get('/facebook', passport.authenticate('facebook'));

// callback route for facebook to redirect to
router.get('/facebook/redirect',  (req, res) => {
    res.send('Successfully logged in');
});

module.exports = router