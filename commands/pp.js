const Discord = require("discord.js");
const config = require('./config.json');

module.exports = {
  name: "pp",
  category: "Fun",
  description: "Shows you your pp size.",
  cooldown: 15,
  execute(bot, message, args) {
  if (config.owners.includes(message.author.id)) {
    return message.reply(":x: | Thsi users pp is so big that I cannot fit it into an embed.").then(m => m.delete({timeout: 15000}))
  }    
    let ppsize = Math.floor(Math.random() * 25)
    let pp =  ""
    for (let i = 0; ppsize > i; i++) {
      pp += "="
    }
    message.channel.send({embed: {description: `**${message.author.tag}**'s pp size is 8${pp}D`, color: '#f5ce42'}})
  }
};
