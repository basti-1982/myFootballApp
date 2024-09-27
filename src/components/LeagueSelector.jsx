export default function LeagueSelector({ onSelect }) {
  const leagues = [
    { id: 2002, name: 'Bundesliga' }, // ID für die Bundesliga
    { id: 2021, name: 'Premier League' }, // ID für die Premier League
    { id: 2015, name: 'Ligue 1'}, // ID für die Französische Liga
    { id: 2014, name: 'Primera Division'}, // ID für die spanische Liga
    { id: 2019, name: 'Serie A'}, // ID für die Italienische Liga
  ];

  return (
    <div>
      <h1>Select a League</h1>
      <select onChange={(e) => onSelect(e.target.value)}>
        <option value="">--Select a League--</option>
        {leagues.map((league) => (
          <option key={league.id} value={league.id}>
            {league.name}
          </option>
        ))}
      </select>
    </div>
  );
}

