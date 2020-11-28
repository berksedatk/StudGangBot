const Discord = require("discord.js");

module.exports = {
  name: "L",
  category: "Fun",
  description: "Give people all the L's!",
  usage: "[mention]",
  cooldown: 5,
  guildOnly: true,
  blacklistedChannels: ["580083502867808287","606314770546556961","709248514550530048","730994932424245258","730682637051756554","635320134847954954","718972368416014367","689865780292223012"],
  execute(bot, message, args) {    
 const author = message.author;
    const reciever = message.mentions.users.first();
    if (!reciever) return message.channel.send(":x: | You need to tag someone to give an L too...");
    const slapEmbed = new Discord.MessageEmbed()
    .setDescription(`**${reciever}** has recieved an **L** from **${author}**! <:Flooooooshed:673264250319405064> `)
    .setColor('RED')
    message.channel.send(slapEmbed)
   message.delete(); 
  }
};
