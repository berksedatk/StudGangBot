const Discord = require("discord.js");

module.exports = {
  name: "ana",
  category: "Fun",
  description: "Ana",
  blacklisted: true,
  unstaged: true,
  cooldown: 5,
  execute(bot, message, args) {
    const embed = new Discord.MessageEmbed()
    .setTitle("Ana be kek")
    .setDescription('Fat ass \nPretty cute nigga ngl \nGives good head (you’ll cum a lot) \nBest dick riding in the west \nWill shit in your mouth if you diss her ')
    .setColor("RANDOM")
    .setFooter(':triumph:')
    .setTimestamp()
    message.channel.send(embed)
  }
};