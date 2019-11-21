const passport = require('passport');
const FacebookStrategy = require('passport-facebook');
const keys = require('./keys');

passport.use(
    new FacebookStrategy({
        clientID: keys.facebook.clientID,
        clientSecret: keys.facebook.clientSecret,
        callbackURL: "/auth/facebook/redirect"
    }, (accessToken, refreshToken, profile, done)  => {
        console.log(profile)
    })
)