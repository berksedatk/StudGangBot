const Discord = require("discord.js");

module.exports = {
  name: "hug",
  category: "Fun",
  description: "Huggy wuggy someone uwu",
  usage: "[mention]",
  cooldown: 5,
  guildOnly: true,
  execute(bot, message, args) {
    const author = message.author;
    const reciever = message.mentions.users.first();
    if (message.mentions.everyone === true) {
      const everyoneEmbed = new Discord.MessageEmbed()
      .setDescription(`${message.author} HUGS EVERYONE HOLY SHIT!`)
      .setColor("RANDOM")
      message.channel.send(everyoneEmbed) 
    } else {
    if (!reciever) return message.channel.send(":x: | You need someone to hug, mention them!");

    const images = [
      'https://cdn.discordapp.com/attachments/652681168994697236/700013861511757885/7f76102bedf6de4e34065709d16a9ef8.gif',
      'https://cdn.discordapp.com/attachments/652681168994697236/700013861105041408/giphy_2.gif',
      'https://cdn.discordapp.com/attachments/652681168994697236/700013966352449576/tenor_4.gif',
      'https://cdn.discordapp.com/attachments/652681168994697236/700013966587330590/f9e934cddfd6fefe0079ab559ef32ab4.gif',
      'https://cdn.discordapp.com/attachments/652681168994697236/700013966881062993/giphy.gif',
      'https://cdn.discordapp.com/attachments/652681168994697236/700013967346499734/tenor_3.gif',
      'https://cdn.discordapp.com/attachments/652681168994697236/700013967552151572/tumblr_4b73c9ce37c2c8d34a97641f8fd97338_be4510db_500.gif',
      'https://cdn.discordapp.com/attachments/652681168994697236/700013967858335834/tenor_2.gif'
    ]
    
    const image = images[Math.floor(Math.random() * images.length)];
  
    const hugEmbed = new Discord.MessageEmbed()
    .setDescription(`${message.mentions.users.first()} Huggy Wuggy :3`)
    .setImage(image)
    .setColor('RANDOM')
    message.channel.send(hugEmbed)
   }
  }
};