const Discord = require("discord.js");

module.exports = {
  name: "streets",
  category: "Fun",
  description: "Send someone to the streets!",
  aliases: "sendtostreets",
  usage: "[mention]",
  unstaged: "true",
  dev: "true",
  cooldown: 5,
  guildOnly: true,
  sped: true,
  execute(bot, message, args) {    
 const author = message.author;
    const reciever = message.mentions.users.first();
    if (!reciever) return message.channel.send(":x: | You need to tag someone to send to the streets...");
    const slapEmbed = new Discord.MessageEmbed()
    .setDescription(`**${reciever}** has been sent to the streets by **${author}**! <:Flooooooshed:673264250319405064> `)
    .setColor('RED')
    message.channel.send(slapEmbed)
   message.delete().catch(O_o=>{}); 
  }
};
