import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './components.css';
import { useNavigate } from 'react-router-dom';

function HouseEntryList() {
    const [entries, setEntries] = useState([]);
    const [selectedEntry, setSelectedEntry] = useState(null);
    const [isInterested, setIsInterested] = useState(false);
    const navigate = useNavigate();

const apiCall = () => {
axios.get('http://localhost:3001/entries').then((data) => {
const filteredEntries = data.data.data.filter(entry => entry.entry_type === 'house');
setEntries(filteredEntries);
})
}
// Aufgabe 3
useEffect(() => {
    apiCall();
      const intervalId = setInterval(() => {
        apiCall();
        }, 5000); // Ruft die Funktion alle 5 Sekunden auf
    return () => clearInterval(intervalId); // Stoppt das Polling, wenn die Komponente unmountet wird
    }, []);


const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/entries/${id}`).then(() => {
    setSelectedEntry(null);
    apiCall();
    });
   }
      
const handleDetailsClick = (entry) => {
    setSelectedEntry(entry);
      }
      
const handleCloseDetails = () => {
    setSelectedEntry(null);
      }
      
const handleInterestClick = () => {
    axios.post(`http://localhost:3001/entries/interest/${selectedEntry.id}`)
    .then(() => {
    setIsInterested(true);
    });
  }

return (
    <header className='App-header'>
        <h1>Häuser</h1>

        <div class='nav-button-zurück'>
        <button onClick={() => navigate('/')}>Alles anzeigen</button> {/* Button um alle Einträge anzuzeigen */}
        <button onClick={() => navigate('/houses')}>Häuser</button> {/* Button zu Häusern */}
        <button onClick={() => navigate('/apartments')}>Wohnungen</button> {/* Button zu Wohnungen */}
        <button onClick={() => navigate('/construction-sides')}>Bauplätze</button> {/* Button zu Wohnungen */}
        </div>

        {entries.length > 0 ?
        <ul >
            {entries.map(entry => (
            <li key={entry.id} className='entry-item'>
              <div className='entry-box'>
              <img src={`http://localhost:3001/entries/image/${entry.id}`} alt={`Entry ${entry.id}`} />
              <div className='entry-title'><h4>{entry.entry_shortHand}</h4></div>
                
                <div className='entry-text'>Customer: {entry.customer}</div>
                <div className='entry-text'>Objekt Typ: {entry.entry_type}</div>
                <div className='entry-text'>Addresse: {entry.entry_address}, {entry.entry_postal} {entry.entry_city} </div>
                <div className='entry-text'>Groesse: {entry.entry_size}</div>
                <div className='entry-text'>Beschreibung: {entry.entry_comment}</div>
                <div className='entry-actions'>
                  
                  <button onClick={() => handleDetailsClick(entry)}>Details</button>
                </div>
                </div>
              
              
            </li>
          ))}
        </ul> :
        <p>Keine Einträge gefunden!</p>
      }

  {selectedEntry && (
        <div className="details-popup">
          <div className="details-content">
            <h2>{selectedEntry.entry_shortHand}</h2>
            <img className="details-image" src={`http://localhost:3001/entries/image/${selectedEntry.id}`} alt={`Entry ${selectedEntry.id}`} />
            <p>Anbieter: {selectedEntry.customer}</p>
            <p>Objekt Typ: {selectedEntry.entry_type}</p>
            <p>Adresse: {selectedEntry.entry_address}, {selectedEntry.entry_postal} {selectedEntry.entry_city} </p>
            <p>Groesse: {selectedEntry.entry_size}</p>
            <p>Beschreibung: {selectedEntry.entry_comment}</p>
            <p>Erstellt von: {selectedEntry.createdBy}</p>
            <p>Interesenten: {selectedEntry.interest_count}</p>
            <button onClick={handleCloseDetails}>Schließen</button>
            <button onClick={() => handleDelete(selectedEntry.id)}>Löschen</button>
            {isInterested ? 
            <button disabled>Interessiert</button> : 
            <button onClick={handleInterestClick}>Interessiert</button>}
          </div>
        </div>
)}
</header>
);
}

export default HouseEntryList;