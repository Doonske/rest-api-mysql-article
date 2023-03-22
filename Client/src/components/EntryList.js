import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './components.css';
import { useNavigate } from 'react-router-dom';

function EntryList() {

const [entries, setEntries] = useState([]);
const navigate = useNavigate();

const apiCall = () => {
axios.get('http://localhost:3001/entries').then((data) => {
  setEntries(data.data.data);
})
}

useEffect(() => {
apiCall();
}, []);

const handleDelete = (id) => {
  axios.delete(`http://localhost:3001/entries/${id}`).then(() => {
    apiCall();
  });
}

return (
  
    <header className='App-header'>
      <h1>Übersicht</h1>

      <div class='nav-button-zurück'>
        <button onClick={() => navigate('/')}>Alles anzeigen</button> {/* Button um alle Einträge anzuzeigen */}
        <button onClick={() => navigate('/houses')}>Häuser</button> {/* Button zu Häusern */}
        <button onClick={() => navigate('/apartments')}>Wohnungen</button> {/* Button zu Wohnungen */}
        <button onClick={() => navigate('/construction-sides')}>Bauplätze</button> {/* Button zu Wohnungen */}
      </div>
      
      <div class='new-entry-button'>
      <button onClick={() => navigate('/new-entry')}>Neues Objekt anlegen</button> {/* Button um alle Einträge anzuzeigen */}
      </div>

      {entries.length > 0 ?
        <ul >
         
          {entries.map(entry => (
            <li key={entry.id} className='entry-item'>
              <div className='entry-box'>
              <img src={`http://localhost:3001/entries/image/${entry.id}`} alt={`Entry ${entry.id}`} />
              <div className='entry-title'><h4>{entry.entry_shortHand}</h4></div>
                
                <div className='entry-text'>Customer: {entry.customer}</div>
                <div className='entry-text'>Entry Type: {entry.entry_type}</div>
                <div className='entry-text'>Addresse: {entry.entry_address}, {entry.entry_postal} {entry.entry_city} </div>
                <div className='entry-text'>Groesse: {entry.entry_size}</div>
                <div className='entry-text'>Comment: {entry.entry_comment}</div>
                <div className='entry-text'>Interesenten: {entry.interest_count}</div>
                <div className='entry-actions'>
                  <button onClick={() => handleDelete(entry.id)}>Delete</button>
                  <button>Edit</button>
                </div>
              </div>
              
            </li>
          ))}
        </ul> :
        <p>Loading...</p>
      }
    </header>
  
);

}

export default EntryList;




