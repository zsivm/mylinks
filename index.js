const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// enabling to get your localhost from external place - code pen to fetch my localhost
const cors = require('cors');
require('dotenv/config');

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// import routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

const myLinkRoute = require('./routes/myLinks');
app.use('/myLinks', myLinkRoute);

// ROUTES
app.get('/', (req, res) => {
    res.send("Welcome to MyLinks");
});

// connect to db
mongoose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true }, 
    () => { 
        console.log("Connected to db");
    }
);

mongoose.set('useUnifiedTopology', true);

// LISTEN TO SERVER
app.listen(3000);