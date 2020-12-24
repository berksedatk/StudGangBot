const Discord = require("discord.js");

module.exports = {
  name: "editsnipe",
  category: "Misc",
  description: "Snipe those edited messages",
  cooldown: 5,
  sped: true,
  guildOnly: true,
  sped: true,
  exchannels: [
    {id: "548949556210040862", cooldown: 15}
  ],
  blacklistedChannels: ["791317380521394186","791317317140217866","791319900550725643","791319939348561930","791318245718097971","791317348735909928","791317335695818752","791318209978302474"],
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
