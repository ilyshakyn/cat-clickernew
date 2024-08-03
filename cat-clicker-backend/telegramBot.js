const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');
const path = require('path');

// Здесь нужно вставить ваш токен
const token = 'YOUR_TELEGRAM_BOT_TOKEN';

const app = express();
const bot = new TelegramBot(token, { polling: true });

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'frontend/build')));

bot.onText(/\/start/, (msg) => {
  console.log('/start command received');
  bot.sendMessage(msg.chat.id, "Welcome to Cat Tap Clicker!");
});

bot.onText(/\/register (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const username = match[1];

  console.log(`/register command received for username: ${username}`);

  try {
    const response = await axios.post('http://localhost:5000/api/users', { username });
    console.log('User created:', response.data);
    bot.sendMessage(chatId, `User ${username} registered successfully!`);
  } catch (error) {
    console.error('Failed to register user:', error);
    bot.sendMessage(chatId, `Failed to register user: ${error.message}`);
  }
});

bot.onText(/\/user (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const username = match[1];

  console.log(`/user command received for username: ${username}`);

  try {
    const response = await axios.get(`http://localhost:5000/api/users?username=${username}`);
    console.log('User found:', response.data);
    bot.sendMessage(chatId, `User ${username}: ${JSON.stringify(response.data)}`);
  } catch (error) {
    console.error('Failed to get user:', error);
    bot.sendMessage(chatId, `Failed to get user: ${error.message}`);
  }
});

// Обработчик команды /app
bot.onText(/\/app/, (msg) => {
  const chatId = msg.chat.id;
  const appUrl = 'https://cat-clickernew-jmaq.vercel.app/'; // Замените на ваш URL

  console.log('/app command received');
  bot.sendMessage(chatId, ` перейдите в это веб приложение: ${appUrl}`);
});

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log('Telegram bot is running...');
});
