// import express from 'express';
// import fetch from 'node-fetch';
// import cors from 'cors';

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(cors());

// app.get('/api/v4/competitions/:leagueId/standings', async (req, res) => {
//     const { leagueId } = req.params;
//     const url = `https://api.football-data.org/v4/competitions/${leagueId}/standings`;

//     try {
//         const response = await fetch(url, {
//             method: 'GET',
//             headers: {
//                 'X-Auth-Token': "5d8948f46b674ff7a4d143618e325592",
//             },
//         });

//         if (!response.ok) {
//             return res.status(response.status).send('Error fetching data');
//         }

//         const data = await response.json();
//         res.json(data);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         res.status(500).send('Server Error');
//     }
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: 'https://myfootballapp.onrender.com/',  // Ersetze mit deiner echten Render-Domain
}));

app.get('/api/v4/competitions/:leagueId/standings', async (req, res) => {
    const { leagueId } = req.params;
    const url = `https://api.football-data.org/v4/competitions/${leagueId}/standings`;
    
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-Auth-Token': "5d8948f46b674ff7a4d143618e325592",  // Ersetze mit deinem API-Schlüssel
            },
        });

        if (!response.ok) {
            return res.status(response.status).send('Error fetching data');
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
