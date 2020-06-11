const Discord = require("discord.js");

module.exports = {
  name: "secelie",
  category: "Fun",
  description: "Secelie",
  blacklisted: true,
  unstaged: true,
  cooldown: 5,
  execute(bot, message, args) {
    const embed = new Discord.MessageEmbed()
    .setTitle("Secelie liek drawings")
    .setDescription('She has a big cock(sax and noodles love it) \nShe is high key always horny and a full time loli \nShes a midget but short girls are cuter \nShes a virgin but she lost her ass virginity to a pencil \nGeorge sucks on my large meaty cock \nBabygirl what\'s your naMmmee')
    .setColor("RANDOM")
    .setFooter('secelie made my current pfp ty')
    .setTimestamp()
    message.channel.send(embed)
  }
};
