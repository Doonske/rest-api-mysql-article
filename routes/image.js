const express = require("express");
const router = express.Router();
const images = require("../services/image");
const path = require('path');
const fs = require('fs');
const config = require("../config");
const db = require("../services/db")

const multer = require('multer');

// Beispiel-Pfad zum öffentlichen Ordner, in dem das Bild gespeichert ist
const publicDir = path.join(__dirname, '..', '');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

const logger = (req, res, next) => {
  console.log(`Received Request ${new Date(Date.now()).toLocaleString('de-DE')}`);
  console.log('HTTP METHOD', req.method);
  console.log('HTTP BODY', req.body);
  console.log('URL PARAMETER', req.params);
  next();
}
router.use(logger);

router.post('/:id', upload.single('image'), async (req, res) => {
  const id = req.params.id;
  const imagePath = req.file.path;
  const result = await db.query('UPDATE entries SET image_path = ? WHERE id = ?', [imagePath, id]);

  if (result.affectedRows) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

/*router.get("/:id", (req, res) => {
  const imageId = req.params.id;
  const imagePath = path.join(publicDir, `${imageId}.jpg`); // Annahme, dass das Bild im JPEG-Format ist

  // Überprüfen, ob die Datei existiert
  fs.access(imagePath, fs.F_OK, (err) => {
    if (err) {
      console.error(err);
      res.status(404).send('File not found');
      return;
    }

    // Bild wird als Antwort gesendetr
    res.sendFile(imagePath);
  });
});*/

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const result = await db.query('SELECT image_path FROM entries WHERE id = ?', [id]);
  
  if (result.length) {
  const imagePath = result[0].image_path;
  const absolutePath = path.join(publicDir, imagePath);
  
  // Überprüfen, ob die Datei existiert
  fs.access(absolutePath, fs.F_OK, (err) => {
    if (err) {
      console.error(err);
      res.status(404).send('File not found');
      return;
    }
  
    // Bild wird als Antwort gesendet
    res.sendFile(absolutePath);
  });
  
  } else {
  res.status(404).send('Entry not found');
  }
  });
module.exports = router;
