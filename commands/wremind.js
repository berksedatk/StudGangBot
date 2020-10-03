const Discord = require("discord.js");

module.exports = {
  name: "water-remind",
  category: "Fun",
  description: "Remind someone to be healthy and drink water!",
  aliases: "wremind","water","reminder",
  cooldown: 5,
  usage: "[mention]",
  guildOnly: true,
  execute(bot, message, args) {

 const author = message.author;
    const reciever = message.mentions.users.first();
    if (!reciever) return message.channel.send(":x: | You need to tag someone to remind to drink water!");
    const slapEmbed = new Discord.MessageEmbed()
    .setDescription(`**${reciever}**, please remember to drink water today if you haven't done so today!`)
    .setColor('BLUE')
    message.channel.send(slapEmbed)
   message.delete(); 
  }
};
