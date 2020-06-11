const Discord = require("discord.js");

module.exports = {
  name: "ryan",
  category: "Fun",
  description: "Ryan",
  blacklisted: true,
  unstaged: true,
  cooldown: 5,
  execute(bot, message, args) {
    const embed = new Discord.MessageEmbed()
    .setTitle("Ryan is a smexy brit")
    .setDescription('He\'s better than sensei \nLooks like an e boy \nHe\'s posh cunt \nA piff ting')
    .setColor("RANDOM")
    .setFooter('sax more like sex hhehehehe')
    .setTimestamp()
    message.channel.send(embed)
  }
};
