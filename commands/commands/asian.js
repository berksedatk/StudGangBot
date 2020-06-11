const Discord = require("discord.js");

module.exports = {
  name: "asian",
  category: "Fun",
  description: "Asian mei",
  blacklisted: true,
  unstaged: true,
  usage: "[mention]",
  cooldown: 5,
  guildOnly: true,
  execute(bot, message, args) {
    const list = [
      "https://cdn.discordapp.com/attachments/703928668501573712/704790183127547914/vghjiijhgvh.png"
    ]
    
    const slapEmbed = new Discord.MessageEmbed()
    .setDescription(`MEI? MORE LIKE WIDE EYES`)
    .setColor('RANDOM')
    .setImage(list[Math.floor(Math.random() * list.length)])
    message.channel.send(slapEmbed)
  }
};