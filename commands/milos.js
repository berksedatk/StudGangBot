const Discord = require("discord.js");

module.exports = {
  name: "milos",
  category: "Fun",
  description: "Ricardo Milos",
  aliases: ["ricardo","ricardomilos"],
  blacklisted: true,
  unstaged: true,
  cooldown: 5,
  execute(bot, message, args) {
    const list = [
      "https://cdn.discordapp.com/attachments/702288375205462047/710664092070969344/2Q.png",
      "https://cdn.discordapp.com/attachments/702288375205462047/710664121804390420/original_5c59acb34b587.png",
      "https://cdn.discordapp.com/attachments/702288375205462047/710664159049678918/9k.png",
      "https://cdn.discordapp.com/attachments/702288375205462047/710664189764698182/images.png",
      "https://cdn.discordapp.com/attachments/702288375205462047/710664304852074567/ivan-gubanov-ricardo.png",
      "https://cdn.discordapp.com/attachments/702288375205462047/710664374217343046/c0d752b9413f51ac6ecc791b36d39ba5.png",
      "https://cdn.discordapp.com/attachments/702288375205462047/710664388939612232/ddcpt4u-14411fb5-15da-4b5d-9e9a-03682afc175c.png",
      "https://cdn.discordapp.com/attachments/702288375205462047/710664436402225172/images.png"
    ]
    
    const ricardoEmbed = new Discord.MessageEmbed()
    .setDescription(`He shakin' da butt`)
    .setColor('RANDOM')
    .setImage(list[Math.floor(Math.random() * list.length)])
    message.channel.send(ricardoEmbed)
  }
};