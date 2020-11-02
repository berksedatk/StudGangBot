const Discord = require("discord.js");

module.exports = {
  name: "smd",
  category: "Fun",
  description: "Bot go brrrrrrrr",
  aliases: ["smc"],
  cooldown: 5,
  guildOnly: true,
  exchannels: [
    {id: "548949556210040862", cooldown: 10}
  ],
  execute(bot, message, args) {
    message.channel.send(`Starts giving ${message.author} that super duper extreme tongue swirl sloppy toppy super soaker quadrouple combo 360 hurricane vacuum seal double hand gawk gawk cum blaster 3000 V2`);
  }
};
