import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './components.css';
import { useNavigate } from 'react-router-dom';

function NewEntry() {
  const navigate = useNavigate();
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState({
    entry_shortHand: '',
    customer: '',
    entry_type: '',
    entry_address: '',
    entry_postal: '',
    entry_city: '',
    entry_size: '',
    entry_comment: '',
    
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

    

  //Schema wie in Aufgabenstellung, falls Werte nicht ausgefüllt werden, dann werden Dummy Werte verwendet
    const data = {
      createdOn: Date.now(),
      createdBy: "Benutzer",
      softwareVersion: "2022-1.3.2",
      customer: newEntry.customer || "Unbekannt",
      entry: {
        type: newEntry.entry_type,
        address: newEntry.entry_address,
        postal: newEntry.entry_postal,
        city: newEntry.entry_city,
        size: newEntry.entry_size,
        comment: newEntry.entry_comment,
        shortHand: newEntry.entry_shortHand 
      }
    };
  //POST der eingetragenen Daten
    axios.post('http://localhost:3001/entries', data).then(() => {
      setNewEntry({
        entry_shortHand: '',
        customer: '',
        entry_type: '',
        entry_address: '',
        entry_postal: '',
        entry_city: '',
        entry_size: '',
        entry_comment: '',
        
      });
      apiCall();
    });
    
    //Nach dem Erstellen zurück zur Übersichtsseite 
    navigate('/');

  };


  //Anzeige des Formulars für die Daten

  return (
    
      <header className='App-header'>
        <h1>Neues Objekt hinzufügen</h1>
        <div class='nav-button-zurück'>
        <button onClick={() => navigate('/')}>Zurück zur Übersicht</button> {/* Button um alle Einträge anzuzeigen */}
        </div>
        <div className='formular'>
        <form onSubmit={handleSubmit}>
          <label>
            Titel*:
            <input type="text" name="entry_shortHand" value={newEntry.entry_shortHand} onChange={handleInputChange} required/> 
          </label>
          <label>
            Customer:
            <input type="text" name="customer" value={newEntry.customer} onChange={handleInputChange} />
          </label>
          <label>
            Art*:
            <select name="entry_type" value={newEntry.entry_type} onChange={handleInputChange}>
            <option value="">Bitte Auswählen</option>
            <option value="house">Haus</option>
            <option value="apartment">Wohnung</option>
            <option value="construction-side">Bauplatz</option>
           </select> 
          </label>
          <label>
            Straße*:
            <input type="text" name="entry_address" value={newEntry.entry_address} onChange={handleInputChange} required/>
          </label>
          <label>
            Postleitzahl*:
            <input type="number" name="entry_postal" value={newEntry.entry_postal} onChange={handleInputChange} required/>
          </label>
          <label>
            Ort*:
            <input type="text" name="entry_city" value={newEntry.entry_city} onChange={handleInputChange} required/>
          </label>
          <label>
            Größe in m²*:
            <input type="number" name="entry_size" value={newEntry.entry_size} onChange={handleInputChange} required/>
          </label>
          <label>
            Beschreibung*:
            <input type="text" name="entry_comment" value={newEntry.entry_comment} onChange={handleInputChange} required/>
          </label>
          <div class='pflichtfelder'>*Pflichtfelder</div>
          <div className='formular_button'>
          <button type="submit">Erstellen</button>
          </div>
        </form>
        
        </div>
        
</header>

);
}

export default NewEntry;