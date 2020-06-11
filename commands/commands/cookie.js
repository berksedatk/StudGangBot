const Discord = require("discord.js");

module.exports = {
  name: "cookie",
  category: "Fun",
  description: "Give someone a cookie!",
  usage: "[mention]",
  aliases: ["cookies"],
  cooldown: 5,
  guildOnly: true,
  execute(bot, message, args) {
    
    let number = Number(args[0])
    const cookieEmbed = new Discord.MessageEmbed()
    
    if (number) {
      if (!args[1]) return message.channel.send(":x: | You have to mention someone to give them cookies!");
      if (!message.mentions.users.first()) return message.channel.send(":x: | You have to mention a user to give them a cookie!");
      
      cookieEmbed.setDescription(`**${message.mentions.users.first()}**, ${message.author} gave you ${number} cookies! 🍪 :3`)
      cookieEmbed.setColor('RANDOM')
    } else {
      if (!args[0]) return message.channel.send(":x: | You have to mention someone to give them cookies!");
      if (!message.mentions.users.first()) return message.channel.send(":x: | You have to mention a user to give them a cookie!");
      cookieEmbed.setDescription(`**${message.mentions.users.first()}**, ${message.author} gave you a cookie! 🍪 :3`)
      cookieEmbed.setColor('RANDOM')
    }
     
    message.channel.send(cookieEmbed);
  }
};
