const Discord = require("discord.js");

module.exports = {
  name: "vidi",
  category: "Fun",
  description: "Vidi",
  cooldown: 5,
  blacklisted: true,
  unstaged: true,
  execute(bot, message, args) {
    const embed = new Discord.MessageEmbed()
    .setTitle("Vidi the voice changer")
    .setDescription('He bold voice \nHe dont use voice changer \nHe look asian but now hes changed and he looks like the cholo \nSTOP LEAVING THE SERVER')
    .setColor("RANDOM")
    .setFooter('vidi pls can u teach me how to get my voice bold ty')
    .setTimestamp()
    message.channel.send(embed)
  }
};
