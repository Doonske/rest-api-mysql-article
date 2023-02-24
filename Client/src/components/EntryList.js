import React, { useState, useEffect } from 'react';

function EntryList() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    // Fetch entries from backend endpoint
    fetch('/entries')
      .then(response => response.json())
      .then(data => setEntries(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>All Entries</h1>
      <ul>
        {entries.map(entry => (
          <li key={entry.id}>
            <p>Created On: {entry.createdOn}</p>
            <p>Created By: {entry.createdBy}</p>
            <p>Software Version: {entry.softwareVersion}</p>
            <p>Customer: {entry.customer}</p>
            <p>Entry Type: {entry.entry_type}</p>
            <p>Address: {entry.address}</p>
            <p>Size: {entry.size}</p>
            <p>Comment: {entry.comment}</p>
            <p>Short Hand: {entry.shortHand}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EntryList;


