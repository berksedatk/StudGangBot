const Discord = require("discord.js");

module.exports = {
  name: "vc",
  category: "Utility",
  unstaged: true,
  dev: true,
  description: "Bot joins noodles VC",
  aliases: ["join"],
  cooldown: 5,
  execute(bot, message, args) {
  
  message.guild.channels.cache.get("591123171504029696").join()
