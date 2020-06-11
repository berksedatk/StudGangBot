const Discord = require("discord.js");

module.exports = {
  name: "jeff",
  category: "Fun",
  description: "Jeff",
  blacklisted: true,
  unstaged: true,
  cooldown: 5,
  execute(bot, message, args) {
    const embed = new Discord.MessageEmbed()
    .setTitle("Jeff the virgin")
    .setDescription('Jeff is cool asf \nHes a complete virgin \nHe chill in vcs \nHe shy but epic trust me \nJeff moderate wells he need promotion \nlmao')
    .setColor("RANDOM")
    .setFooter('he accepted my friend req omg')
    .setTimestamp()
    message.channel.send(embed)
  }
};