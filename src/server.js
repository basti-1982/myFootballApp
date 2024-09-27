import { API_KEY } from './config';


const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/api/v4/competitions/:leagueId/standings', async (req, res) => {
    const { leagueId } = req.params;
    const url = `https://api.football-data.org/v4/competitions/${leagueId}/standings`;
    
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-Auth-Token': API_KEY, // Füge deinen API-Schlüssel hier hinzu
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
