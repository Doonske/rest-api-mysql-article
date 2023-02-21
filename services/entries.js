const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, createdOn, createdBy, softwareVersion, customer, entry_type, address, size, comment, shortHand
    FROM entries LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function create(entries) {
  message = 'Entry created successfully';
  const query = 'INSERT INTO entries (createdOn, createdBy, softwareVersion, customer, entry_type, address, size, comment, shortHand) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [
    entries.createdOn,
    entries.createdBy,
    entries.softwareVersion,
    entries.customer,
    entries.entry.type,
    entries.entry.address,
    entries.entry.size,
    entries.entry.comment,
    entries.entry.shortHand
  ], (err, result) => {
    if (err) {
      console.log("Err: ".err);
      message = 'Error creating entry';
    }});
  return { message };
}

async function update(id, entries) {
    message = 'Entry updated successfully';
    const query = 'UPDATE entries SET createdOn=?, createdBy=?, softwareVersion=?, customer=?, entry_type=?, address=?, size=?, comment=?, shortHand=? WHERE id=?';
    db.query(query, [
      entries.createdOn,
      entries.createdBy,
      entries.softwareVersion,
      entries.customer,
      entries.entry.type,
      entries.entry.address,
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
  const result = await db.query(
    `DELETE FROM entries WHERE id=${id}`
  );

  let message = "Error in deleting entry";

  if (result.affectedRows) {
    message = "entry deleted successfully";
  }

  return { message };
}

module.exports = {
  getMultiple,
  create,
  update,
  remove,
};
