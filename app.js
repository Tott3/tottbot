const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');

client.on('ready',() => {
  console.log("I'm online");
})

var prefix = "§"

client.on('message', message => {
  if(message.author === client.user) return;
  if(message.content === (prefix + 'ping')){
    message.channel.sendMessage('pong');
  }
});

client.login(settings.token);
