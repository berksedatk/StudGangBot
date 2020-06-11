const Discord = require("discord.js");

module.exports = {
  name: "sec",
  category: "Fun",
  description: "sexcy time",
  dev: "true",
  cooldown: 5,
  unstaged: true,
  guildOnly: true,
  TTS: true,
  execute(bot, message, args) {
    message.channel.send(`sex`)
   message.delete().catch(O_o=>{}); 
  }
};