const express = require('express');
// const axios = require('axios');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// API routes
app.use('/api', require('./routes/api-calls'));

const port = 5000;

app.listen(port, () => console.log(`Server started on ${port}`));