const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const studentRouter = require('./server/routes/api/students');
const userRouter = require('./server/routes/api/users');
const {MONGODB_URI} = require('./server/config/keys');
const PORT = process.env.PORT || 5000;
const app = express();
const os = require('os');

app.use((req, res, next) => {
  const ip = req.connection.remoteAddress;
  const date = new Date();
  console.log('This is a midle ware');
  console.log(
    `The user is checking the ${
      req.url
    } page. At ${date}. The host name is ${os.hostname()}. And the ip is ${ip}`
  );
  next();
});

mongoose.connect(
  MONGODB_URI,
  {useNewUrlParser: true},
  err => {
    if (err) {
      console.log(err);
    }
    console.log('Dabase is connected');
  }
);

app.use(bodyParser.json());
app.use('/api', studentRouter);
app.use('/api/users', userRouter);

if (process.env.NODE_ENV === 'production') {
  // Serve static files from the React app
  app.use(express.static(path.join(__dirname, '/client/build')));
  app.get('*', (req, res, next) =>
    res.sendFile(path.join(__dirname + '/client/build/index.html'))
  );
}

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
