const Discord = require("discord.js");

module.exports = {
  name: "smd",
  category: "Fun",
  description: "Bot go brrrrrrrr",
  aliases: ["smc"],
  cooldown: 5,
  guildOnly: true,
  execute(bot, message, args) {
    message.channel.send(`Starts giving ${message.author} that super duper extreme tongue swirl sloppy toppy 3000 V2`);
  }
};
