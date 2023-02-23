import React, { useState, useEffect } from 'react';

function EntryList() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch('/entries')
      .then(res => res.json())
      .then(data => setEntries(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Entries</h2>
      <ul>
        {entries.map(entry => (
          <li key={entry.id}>
            <p>Created on: {entry.createdOn}</p>
            <p>Created by: {entry.createdBy}</p>
            <p>Software version: {entry.softwareVersion}</p>
            <p>Customer: {entry.customer}</p>
            <p>Entry type: {entry.entry_type}</p>
            <p>Address: {entry.address}</p>
            <p>Size: {entry.size}</p>
            <p>Comment: {entry.comment}</p>
            <p>Short hand: {entry.shortHand}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EntryList;