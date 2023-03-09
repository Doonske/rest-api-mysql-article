const express = require("express");
const router = express.Router();
const entries = require("../services/entries");
const interestService = require("../services/interest");

// POST-Methode, um einen Interessenten für ein Objekt zu registrieren
router.post('/interests', async function(req, res, next) {
    const { user_id, object_id } = req.body;
  
    // Überprüfen, ob der Benutzer und das Objekt vorhanden sind
    const user = await db.query('SELECT id FROM users WHERE id = ?', [user_id]);
    const object = await db.query('SELECT id, interests FROM objects WHERE id = ?', [object_id]);
    if (!user || !object) {
      const error = new Error('User or object not found');
      error.statusCode = 404;
      throw error;
    }
  
    // Überprüfen, ob der Benutzer bereits als Interessent registriert ist
    const interest = await db.query('SELECT id FROM interests WHERE user_id = ? AND object_id = ?', [user_id, object_id]);
    if (interest) {
      const error = new Error('User already registered as interested in this object');
      error.statusCode = 400;
      throw error;
    }
  
    // Eintrag in der interests-Tabelle erstellen
    await db.query('INSERT INTO interests (user_id, object_id) VALUES (?, ?)', [user_id, object_id]);
  
    // Anzahl der Interessenten in der objects-Tabelle aktualisieren
    const interests = object[0].interests + 1;
    await db.query('UPDATE objects SET interests = ? WHERE id = ?', [interests, object_id]);
  
    res.json({ message: 'User registered as interested in object' });
  });
  
  // GET request to get the number of interests
/*router.get("/entries/:id/interest", async (req, res, next) => {
  try {
    //res.json(await entries.getMultiple(req.query.page));
    //const count = await interestService.getInterestCount(req.params.id);
    res.json(await interestService.getInterestCount(req.params.id));
  } catch (err) {
    next(err);
  }
});*/

router.get("/:id", async function (req, res) {
  try {
  res.json(await interestService.getInterestCount(req.params.id));
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
  
// POST request to add a new interest
router.post("/:id", async function (req, res){
  try {
    res.json(await interestService.addInterest(req.params.id));
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

router.delete("/:id", async function (req, res){
  try {
    res.json(await interestService.removeInterest(req.params.id)
    );
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

  //Sendet den angegebene Fehlermeldung und wenn angeg. einen Fehlercode ansonsten 500 - Internal Server error 
function resolveErrors(res, message, code) {
  res.statusCode = code ? code : 500;
  res.send(message);
  res.end();
  return;
}

  
  module.exports = router;
  

