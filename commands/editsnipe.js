const Discord = require("discord.js");

module.exports = {
  name: "editsnipe",
  category: "Utility",
  description: "Snipe those edited messages",
  cooldown: 5,
  guildOnly: true,
  execute(bot, message, args) {
    const msg = bot.edits.get(message.channel.id)
    if (!msg) return message.channel.send('Theres nothing to editsnipe!');
    
    let snipeEmbed = new Discord.MessageEmbed()
    .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
    .setColor('YELLOW')
    
    if (msg.oldContent.length > 500) {
      snipeEmbed.setDescription('~~Inappropriate Edited Message~~')
    } else snipeEmbed.setDescription(`**Old Message:** \n${msg.oldContent} \n**New Message:** \n${msg.newContent}`)
    
    message.channel.send(snipeEmbed)
  }
};
