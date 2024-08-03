const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');

// Здесь нужно вставить ваш токен
const token = '7134326088:AAFLaA9o8Hmouvch_Ob6bmJklEd4HCHJC-4';

const bot = new TelegramBot(token, { polling: true });

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
  const appUrl = 'https://www.youtube.com/watch?v=_S7WEVLbQ-Y'; // Замените на ваш URL

  console.log('/app command received');
  bot.sendMessage(chatId, ` перейдите в это веб приложение: ${appUrl}`);
});

module.exports = () => {
  console.log('Telegram bot is running...');
};
