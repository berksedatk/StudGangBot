const Discord = require("discord.js");

module.exports = {
  name: "caitlynn",
  category: "Fun",
  description: "Caitlynn <3",
  blacklisted: true,
  unstaged: true,
  cooldown: 5,
  execute(bot, message, args) {
    const embed = new Discord.MessageEmbed()
    .setTitle("Caitlynn?")
    .setDescription('She \nShe \nShe \nShe \nShe \nGood \nCuddles ')
    .setColor("RANDOM")
    .setFooter('She')
    .setTimestamp()
    message.channel.send(embed)
  }
};
