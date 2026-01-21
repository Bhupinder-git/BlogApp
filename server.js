// Importing 
const express = require('express');
require('dotenv').config();
const connectWithRetry = require('./config/database');
const routes = require('./routes/routes');

// Initializing the app
const app = express();
const Port = process.env.PORT || 4000;

// Middleware to parse JSON body
app.use(express.json());

// DB Connection
connectWithRetry();

// Mounting the routes
app.use('/api/v1',routes);

// Starting the server
app.listen(Port, () => console.log(`Server Started Successfully at http://127.0.0.1:${Port}`));

// Default route
app.get('/', (req,res) => {
    res.send("<h1>Hello Jee Kaise Ho Saare! </h1>");
});