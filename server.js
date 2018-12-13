const express = require ('express');
const bodyParser = require ('body-parser');
const path = require('path')
const mongoose = require ('mongoose');
const studentRouter = require('./server/routes/routes');
const {MONGODB_URI} = require('./server/database/db');
const PORT = process.env.PORT || 5000;
const app = express ();

mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, err => {
  if (err) {
    console.log(err);
  }
  console.log('Dabase is connected');
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname,'/client/build')));
app.use (bodyParser.json ());
app.use('/', studentRouter)

app.get ('*', (req, res) =>
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
);

app.listen (PORT, () => {
  console.log (`Server is running at port ${PORT}`);
});

