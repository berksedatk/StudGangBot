const Discord = require("discord.js");

module.exports = {
  name: "gabe",
  category: "Fun",
  description: "Gaben",
  blacklisted: true,
  unstaged: true,
  cooldown: 5,
  execute(bot, message, args) {
    const embed = new Discord.MessageEmbed()
    .setTitle("Gabriel the annoying ass")
    .setDescription('He will succ yo mom! \nHe kinda annoying but cool doe \nHe likes doritos and coca cola \nWill steal yo girl')
    .setColor("RANDOM")
    .setFooter('gabe ur cool no homo')
    .setTimestamp()
    message.channel.send(embed)
  }
};
