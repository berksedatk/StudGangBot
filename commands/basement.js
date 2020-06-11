const Discord = require("discord.js");

module.exports = {
  name: "basement",
  category: "Fun",
  description: "Why just ask them while you can force?",
  aliases: ["kidnap"],
  usage: "[mention]",
  cooldown: 5,
  guildOnly: true,
  execute(bot, message, args) {
    const author = message.author;
    const reciever = message.mentions.users.first();
    if (!reciever) return message.channel.send(":x: | You need someone to kidnap... Unless you're a fucking weirdo");

    const images = [
      'https://cdn.discordapp.com/attachments/576647339263918092/700020223222480976/56bed0b0de5405a3f6915f1dc9c9b904.gif',
      'https://cdn.discordapp.com/attachments/576647339263918092/700020222526095431/situational-awareness-zero.gif',
      'https://cdn.discordapp.com/attachments/576647339263918092/700020221938892880/e2d.gif',
      'https://cdn.discordapp.com/attachments/576647339263918092/700020221548953651/tenor.gif',
      'https://cdn.discordapp.com/attachments/576647339263918092/700020219904524428/tenor_2.gif',
      'https://cdn.discordapp.com/attachments/576647339263918092/700020218742833169/tenor_3.gif',
      "https://cdn.discordapp.com/attachments/548949556210040862/704436488905162923/image0.jpg"
    ]
    
    const image = images[Math.floor(Math.random() * images.length)];
  
    const basementEmbed = new Discord.MessageEmbed()
    .setDescription(`${message.mentions.users.first()} *gets carried to* ${message.author}*'s basement quietly...*`)
    .setImage(image)
    .setColor('RANDOM')
    message.channel.send(basementEmbed)
  }
};