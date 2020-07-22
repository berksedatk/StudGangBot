const Discord = require("discord.js");

module.exports = {
  name: "opsnipe",
  category: "Misc",
  description: "Snipe those deleted messages, this is the op version of it",
  cooldown: 5,
  guildOnly: true,
  reqPermissions: ["MANAGE_GUILD"],
  execute(bot, message, args) {
    const msg = bot.snipes.get(message.channel.id)
    if (!msg) return message.channel.send('Theres nothing to op snipe!');
    
    let snipeEmbed = new Discord.MessageEmbed()
    .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
    .setColor('RANDOM')
    .setDescription(msg.content)
    
    if (msg.attachment) snipeEmbed.setImage(msg.attachment);
    
    message.channel.send(snipeEmbed)
  }
};
