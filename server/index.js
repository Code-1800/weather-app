const passport = require('passport');
const path = require('path');
const express = require('express');
require('./googleAuth');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(express.static(path.resolve('./client', 'dist')));
app.use(passport.initialize());

app.use(passport.session());

app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/gogogogogo', (req, res) => {
  res.send('adljaldfjalkdjfkajdlfajkldfjlkadfjkla');
});

app.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: '/gogogogogo',
    failureRedirect: '/landingPage',
  })
);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
