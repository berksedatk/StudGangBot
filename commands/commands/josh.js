const Discord = require("discord.js");

module.exports = {
  name: "josh",
  category: "Fun",
  description: "Josh/Kirby",
  aliases: ["kirby"],
  cooldown: 5,
  blacklisted: true,
  unstaged: true,
  execute(bot, message, args) {
    const embed = new Discord.MessageEmbed()
    .setTitle("Josh iz coot")
    .setFooter('never gonna give u up, never gonna let u down')
    .setColor("RANDOM")
    .setDescription('He simps for sax, secelie, and george \nHe is Bri-ish and he sound like Cdawg \nHe hates the word Y\'all \nHe looks like Astro boy \nHe make the whole squad smile')
    .setTimestamp()
    message.channel.send(embed)
  }
};