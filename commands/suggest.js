const Discord = require("discord.js");

module.exports = {
  name: "suggest",
  category: "Fun",
  description: "Sends an information message on how to make Suggestions in StudGang",
  cooldown: 5,
  guildOnly: true,
  reqPermissions: ["MANAGE_GUILD"],
  execute(bot, message, args) {    
    const suggestEmbed = new Discord.MessageEmbed()
    .setTitle("Suggestions Information"
    .setDescription(`Make a suggestion for it to posted in <#622983734144139295> so everyone can vote on your server ideas!\n Keep in mind that not all suggestions will happen even if you have a lot of checkmarks!\nSilly suggestions can get you warned for wrong channel usage!\n**Command Usage** !suggest <suggestion>`)
    .setColor('GREEN')
    message.channel.send(suggestEmbed)
message.delete().catch(O_o=>{}); 
  }
};
