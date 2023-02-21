const express = require("express");
const router = express.Router();
const programmingLanguages = require("../services/entries");
const entries = require("../services/entries");
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const logger = (req, res, next) => {
  console.log(`Received Request ${new Date(Date.now()).toLocaleString('de-DE')}`);
  console.log('HTTP METHOD', req.method);
  console.log('HTTP BODY', req.body);
  console.log('URL PARAMETER', req.params);
  next();
}
router.use(logger);


/* GET programming languages. */
router.get("/", async function (req, res, next) {
  try {
    res.json(await entries.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

/* POST programming language */
router.post("/", async function (req, res, next) {
  try {
    res.json(await entries.create(req.body));
  } catch (err) {
    console.error(`Error while creating programming language`, err.message);
    next(err);
  }
});

/* PUT programming language */
router.put("/:id", async function (req, res, next) {
  try {
    res.json(await entries.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating programming language`, err.message);
    next(err);
  }
});

/* DELETE programming language */
router.delete("/:id", async function (req, res, next) {
  try {
    res.json(await entries.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting programming language`, err.message);
    next(err);
  }
});

module.exports = router;
