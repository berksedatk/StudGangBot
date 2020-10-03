\const Discord = require("discord.js");

module.exports = {
  name: "water-mind",
  category: "Fun",
  description: "Remind someone to drink water today!",
  aliases: "water","remind",
  usage: "[mention]",
  cooldown: 5,
  guildOnly: true,
  execute(bot, message, args) {    
 const author = message.author;
    const reciever = message.mentions.users.first();
    if (!reciever) return message.channel.send(":x: | You need to tag someone to give them a reminder to drink water!");
    const watermbed = new Discord.MessageEmbed()
    .setDescription(`**${reciever}**, please remember to drink water today if you haven't done so already!`)
    .setColor('BLUE')
    message.channel.send(waterEmbed)
  }
};
