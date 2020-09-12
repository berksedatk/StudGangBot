const Discord = require("discord.js");

module.exports = {
  name: "suggest",
  category: "Utility",
  description: "Suggestion information command for StudGang",
  cooldown: 420,
  reqPermissions: ["MANAGE_GUILD"],
  guildOnly: true,
  execute(bot, message, args) {
    message.channel.send('Make a suggestion for it to be posted in <#622983734144139295> so everyone can vote on your server ideas!\nKeep in mind that not all suggestions will happen even if you have a lot of checkmarks!\nIf you would like to suggest bans, staff demotions, or just want to complain about smth, DM our ModMail <@536542160703586324> to contact higher ups directly!\n**Command Usage** !suggest <suggestion>')
   message.delete().catch(O_o=>{}); 
  }
};
