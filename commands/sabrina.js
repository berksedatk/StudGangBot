const Discord = require("discord.js");

module.exports = {
  name: "sabrina",
  category: "Fun",
  description: "sabrina hehehe",
  unstaged: true,
  aliases: ["sabrigga"],
  cooldown: 5,
  execute(bot, message, args) {
    const embed = new Discord.MessageEmbed()
    .setTitle("sabrina is sexi af imo")
    .setDescription('She is very sex\nShe has a lit pussy!\nShe can make you cum easily\nHer voice is super hawt\nShe is smort af\nshe is good girlfriend and is very good in bed oml\nShe is hawt af oml\nShe is hawt af oml\nshe is not from the hood so her puss no smell bad\nShe is hawt af oml\nshe is sexi\nShe is hawt af oml\nShe is hawt af oml\n')
    .setColor("RANDOM")
    .setFooter('noodle wrote this pls do not bulli sax')
    .setTimestamp()
    message.channel.send(embed)
  }
};
