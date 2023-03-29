const express = require("express");
const router = express.Router();
const db = require("../services/db")


const logger = (req, res, next) => {
    console.log(`Received Request ${new Date(Date.now()).toLocaleString('de-DE')}`);
    console.log('HTTP METHOD', req.method);
    console.log('HTTP BODY', req.body);
    console.log('URL PARAMETER', req.params);
    next();
  }
  router.use(logger);


  router.get('/:key', async (req, res) => {
    const query = req.params.key;
  
    try {
      const results = await db.query('SELECT * FROM entries WHERE entry_address LIKE ? OR entry_postal LIKE ? OR entry_city LIKE ?', [`%${query}%`, `%${query}%`, `%${query}%`]);
      if (results.length > 0) {
        res.send(results);
      } else {
        res.status(404).send('No matching results found');
      }
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  });

  module.exports = router;
  
  
  