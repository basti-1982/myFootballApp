import React, { useState } from 'react';
import LeagueSelector from './components/LeagueSelector';
import LeagueTable from './components/LeagueTable';
import './App.css';

function App() {
  const [selectedLeague, setSelectedLeague] = useState('');

  return (
    <div className="App">
      <h1>Football League Tables</h1>
      <LeagueSelector onSelect={setSelectedLeague} />
      <LeagueTable leagueId={selectedLeague} />
    </div>
  );
}

export default App;
