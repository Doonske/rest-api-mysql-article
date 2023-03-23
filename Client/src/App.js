import './App.css';
import EntryList from "./components/EntryList";
import NewEntry from "./components/NewEntry";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HouseEntryList from './components/Haus';
import CSEntryList from './components/Bauplatz';
import ApartmentEntryList from './components/Wohnung';
import Suche from './components/Suche';


function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<EntryList/>} />
        <Route path="/new-entry" element={<NewEntry/>} />
        <Route path="/houses" element={<HouseEntryList/>} />
        <Route path="/construction-sides" element={<CSEntryList/>} />
        <Route path="/apartments" element={<ApartmentEntryList/>} />
        <Route path="/search" element={<Suche/>} />
       
      </Routes>
    </Router>
  );
}

export default App;
