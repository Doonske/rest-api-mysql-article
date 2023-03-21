import './App.css';
import EntryList from "./components/EntryList";
import New_entry from "./components/New_entry";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<EntryList/>} />
        <Route path="/new_entry" element={<New_entry/>} />
       
      </Routes>
    </Router>
  );
}

export default App;
