const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const { jokeRouter } = require('./routes/jokeRoutes');
const { dbConnection } = require('./configs/db');

// Middleware
app.use(express.json());
app.use(cors());

// Home route
app.get('/', (req, res) => {
  res.status(200).send(`<h1 style="color:blue;text-align:center">Welcome to Joke Generator Backend</h1>`);
});

// API routes
app.use('/api', jokeRouter);

// Start server
app.listen(port, async () => {
  try {
    console.log(`Server is running on PORT: ${port}`);
    await dbConnection;
    console.log(`Connected to Database`);
  } catch (error) {
    console.log(`Error in server: ${error.message}`);
  }
});

