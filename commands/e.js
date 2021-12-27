const Discord = require("discord.js");

module.exports = {
  name: "e",
  category: "Utility",
  description: "e",
  reqPermissions: ["MANAGE_MESSAGES"],
  sped: true,
  guildOnly: true,
  execute(bot, message, args) {
message.delete()
message.channel.send("e").then(m => m.delete())
}
 };
