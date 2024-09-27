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

export const fetchLeagueTable = async (leagueId) => {
  try {
    console.log(`Fetching standings for league ID: ${leagueId}`);
    const response = await fetch(`/api/v4/competitions/${leagueId}/standings`, {
      method: 'GET',
      headers: {
        'X-Auth-Token': API_KEY,
      },
    });

    console.log('Response Status:', response.status);
    
    if (!response.ok) {
      const errorDetails = await response.text(); 
      throw new Error(`Failed to fetch league table: ${errorDetails}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching league info:", error);
    throw error;
  }
};
