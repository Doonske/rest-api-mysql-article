const express = require("express");
const router = express.Router();
const images = require("../services/image");
// POST-Methode zum Hochladen eines Bildes für ein Objekt

const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}.${file.originalname.split('.').pop()}`)
  }
});
const upload = multer({ storage: storage });

router.post("/:id/upload-image", upload.single('image'), async function (req, res){
  try {
    // Hier kann der Pfad zum Bild in der Datenbank gespeichert werden
    const imagePath = `uploads/${req.file.filename}`;
    // ...
    res.json({ success: true });
  } catch (err) {
    // ...
  }
});

module.exports = router;

