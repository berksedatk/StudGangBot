const Discord = require("discord.js");

module.exports = {
  name: "pingu",
  category: "Fun",
  description: "Pingo",
  blacklisted: true,
  unstaged: true,
  cooldown: 5,
  execute(bot, message, args) {
    const embed = new Discord.MessageEmbed()
    .setTitle("Pingu is the pengu")
    .setDescription('He be ok \nNice to ppl and gurls \nHe good at helicopter dick')
    .setColor("RANDOM")
    .setFooter('His pp is very sexi')
    .setTimestamp()
    message.channel.send(embed)
  }
};
