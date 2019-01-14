const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const {signUp, signIn} = require('../../controllers/users.controller');
const userRouter = express.Router();

userRouter.post('/signup', signUp);
userRouter.post('/signin', signIn);

// protected route
userRouter.get('/current', verifyToken, (req, res) => {
  jwt.verify(req.token, keys.secretOrKey, function(err, data) {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({message: 'A create use has been access... ', data});
    }
  });
});
// protected route
userRouter.get(
  '/any/addd',
  passport.authenticate('jwt', {session: false}),
  (req, res) => {
    res.json(req.user);
  }
);

function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];
  if (bearerHeader) {
    //Split at the space
    const bearer = bearerHeader.split(' ');
    //Get token from an array
    const bearerToken = bearer[1];
    //set the token
    console.log('bearerToken', bearerToken);
    req.token = bearerToken;
    //Next middleware
    next();
  } else {
    return res.status(403).json({message: 'Accessed denied'});
  }
}

module.exports = userRouter;
