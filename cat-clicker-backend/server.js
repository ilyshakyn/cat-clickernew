const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); // Импортируем path
const telegramBot = require('./telegramBot'); // Импортируем функцию

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Define Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/upgrades', require('./routes/upgradeRoutes'));
app.use('/api/quests', require('./routes/questRoutes'));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

telegramBot(); // Запуск бота
