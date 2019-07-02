const express = require('express');
const router = express.Router();
const isEmpty = require('lodash.isempty');
const Database = require('../util/db');

const messages = [
  { msg: 'kobe is the greatest' },
  { msg: 'I am the second greatest' },
  { msg: 'jordan is the third greatest' }
];

const db = new Database(messages);

router.get('/all', function(req, res, next) {
  res.json(db.getAll());
});

router.post('/new', function(req, res, next) {
  const msg = req.body.msg;
  if (!isEmpty(msg)) {
    const m = db.add({ msg });
    return res.status(200).json(m);
  } else {
    return res.status(400).send('Something went wrong!!!');
  }
});

router.delete('/remove/:id', function(req, res, next) {
  const id = parseInt(req.params.id);
  if (db.delete(id)) {
    res.status(200).json(id);
  } else {
    res.status(500).send('Failed to remove the message!');
  }
});

router.delete('/destroy', function(req, res, next) {
  db.clearAll();
  if (db.getAll().length === 0) {
    res.sendStatus(200);
  } else {
    res.status(400).send('Failed to clear DB!');
  }
});

module.exports = router;
