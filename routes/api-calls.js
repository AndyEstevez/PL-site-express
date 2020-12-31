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
        .catch(err => res.status(404).send("Failed request " + err));
})

// Get Teams
router.get('/teams', async (req, res) => {
    await axios.get(process.env.TEAMS_URL, 
        {headers: {
            "X-Auth-Token": process.env.FOOTBALL_DATA_APIKEY
        }})
        .then((response) => {
            results = response.data.teams
            res.json(results)
        }) 
        .catch(err => res.status(404).send("Failed request " + err));
})

// Get Matches
router.get('/matches', async (req, res) => {
    await axios.get(process.env.MATCHES_URL,
        {headers: {
            "X-Auth-Token": process.env.FOOTBALL_DATA_APIKEY
        }})
        .then(response => {
            results = response.data.matches
            res.json(results)
        })
        .catch(err => res.status(404).send("Failed request " + err));
})

// Get News 
router.get('/news', async (req, res) => {
    await axios.get(process.env.SEARCH_QUERY_URL)
        .then(response => {
            results = response.data.articles
            res.json(results)
        })
        .catch(error => {
            res.status(404).send("Failed fetch request")
        })
})


module.exports = router;