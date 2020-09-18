  
const Discord = require("discord.js");

module.exports = {
  name: "lion",
  category: "Fun",
  description: "Lion's Custom Command",
  cooldown: 5,
  guildOnly: true,
  execute(bot, message, args) {
    message.channel.send("Lion is a old ass boomer ex-mod but is pretty nice and has good memes.")
   message.delete().catch(O_o=>{}); 
  }
};
