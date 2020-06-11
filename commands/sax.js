const Discord = require("discord.js");

module.exports = {
  name: "sax",
  category: "Fun",
  description: "Sax <3",
  blacklisted: true,
  unstaged: true,
  cooldown: 5,
  execute(bot, message, args) {
    const embed = new Discord.MessageEmbed()
    .setTitle("Sax is hawt!")
    .setDescription('Sax cool :sunglasses:\nHe can make ur pussy/dicc feel like its going to fall off (idk how that works lol)\nHe loves ur mom\nWill suck your cock any time of the day. ;3')
    .setColor("RANDOM")
    .setFooter('Noodle wrote this ;3')
    .setTimestamp()
    message.channel.send(embed)
  }
};
