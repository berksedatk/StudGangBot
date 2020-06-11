const Discord = require("discord.js");

module.exports = {
  name: "thiccy",
  category: "Fun",
  description: "Thiccy",
  blacklisted: true,
  unstaged: true,
  cooldown: 5,
  execute(bot, message, args) {
    const embed = new Discord.MessageEmbed()
    .setTitle("Reason's why Thiccy is a SIMP!")
    .setDescription('-He gave random girls mod while he was Admin (one was a catfish lol)\n-He make his meme account private so Sabrina could follow him\n-He says ily to almost every guy/girl cause he gay af\n-His brain is small\n-His name is Brenda')
    .setColor("RANDOM")
    .setFooter('someone pls get thiccy an irl girlfriend')
    .setTimestamp()
    message.channel.send(embed)
  }
};
