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


/* GET - alle Einträge */
router.get("/", async function (req, res, next) {
  try {
    res.json(await entries.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

router.get("/:id", async function (req, res) {
  try {
  res.json(await entries.getOne(req.params.id));
  } catch (err) {
    if (err.code === 'ER_BAD_FIELD_ERROR') {
      resolveErrors(res, 'Missing property in request', 400)
    } else if (err.code === 'Not Found') {
      resolveErrors(res, 'Entry with this ID not found', 404)
    } else {
      // Internal Server Error - Status Code 500
      resolveErrors(res, { error: err.message });
    }
  }
});

/* POST - neuer Eintrag */
router.post("/", async function (req, res, next) {
  try {
  res.json(await entries.create(req.body));
  } catch (err) {
    if (err.code === 'ER_BAD_FIELD_ERROR') {
      resolveErrors(res, 'Missing property in request', 400)
    } else if (err.code === 'ER_DUP_ENTRY') {
      //res.status(409).json({ error: 'Entry with this ID already exists' });
      resolveErrors(res, 'Entry with this ID already exist', 409)
    } else {
      // Internal Server Error - Status Code 500
      resolveErrors(res, { error: err.message });
    }
  }
});

/* PUT - besteheden Eintrag bearbeiten */
router.put("/:id", async function (req, res, next) {
  try {
  const updatedEntry = await entries.update(req.params.id, req.body);
  res.json(updatedEntry);
  } catch (err) {
  if (err.code === "ER_BAD_FIELD_ERROR") {
  resolveErrors(res, "Missing property in request", 400);
  } else if (err.code === "ER_DUP_ENTRY") {
  resolveErrors(res, "Entry with this ID already exists", 409);
  } else if (err.code === "Not Found") {
  resolveErrors(res, 'Entry with this id not found', 404);
  } else {
  resolveErrors(res, { error: err.message });
  }
  }
});

/*router.put("/:id", async function (req, res, next) {
  try {
    res.json(await entries.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating programming language`, err.message);
    next(err);
  }
});*/

/* DELETE - Eintrag löschen */
router.delete("/:id", async function (req, res, next) {
  const { id } = req.params;
  try {
    const deletedEntry = await entries.remove(id);
    if (!deletedEntry) {
      const error = new Error(`Entry with id ${id} not found`);
      error.statusCode = 404;
      throw error;
    }
    res.json(deletedEntry);
  } catch (err) {
    console.error(`Error while deleting entry`, err.message);
    next(err);
  }
});



//Sendet den angegebene Fehlermeldung und wenn ang. einen Fehlercode ansonsten 500 - Internal Server error 
function resolveErrors(res, message, code) {
  res.statusCode = code ? code : 500;
  res.send(message);
  res.end();
  return;
}




module.exports = router;
