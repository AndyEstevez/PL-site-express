const express = require('express');
// const axios = require('axios');
const app = express();

const cors = require('cors')
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended: false}));



// API routes
app.use('/api', require('./routes/api-calls'));
// app.use(express.static(path.join(__dirname, 'client/build')));

const port = 5000;

app.listen(port, () => console.log(`Server started on ${port}`));