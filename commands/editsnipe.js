const Discord = require("discord.js");

module.exports = {
  name: "editsnipe",
  category: "Misc",
  description: "Snipe those edited messages",
  cooldown: 5,
  sped: true,
  guildOnly: true,
  exchannels: [
    {id: "548949556210040862", cooldown: 15}
  ],
  blacklistedChannels: ["580083502867808287","606314770546556961","709248514550530048","730994932424245258","730682637051756554","635320134847954954","718972368416014367","689865780292223012"],
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
