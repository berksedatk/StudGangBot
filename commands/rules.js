
const Discord = require("discord.js");

module.exports = {
  name: "rules",
  category: "Utility",
  description: "",
  aliases: "rs",
  reqPermissions: ["ADMINISTRATOR"],
  cooldown: 5,
  unstaged: true,
  vip: "true",
  guildOnly: true,
  execute(bot, message, args) {    
    const rulesEmbed = new Discord.MessageEmbed()
    .setTitle("**__Server Rules__**")
    .setDescription(`Thank you for joining StudGang, now we have some rules in place to ensure a safe environment for everyone here, if you notice people breaking rules, please message our [modmailbot ping] in the top right of your sidebar. \n`)
    .setColor('#1fbceb')
    message.channel.send(rulesEmbed)
    }
};
