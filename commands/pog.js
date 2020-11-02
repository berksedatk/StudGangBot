const Discord = require("discord.js");

module.exports = {
  name: "pog",
  category: "Fun",
  description: "Show the chat that something was very much poggers!",
  aliases: ["poggers"],
  cooldown: 5,
  guildOnly: true,
  exchannels: [
    {id: "548949556210040862", cooldown: 10}
  ],
  execute(bot, message, args) {    
    const slapEmbed = new Discord.MessageEmbed()
    .setDescription(`**${message.author.username}** thinks this is pog af! :heart_eyes_cat:`)
    .setColor('BLUE')
    message.channel.send(slapEmbed)
message.delete().catch(O_o=>{}); 
  }
};
