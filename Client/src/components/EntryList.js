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
        <ul >

          {entries.map(entry => (
            <li key={entry.id} className='entry-item'>
              <div className='entry-box'>
              <img className='entry-image' src={`http://localhost:3001/entries/image/${entry.id}`} alt={`Entry ${entry.id}`} />
              <h2 className='entry-title'>{entry.entry_shortHand}</h2>
                
                <p className='entry-text'>Customer: {entry.customer}</p>
                <p className='entry-text'>Entry Type: {entry.entry_type}</p>
                <p className='entry-text'>Addresse: {entry.entry_address}</p>
                <p className='entry-text'>Groesse: {entry.entry_size}</p>
                <p className='entry-text'>Comment: {entry.entry_comment}</p>
                <p className='entry-text'>Interesenten: {entry.interest_count}</p>

              </div>
            </li>
          ))}
        </ul> :
        <p>Loading...</p>
      }
    </header>
  </div>
);

}

export default EntryList;




