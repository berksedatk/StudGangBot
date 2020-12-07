const Discord = require("discord.js");

module.exports = {
  name: "promote",
  category: "Fun",
  description: "Promote someone for being a gud boy/gorl.",
  cooldown: 5,
  guildOnly: true,
  sped: true,
  execute(bot, message, args) {   

    const author = message.author;
    const reciever = message.mentions.users.first();
    if (!reciever) return message.channel.send(":x: | You need someone to promote! Do not pick Sensei.");
 
    const promootEmbed = new Discord.MessageEmbed()
    .setDescription(`${reciever} has been **PROMOTED** from stupid ass Member to Gud boi/gorl ${author}!`)
    .setColor('GREEN')
    message.channel.send(promootEmbed)
    message.delete().catch(err => console.log(err));//use this if youre gonna delete a message
  }
};
