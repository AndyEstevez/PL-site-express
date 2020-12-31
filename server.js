const express = require('express');
// const axios = require('axios');
const path = require('path');
const app = express();

const cors = require('cors');
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'client/build')));



// API routes
app.use('/api', require('./routes/api-calls'));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });
const port = 10294;

app.listen(port, () => console.log(`Server started on ${port}`));