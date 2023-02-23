import { useState, useEffect } from "react";

function EntryList() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch("/entries")
      .then((response) => response.json())
      .then((data) => setEntries(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Entries</h1>
      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>
            <h2>{entry.title}</h2>
            <p>{entry.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EntryList;