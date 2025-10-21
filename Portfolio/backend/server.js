const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'D1_92994_Avinash',       // your MySQL username
  password: 'manager',       // your MySQL password
  database: 'portfolioDB'
});

db.connect((err) => {
  if(err) throw err;
  console.log('MySQL Connected!');
});

// API endpoint to save message
app.post('/api/messages', (req, res) => {
  const { name, email, message } = req.body;
  const query = 'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)';
  db.query(query, [name, email, message], (err, result) => {
    if(err) return res.status(500).json({ success: false, message: 'Database error' });
    res.status(200).json({ success: true, message: 'Message saved!' });
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
