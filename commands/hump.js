
const Discord = require("discord.js");

module.exports = {
  name: "dryhump",
  category: "Fun",
  description: "It's seggs.. 😐",
  aliases: ["hump","dhump"],
  usage: "[mention]",
  cooldown: 5,
  guildOnly: true,
  execute(bot, message, args) {
    const author = message.author;
    const reciever = message.mentions.users.first();
    if (!reciever) return message.channel.send(":x: | You need someone to have dry-hump... Unless you're a fricking weirdo");

    const images = [
      'https://cdn.discordapp.com/emojis/546559461330780352.gif'
    ]
    
    const image = images[Math.floor(Math.random() * images.length)];
  
    const basementEmbed = new Discord.MessageEmbed()
    .setDescription(`${message.author}: *${message.mentions.users.first()} let's start by dry-humping you..*`)
    .setImage(image)
    .setColor('RANDOM')
    message.channel.send(basementEmbed)
  }
};
