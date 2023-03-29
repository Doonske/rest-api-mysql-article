const express = require("express");
const router = express.Router();
const db = require("../services/db");

const logger = (req, res, next) => {
    console.log(`Received Request ${new Date(Date.now()).toLocaleString('de-DE')}`);
    console.log('HTTP METHOD', req.method);
    console.log('HTTP BODY', req.body);
    console.log('URL PARAMETER', req.params);
    next();
  }
  router.use(logger);


router.get("/", (req, res) => {
    res.json({ message: "ok" });
 });

router.get('/filter', async (req, res) => {
  const filter = req.query.filter;
  const validFilters = ['apartment', 'house', 'construction-site'];

  if (!validFilters.includes(filter)) {
    return res.status(400).json({ error: 'Invalid filter value' });
  }

  try {
    const results = await db.query('SELECT * FROM entries WHERE entry_type = ?', [filter]);
    if (results.length > 0) {
      res.json(results);
    } else {
      res.json({ message: 'No entries found for this filter value' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

  module.exports = router;
  