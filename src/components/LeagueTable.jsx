import { useEffect, useState } from "react";
import { fetchLeagueTable } from "../api";

export default function LeagueTable({ leagueId }) {
  const [table, setTable] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!leagueId) return;

    const fetchTable = async () => {
      setLoading(true);
      try {
        const data = await fetchLeagueTable(leagueId);
        if (data.standings && data.standings.length > 0) {
          setTable(data.standings[0].table);
        }
      } catch (error) {
        console.error("Error fetching table data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTable();
  }, [leagueId]);

  if (!leagueId) return <p>Please select a league.</p>;

  if (loading) return <p>Loading...</p>;

  if (!table.length) return <p>No data available for this league.</p>;

  return (
    <div className="table-container">
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Position</th>
              <th>Team</th>
              <th>Points</th>
              <th>Goals</th> {/* Eine Spalte für Tore */}
              <th>Goal Diff.</th>
            </tr>
          </thead>
          <tbody>
            {table.map((team) => (
              <tr key={team.team.id}>
                <td>{team.position}</td>
                <td style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    src={team.team.crest}
                    alt={team.team.name}
                    style={{
                      width: "30px",
                      height: "30px",
                      marginRight: "10px",
                    }}
                  />
                  <span>{team.team.name}</span>
                </td>
                <td>{team.points}</td>
                <td>
                  {team.goalsFor}:{team.goalsAgainst} 
                </td>
                <td>{team.goalDifference}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
