import { API_KEY } from './config';

export const fetchLeagueTable = async (leagueId) => {
  try {
    const response = await fetch(`https://api.football-data.org/v4/competitions/${leagueId}/standings`, {
      method: 'GET',
      headers: {
        'X-Auth-Token': API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch league table');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching league info:", error);
    throw error;
  }
};
