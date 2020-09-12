const Discord = require("discord.js");

module.exports = {
  name: "suggest",
  category: "Utility",
  description: "Suggestion information command for StudGang",
  cooldown: 420,
  reqPermissions: ["MANAGE_GUILD"],
  guildOnly: true,
  execute(bot, message, args) {
    message.channel.send('Make a suggestion for it to be posted in <#622983734144139295> so everyone can vote on your server ideas!\nKeep in mind that not all suggestions will happen even if you have a lot of checkmarks!\nSilly suggestions can get you warned or muted for wrong channel usage.\n**Command Usage** !suggest <suggestion>')
   message.delete().catch(O_o=>{}); 
  }
};
