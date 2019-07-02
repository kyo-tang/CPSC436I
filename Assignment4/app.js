const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const messagesRouter = require('./routes/messages');

const app = express();

// connect to mongodb
mongoose
  .connect('mongodb://localhost:27017/a4', { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// view engine setup
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/messages', messagesRouter);

app.use(express.static('client/build'));

app.get('*', (req, res) => {
  // res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  res.send('hello');
});

const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
