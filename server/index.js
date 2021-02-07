const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = process.env.port || 5000;


app.listen(port, () => {
    console.log(`server is running on port : ${port}`);
})