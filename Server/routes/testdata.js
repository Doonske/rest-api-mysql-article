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

router.post('/', async (req, res) => {
    const testEntries = [
    {
        createdOn: Date.now(),
        createdBy: "Benutzer",
        softwareVersion: "2022-1.3.2",
        customer: "Customer 1",
        entry: {
            type: 'apartment',
            address: 'Musterstraße 1',
            postal: '12345',
            city: 'Musterstadt',
            size: 45,
            comment: 'Schöne Wohnung in guter Lage',
            shortHand: 'Musterstraße 1, 45qm'
            },
        image_path: 'public/images/wall-gb7deaed0d_640.jpg'
      },
      {
        createdOn: Date.now(),
        createdBy: "Benutzer",
        softwareVersion: "2022-1.3.2",
        customer: "Customer 1",
        entry: {
            type: 'house',
            address: 'Hauptstraße 2',
            postal: '67890',
            city: 'Musterdorf',
            size: 120,
            comment: 'Großes Haus mit Garten',
            shortHand: 'Hauptstraße 2, 120qm'
            },
        image_path: 'public/images/wall-gb7deaed0d_640.jpg'
      },
      {
        createdOn: Date.now(),
        createdBy: "Benutzer",
        softwareVersion: "2022-1.3.2",
        customer: "Customer 1",
        entry: {
            type: 'construction-site',
            address: 'Baustelle 3',
            postal: '99999',
            city: 'Musterstadt',
            size: 250,
            comment: 'Großes Bauprojekt',
            shortHand: 'Baustelle 3'
            },
        image_path: 'public/images/wall-gb7deaed0d_640.jpg'
    }
    ];
  
    try {
      for (const entry of testEntries) {
        const query = 'INSERT INTO entries (createdOn, createdBy, softwareVersion, customer, entry_type, entry_address, entry_postal, entry_city, entry_size, entry_comment, entry_shortHand, image_path) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        db.query(query, [
        entry.createdOn,
        entry.createdBy,
        entry.softwareVersion,
        entry.customer,
        entry.entry.type,
        entry.entry.address,
        entry.entry.postal,
        entry.entry.city,
        entry.entry.size,
        entry.entry.comment,
        entry.entry.shortHand,
        entry.image_path
        ]);
      }
      res.send('Test data created successfully');
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  });
  
module.exports = router;