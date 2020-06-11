const Discord = require("discord.js");

module.exports = {
  name: "jern",
 category: "Fun",
  description: "Jern",
  blacklisted: true,
  unstaged: true,
  cooldown: 5,
  execute(bot, message, args) {
    const embed = new Discord.MessageEmbed()
    .setTitle("Jern the smol pp")
    .setDescription('He be a good staf \nHe likes to shower because he smell bad all time :sick: \nHe unsexy \nIdk')
    .setColor("RANDOM")
    .setFooter('jern pls send me nudes')
    .setTimestamp()
    message.channel.send(embed)
  }
};
