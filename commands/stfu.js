const Discord = require('discord.js')

module.exports = {
  name: "stfu",
  category: "Fun",
  description: "Stfu",
  blacklisted: true,
  unstaged: true,
  cooldown: 5,
  execute(bot, message, args) {    
    const slapEmbed = new Discord.MessageEmbed()
    .setTitle("**Shut Up**")
    .setImage(`https://cdn.discordapp.com/attachments/701501389087440938/704434911469240330/image0.jpg`)
    .setColor('RANDOM')
    message.channel.send(slapEmbed)
message.delete().catch(O_o=>{}); 
  }
};
