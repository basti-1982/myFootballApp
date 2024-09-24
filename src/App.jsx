import { useState } from 'react';
import LeagueTable from './components/LeagueTable';
import Header from './components/Header';
import './App.css';

function App() {
  const [selectedLeague, setSelectedLeague] = useState(null);

  const leagues = [
    { id: 2002, name: 'Bundesliga' },
    { id: 2021, name: 'Premier League' },
    { id: 2015, name: 'Ligue 1' },
    { id: 2014, name: 'La Liga' },
    { id: 2019, name: 'Serie A' },
  ];

  return (
    <div className="App">
      {/* Header mit dynamischer Liganame-Anzeige */}
      <Header selectedLeagueName={selectedLeague?.name} />

      {!selectedLeague ? (
        <div className="league-selector">
          <h2>Select a League</h2>
          <div className="league-buttons">
            {leagues.map((league) => (
              <button
                key={league.id}
                onClick={() => setSelectedLeague(league)}
                className="league-button"
              >
                {league.name}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <button className="back-button" onClick={() => setSelectedLeague(null)}>
            Back to League Selection
          </button>
          <h2>{selectedLeague.name} Table</h2>
          <LeagueTable leagueId={selectedLeague.id} />
        </div>
      )}
    </div>
  );
}

export default App;
