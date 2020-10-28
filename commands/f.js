const Discord = require("discord.js");

module.exports = {
  name: "f",
  category: "Fun",
  description: "Pay your respects, brother!",
  aliases: ["respect","payrespect"],
  cooldown: 5,
  guildOnly: true,
  blacklistedChannels: ["580083502867808287","606314770546556961","709248514550530048","730994932424245258","730682637051756554","635320134847954954","718972368416014367","689865780292223012"],
  execute(bot, message, args) {
    message.channel.send(`**${message.author.username}** has paid their respects! :sparkling_heart:`)
   message.delete().catch(O_o=>{}); 
  }
};
