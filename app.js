const express = require('express');

const userRouter = require('./routes/userRoute');
const jobRouter = require('./routes/jobRoute');

const app = express();

// MIDDLEWARES
app.use(express.json()); // used to parse incoming JSON data in the request body
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.headers);

  next();
});

// Route handler
app.use('/api/v1/users', userRouter);
app.use('/api/v1/jobs', jobRouter);

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

module.exports = app;
