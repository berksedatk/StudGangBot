const Discord = require("discord.js");
const config = require('./config.json');

module.exports = {
  name: "pp",
  category: "Fun",
  description: "Shows you your pp size.",
  cooldown: 15,
  execute(bot, message, args) {  
    if (message.author.id === '194666207440273408') return message.channel.send(":x: | This users pp is too big to fit into an embed.");
    let ppsize = Math.floor(Math.random() * 25)
    let pp =  ""
    for (let i = 0; ppsize > i; i++) {
      pp += "="
    }
    message.channel.send({embed: {description: `**${message.author.tag}**'s pp size is 8${pp}D`, color: '#f5ce42'}})
  }
};
