const Discord = require("discord.js");

module.exports = {
  name: "suspend",
  category: "Fun",
  description: "Suspend someone for being a dummy boy/gorl.",
  cooldown: 5,
  guildOnly: true,
  execute(bot, message, args) {   

    const author = message.author;
    const reciever = message.mentions.users.first();
    if (!reciever) return message.channel.send(":x: | You need someone to Suspend! *crossing fingers* let it be Thiccy. :pray:");
 
    const suspeendEmbed = new Discord.MessageEmbed()
    .setDescription(`${reciever} has been **SUSPENDED** from Gud boy/gorl to Dumb Member by ${author}!`)
    .setColor('BLUE')
    message.channel.send(suspeendEmbed)
    message.delete().catch(err => console.log(err));//use this if youre gonna delete a message
  }
};