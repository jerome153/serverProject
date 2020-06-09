const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const monsgoose = require('mongoose');
const keys = require('../config/keys.js');
const User = mongoose.model('users');

passport.serializeUser((user, done) =>{
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });



});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true

    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          //we already have a record with the given profile // IDEA:
          done(null, existingUser);
        }
        else {
          //we don't have a user record iwth this ID, make a new TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q
          new User({ googleId: profile.id })
          .save()
          .then(user => done(null, user));
        }
      });
    }
  )
);
