const Discord = require("discord.js");

module.exports = {
  name: "water-remind",
  category: "Fun",
  description: "Remind someone to drink water!",
  aliases: ["remind","wremind"],
  usage: "[mention]",
  cooldown: 5,
  guildOnly: true,
  exchannels: [
    {id: "548949556210040862", cooldown: 7}
  ],
  execute(bot, message, args) {    
 const author = message.author;
    const reciever = message.mentions.users.first();
    if (!reciever) return message.channel.send(":x: | You need to tag someone to remind them to drink water!");
    const slapEmbed = new Discord.MessageEmbed()
    .setDescription(`**${reciever}**, please remember to drink water today if you haven't done so already!`)
    .setColor('#699DEB')
    message.channel.send(slapEmbed)
  }
};
