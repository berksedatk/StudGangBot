const Discord = require("discord.js");

module.exports = {
  name: "L",
  category: "Fun",
  description: "Give people all the L's!",
  aliases: ["l"],
  usage: "[mention]",
  cooldown: 5,
  sped: true,
  guildOnly: true,
  blacklistedChannels: ["791317380521394186","791317317140217866","791319900550725643","791319939348561930","791318245718097971","791317348735909928","791317335695818752","791318209978302474"],
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
