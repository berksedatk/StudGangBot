const Discord = require("discord.js");

module.exports = {
  name: "seggs",
  category: "Fun",
  description: "It's seggs.. 😐",
  aliases: ["segg"],
  usage: "[mention]",
  cooldown: 5,
  guildOnly: true,
  execute(bot, message, args) {
    const author = message.author;
    const reciever = message.mentions.users.first();
    if (!reciever) return message.channel.send(":x: | You need someone to have seggs... Unless you're a fucking weirdo");

    const images = [
      'https://cdn.discordapp.com/emojis/721286508971163710.gif',
      'https://cdn.discordapp.com/emojis/722538829512310884.gif'
    ]
    
    const image = images[Math.floor(Math.random() * images.length)];
  
    const basementEmbed = new Discord.MessageEmbed()
    .setDescription(`${message.mentions.users.first()} and ${message.author} start having seggs!`)
    .setImage(image)
    .setColor('RANDOM')
    message.channel.send(basementEmbed)
  }
};
