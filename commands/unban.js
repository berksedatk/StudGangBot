const Discord = require("discord.js");

module.exports = {
  name: "unban",
  category: "Fun",
  description: "Unban the naughty people!",
  cooldown: 5,
  guildOnly: true,
  execute(bot, message, args) {   

    const author = message.author;
    const reciever = message.mentions.users.first();
    if (!reciever) return message.channel.send(":x: | You need someone to unban!");
 
    const demootEmbed = new Discord.MessageEmbed()
    .setDescription(':x: Invalid ``<user>`` argument. User cannot be un-banned.\n \nUsage:\n``un-ban <user> <reason>``')
    .setColor('RED')
    message.channel.send(demootEmbed)
    message.delete().catch(err => console.log(err));//use this if youre gonna delete a message
  }
};
