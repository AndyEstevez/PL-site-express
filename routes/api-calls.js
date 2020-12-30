const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

var results;

// Get Standings
router.get('/standings', async (req, res) => {
    await axios.get("https://api.football-data.org/v2/competitions/PL/standings?standingType=TOTAL", 
        {headers: {
            "X-Auth-Token": process.env.FOOTBALL_DATA_APIKEY
            }
        }
    )
        .then((response) => {
            results = response.data.standings[0].table
            res.json(results)
        }) 
        .catch(err => res.status(404).send("Failed request" + err));
})

router.get('/teams', async (req, res) => {
    await axios.get(process.env.TEAMS_URL, 
        {headers: {
            "X-Auth-Token": process.env.FOOTBALL_DATA_APIKEY
            }
        }
    )
        .then((response) => {
            results = response.data.teams
            res.json(results)
        }) 
        .catch(err => res.status(404).send("Failed request" + err));
})


module.exports = router;