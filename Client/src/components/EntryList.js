import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './components.css';

function EntryList() {

const [entries, setEntries] = useState([]);

const apiCall = () => {
axios.get('http://localhost:3001/entries').then((data) => {
  setEntries(data.data.data);
})
}

useEffect(() => {
apiCall();
}, []);

return (
  <div className='App'>
    <header className='App-header'>
      <h1>All Entries</h1>
      {entries.length > 0 ?
        <ul className='entry-list'>

          {entries.map(entry => (
            <li key={entry.id} className='entry-item'>
              <div className='entry-box'>
                <p className='entry-text'>Created On: {entry.createdOn}</p>
                <p className='entry-text'>Created By: {entry.createdBy}</p>
                <p className='entry-text'>Software Version: {entry.softwareVersion}</p>
                <p className='entry-text'>Customer: {entry.customer}</p>
                <p className='entry-text'>Entry Type: {entry.entry_type}</p>
                <p className='entry-text'>Address: {entry.entry_address}</p>
                <p className='entry-text'>Size: {entry.entry_size}</p>
                <p className='entry-text'>Comment: {entry.entry_comment}</p>
                <p className='entry-text'>Short Hand: {entry.entry_shortHand}</p>

              </div>
            </li>
          ))}
        </ul> :
        <p>Loading...</p>
      }
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



