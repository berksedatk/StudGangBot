const Discord = require("discord.js");

module.exports = {
  name: "jai",
  category: "Fun",
  description: "Jai",
  blacklisted: true,
  unstaged: true,
  cooldown: 5,
  execute(bot, message, args) {
    const embed = new Discord.MessageEmbed()
    .setTitle("Jai is big pp")
    .setDescription('He mess with the staff \nHes a meanie :cry: \nDm him for finger pics')
    .setColor("RANDOM")
    .setFooter('He be cute doe')
    .setTimestamp()
    message.channel.send(embed)
  }
};
