const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'testdaten'
});

// Endpoint to create a new entry in the database
app.post('/entries', (req, res) => {
  const entry = req.body;

  // Create a new entry in the database
  const query = 'INSERT INTO entries (createdOn, createdBy, softwareVersion, customer, entry_type, address, size, comment, shortHand) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [
    entry.createdOn,
    entry.createdBy,
    entry.softwareVersion,
    entry.customer,
    entry.entry.type,
    entry.entry.address,
    entry.entry.size,
    entry.entry.comment,
    entry.entry.shortHand
  ], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error creating entry');
    } else {
      res.status(200).send('Entry created successfully');
    }
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
