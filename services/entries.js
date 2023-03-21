const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, createdOn, createdBy, softwareVersion, customer, entry_type, entry_address, entry_postal, entry_city, entry_size, entry_comment, entry_shortHand, interest_count
    FROM entries LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function getOne(id) {
  const row = await db.query(
    "SELECT id, createdOn, createdBy, softwareVersion, customer, entry_type, entry_address, entry_postal, entry_city, entry_size, entry_comment, entry_shortHand, interest_count FROM entries WHERE id = ?", [id]
  );
  const data = helper.emptyOrRows(row);

  if (data.length === 0) {
    const error = new Error(`Entry with id ${id} not found`);
    error.code = 'Not Found'
    throw error;
  }

  return data[0];
}

async function create(entries) {
  // Überprüfung der Anfrage
  const requiredFields = ['createdOn', 'createdBy', 'softwareVersion', 'customer', 'entry'];
  for (const field of requiredFields) {
    if (!entries[field]) {
      let error = new Error(`Missing required field: ${field}`)
      error.code = 'ER_BAD_FIELD_ERROR'
      throw error;
    }
  }
  const { entry } = entries;
  const requiredEntryFields = ['type', 'address', 'postal', 'city', 'size', 'comment', 'shortHand'];
  for (const field of requiredEntryFields) {
    if (!entry[field]) {
      let error = new Error(`Missing required field: ${field}`)
      error.code = 'ER_BAD_FIELD_ERROR'
      throw error;
    }
  }
  message = 'Entry created successfully';
  //SQL Prepared Statement - verhindert SQL Injections
  const query = 'INSERT INTO entries (createdOn, createdBy, softwareVersion, customer, entry_type, entry_address, entry_postal, entry_city, entry_size, entry_comment, entry_shortHand) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [
    entries.createdOn,
    entries.createdBy,
    entries.softwareVersion,
    entries.customer,
    entries.entry.type,
    entries.entry.address,
    entries.entry.postal,
    entries.entry.city,
    entries.entry.size,
    entries.entry.comment,
    entries.entry.shortHand
  ], (err, result) => {
    if (err) {
      message = 'Error creating entry:'.err;
    }});
  return { message };
}

async function update(id, entries) {
// Check if entry exists
const entryExists = await getOne(id);
// Check if required fields are present
const requiredFields = ['createdOn', 'createdBy', 'softwareVersion', 'customer', 'entry'];
for (const field of requiredFields) {
if (!entries[field]) {
const error = new Error('Missing required field: ${field}');
error.code = 'ER_BAD_FIELD_ERROR';
throw error;
}
}
// Check if required entry fields are present
const { entry } = entries;
const requiredEntryFields = ['type', 'address', 'postal', 'city', 'size', 'comment', 'shortHand'];
for (const field of requiredEntryFields) {
if (!entry[field]) {
const error = new Error('Missing required field: ${field}');
error.code = 'ER_BAD_FIELD_ERROR';
throw error;
}
}
    message = 'Entry updated successfully';
    const query = 'UPDATE entries SET createdOn=?, createdBy=?, softwareVersion=?, customer=?, entry_type=?, entry_address=?, entry_postal=?, entry_city=?, entry_size=?, entry_comment=?, entry_shortHand=? WHERE id=?';
    db.query(query, [
      entries.createdOn,
      entries.createdBy,
      entries.softwareVersion,
      entries.customer,
      entries.entry.type,
      entries.entry.address,
      entries.entry.postal,
      entries.entry.city,
      entries.entry.size,
      entries.entry.comment,
      entries.entry.shortHand,
      id
    ], (err, result) => {
    if (err) {
    console.log("Err: ".err);
    message = 'Error updating entry';
    }
    });
    return { message };
}

async function remove(id) {
  const row = await db.query(
    `DELETE FROM entries WHERE id = ?`, [id]
  );
  return row.affectedRows ? id : null;
}

module.exports = {
  getMultiple,
  getOne,
  create,
  update,
  remove,
};
