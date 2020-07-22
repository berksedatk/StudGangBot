const Discord = require("discord.js");

module.exports = {
  name: "pp",
  category: "Fun",
  description: "Shows you your pp size.",
  cooldown: 15,
  execute(bot, message, args) {
    let ppsize = Math.floor(Math.random() * 25)
    let pp =  ""
    for (let i = 0; ppsize > i; i++) {
      pp += "="
    }
    message.channel.send({embed: {description: `**${message.author.tag}**'s pp size is 8${pp}D`, color: '#f5ce42'}})
  }
};
