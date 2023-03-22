import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './components.css';

function NewEntry() {
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
    
      <header className='App-header'>
        <h1>Neues Objekt hinzufügen</h1>
        <div className='formular'>
        <form onSubmit={handleSubmit}>
          <label>
            Titel:
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
            Adresse:
            <input type="text" name="entry_address" value={newEntry.entry_address} onChange={handleInputChange} />
          </label>
          <label>
            Größe in m²:
            <input type="text" name="entry_size" value={newEntry.entry_size} onChange={handleInputChange} />
          </label>
          <label>
            Entry Comment:
            <input type="text" name="entry_comment" value={newEntry.entry_comment} onChange={handleInputChange} />
          </label>
          <div className='formular_button'>
          <button type="submit">Erstellen</button>
          </div>
        </form>
        </div>
        
</header>

);
}

export default NewEntry;