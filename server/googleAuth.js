const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const GOOGLE_CLIENT_ID =
  '146027173096-ovegjfq83i6ic19hkl47v7r603j3c8ie.apps.googleusercontent.com';

const GOOGLE_CLIENT_SECRET = 'o3-3Tu9l-NZFQ3y2MXcDpJsC';
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/auth/google/callback',
      passReqToCallback: false,
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      return done(null, profile);
    }
  )
);

console.log('jadlfjaldfjalkdjflaksd');
