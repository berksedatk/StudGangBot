const Discord = require("discord.js");

module.exports = {
  name: "slap",
  category: "Fun",
  description: "Slap",
  usage: "[mention]",
  cooldown: 5,
  guildOnly: true,
  execute(bot, message, args) {
    const author = message.author;
    const reciever = message.mentions.users.first();
    if (message.mentions.everyone === true) {
      const everyoneEmbed = new Discord.MessageEmbed()
      .setDescription(`${message.author} SLAPS EVERYONE HOLY SHIT!`)
      .setColor("RANDOM")
      message.channel.send(everyoneEmbed) 
    } else {
    if (!reciever) return message.channel.send(":x: | You need someone to slap them across the server.");

    const images = [
      'https://cdn.discordapp.com/attachments/687865931938136109/701817318065438790/unknown.gif',
      'https://cdn.discordapp.com/attachments/687865931938136109/701817450102128721/unknown.gif',
      'https://cdn.discordapp.com/attachments/687865931938136109/701828526789361815/animeslap.gif',
      'https://cdn.discordapp.com/attachments/687865931938136109/701828624898064464/animeslap2.gif',
      'https://cdn.discordapp.com/attachments/687865931938136109/701828782859878501/animeslap1.gif'
    ]
    
    const image = images[Math.floor(Math.random() * images.length)];
  
    const slapEmbed = new Discord.MessageEmbed()
    .setDescription(`${message.mentions.users.first()} gets slapped by ${message.author}`)
    .setImage(image)
    .setColor('RANDOM')
    message.channel.send(slapEmbed)
   }
  }
};