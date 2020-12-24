const Discord = require("discord.js");

module.exports = {
  name: "f",
  category: "Fun",
  description: "Pay your respects, brother!",
  aliases: ["respect","payrespect"],
  cooldown: 5,
  sped: true,
  guildOnly: true,
  exchannels: [
    {id: "548949556210040862", cooldown: 15}
  ],
  blacklistedChannels: ["791317380521394186","791317317140217866","791319900550725643","791319939348561930","791318245718097971","791317348735909928","791317335695818752","791318209978302474"],
  execute(bot, message, args) {
    message.channel.send(`**${message.author.username}** has paid their respects! :sparkling_heart:`)
   message.delete().catch(O_o=>{}); 
  }
};
