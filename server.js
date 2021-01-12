// Entry point of backend
require('dotenv').config();
const express = require('express');
const connectDB = require('./db');
// Default NodeJs path module that helps with file path
const path = require('path');

const app = express();

// Connect Database
connectDB();

// Initialize Middleware for accepting incoming req.body
app.use(express.json({ extended: false }));

// app.get('/', (req, res) =>
//   res.json({ msg: 'Welcome to the ContactsKeeper API' })
// );

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

// Serve static assets in production === Serve react files in production
// process.env.NODE_ENV set automatically by the deployment host (Heroku)
if (process.env.NODE_ENV === 'production') {
  // Set static folder === load client build folder
  app.use(express.static('client/build'));

  // This app.get('*') has be to below custom defined routes ex) below line 21-23 in this file
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
