const Discord = require("discord.js");

module.exports = {
  name: "femrate",
  category: "Fun",
  description: "Check how much of a femboy you are or someone is!",
  aliases: ["fbrate","femboy","femboyrate"],
  usage: "[mention]",
  cooldown: 5,
  guildOnly: true,
  execute(bot, message, args) {
  
    const reciever = message.mentions.users.first();
    if (!reciever) return message.channel.send(":x: | You need to ping someone to check how much of a femboy they are!");
    
let randomnumber = Math.floor(Math.random() * 100).toLocaleString()
    message.channel.send(`**${message.mentions.users.first()}** is **${randomnumber}%** femboy!`); 
  }
};
