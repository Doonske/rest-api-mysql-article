const express = require("express");
const router = express.Router();
const interestService = require("../services/interest");

const logger = (req, res, next) => {
  console.log(`Received Request ${new Date(Date.now()).toLocaleString('de-DE')}`);
  console.log('HTTP METHOD', req.method);
  console.log('HTTP BODY', req.body);
  console.log('URL PARAMETER', req.params);
  next();
}
router.use(logger);

// Anforderung: Für ein einzelnes Objekt können Sie sich nur die Anzahl der Interessenten ausgeben
router.get("/:id", async function (req, res) {
  try {
  res.json(await interestService.getInterestById(req.params.id));
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
  
// POST-Methode, um einen Interessenten für ein Objekt zu registrieren
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

  //Sendet die angegebene Fehlermeldung und wenn angegeben einen Fehlercode, ansonsten 500 - Internal Server error 
function resolveErrors(res, message, code) {
  res.statusCode = code ? code : 500;
  res.send(message);
  res.end();
  return;
}

  
  module.exports = router;
  

