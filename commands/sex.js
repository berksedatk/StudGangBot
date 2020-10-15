const Discord = require("discord.js");

module.exports = {
  name: "sex",
  category: "Fun",
  description: "seggcy time",
  cooldown: 5,
  dev: true,
  execute(bot, message, args) {
    message.channel.send(`considered yourself sex'd`)
   message.delete().catch(O_o=>{}); 
  }
};
