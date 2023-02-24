import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EntryList() {

  const apiCall = () => {
    axios.get('http://localhost:3000/entries').then((data) => {
      console.log(data);
    })
  }

  return (
    <div className='App'>
    <header onLoad={apiCall} className='App-header'>

    <p>All Entries</p>
    <button onClick={apiCall}>Get data</button>
      
      </header>
    </div>
    );

  /*const [entries, setEntries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('/entries');
      setEntries(response.data.data);
    }
    fetchData();
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
  );*/
}

export default EntryList;



