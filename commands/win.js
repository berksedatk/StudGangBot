const Discord = require("discord.js");

module.exports = {
  name: "win",
  category: "Fun",
  description: "I see this as an absolute win!",
  aliases: ["w"],
  cooldown: 5,
  guildOnly: true,
  execute(bot, message, args) {    
    const slapEmbed = new Discord.MessageEmbed()
    .setDescription(`**${message.author.username}** see's this as an absolute win! :sunglasses:`)
    .setColor('BLUE')
    message.channel.send(slapEmbed)
message.delete().catch(O_o=>{}); 
  }
};