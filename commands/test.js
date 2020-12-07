//This is just a template of a command,
//Replace the name, category, etc. with whatever you want
//Delete the unused properities on module.exports
//Insert your code inside execute command

const Discord = require("discord.js");

module.exports = {
  name: "test",
  category: "Utility",
  description: "Test",
  aliases: ["tests"],
  usage: "[test]",
  reqPermissions: ["MANAGE_GUILD"],
  cooldown: 5,
  dev: true,
  admin: true,
  vip: true,
  mnc: true,
  unstaged: true,
  guildOnly: true,
  sped: true,
  blacklisted: true,
  blacklistedChannels: ['channelID','channelID','channelID']
  exchannels: [
    {id: "1", cooldown: 1}
  ],
  execute(bot, message, args) {
    message.channel.send("Test");
  }
};
