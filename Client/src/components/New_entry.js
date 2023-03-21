import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './components.css';

function New_entry() {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState({
    entry_shortHand: '',
    customer: '',
    entry_type: '',
    entry_address: '',
    entry_size: '',
    entry_comment: '',
    interest_count: 0
  });

  const apiCall = () => {
    axios.get('http://localhost:3001/entries').then((data) => {
      setEntries(data.data.data);
    })
  }

  useEffect(() => {
    apiCall();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewEntry({ ...newEntry, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/entries', newEntry).then(() => {
      setNewEntry({
        entry_shortHand: '',
        customer: '',
        entry_type: '',
        entry_address: '',
        entry_size: '',
        entry_comment: '',
        interest_count: 0
      });
      apiCall();
    });
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>All Entries</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Entry Short Hand:
            <input type="text" name="entry_shortHand" value={newEntry.entry_shortHand} onChange={handleInputChange} />
          </label>
          <label>
            Customer:
            <input type="text" name="customer" value={newEntry.customer} onChange={handleInputChange} />
          </label>
          <label>
            Entry Type:
            <input type="text" name="entry_type" value={newEntry.entry_type} onChange={handleInputChange} />
          </label>
          <label>
            Entry Address:
            <input type="text" name="entry_address" value={newEntry.entry_address} onChange={handleInputChange} />
          </label>
          <label>
            Entry Size:
            <input type="text" name="entry_size" value={newEntry.entry_size} onChange={handleInputChange} />
          </label>
          <label>
            Entry Comment:
            <input type="text" name="entry_comment" value={newEntry.entry_comment} onChange={handleInputChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
        
</header>
</div>
);
}

export default New_entry;