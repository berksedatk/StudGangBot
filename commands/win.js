const Discord = require("discord.js");

module.exports = {
  name: "win",
  category: "Fun",
  description: "I see this as an absolute win!",
  aliases: ["w"],
  cooldown: 5,
  guildOnly: true,
  blacklistedChannels: ["580083502867808287","606314770546556961","709248514550530048","730994932424245258","730682637051756554","635320134847954954","718972368416014367","689865780292223012"],
  execute(bot, message, args) {    
    const slapEmbed = new Discord.MessageEmbed()
    .setDescription(`**${message.author.username}** see's this as an absolute win! :sunglasses:`)
    .setColor('BLUE')
    message.channel.send(slapEmbed)
message.delete().catch(O_o=>{}); 
  }
};
