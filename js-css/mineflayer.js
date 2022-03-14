
const { token, username, password, host, version, help_username } = require('../json/config.json');
const mineflayer = require('mineflayer');
const bot = mineflayer.createBot({username:username,host:host,version:version}); bot.once('login', () => {console.log(`Bot has logged in` + host)});     bot.on('kicked', 'error', console.log);


// Gonna see how well I can write a mineflayer bot on a single client
