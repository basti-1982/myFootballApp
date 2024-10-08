import { API_KEY } from './config';

// export const fetchLeagueTable = async (leagueId) => {
//   try {
//     const response = await fetch(`/api/v4/competitions/${leagueId}/standings`, {
//       method: 'GET',
//       headers: {
//         'X-Auth-Token': API_KEY,
//       },
//     });

//     if (!response.ok) {
//       throw new Error('Failed to fetch league table');
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching league info:", error);
//     throw error;
//   }
// };

// export const fetchLeagueTable = async (leagueId) => {
//   const url = `https://api.football-data.org/v4/competitions/${leagueId}/standings`;
//   console.log(`Fetching standings from: ${url}`);
  
//   try {
//     const response = await fetch(url, {
//       method: 'GET',
//       headers: {
//         'X-Auth-Token': API_KEY,
//       },
//     });

//     if (!response.ok) {
//       console.error(`Response Status: ${response.status} ${response.statusText}`);
//       throw new Error('Failed to fetch league table');
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching league info:", error);
//     throw error;
//   }
// };

export const fetchLeagueTable = async (leagueId) => {
  try {
    const response = await fetch(`http://localhost:3000/api/v4/competitions/${leagueId}/standings`, {
      method: 'GET',
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
