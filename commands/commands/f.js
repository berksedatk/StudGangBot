const Discord = require("discord.js");

module.exports = {
  name: "f",
  category: "Fun",
  description: "Pay your respects, brother!",
  aliases: ["respect","payrespect"],
  cooldown: 5,
  guildOnly: true,
  execute(bot, message, args) {
    message.channel.send(`**${message.author.username}** has paid their respects! :sparkling_heart:`)
   message.delete().catch(O_o=>{}); 
  }
};