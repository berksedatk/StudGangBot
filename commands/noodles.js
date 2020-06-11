const Discord = require("discord.js");

module.exports = {
  name: "noodles",
  category: "Fun",
  description: "Noodles <3",
  blacklisted: true,
  unstaged: true,
  aliases: ["bitch"],
  cooldown: 5,
  execute(bot, message, args) {
    const embed = new Discord.MessageEmbed()
    .setTitle("Noodles is sexi af imo!!! :flushed:")
    .setDescription('She is very sex \nShe has very wet and tight pussy! \nShe can make you cum easily \nShe use b r a i n \nAlso could not forget, she is a really good co-owner/owner because she actually cares and does things for the server, unlike memetastic lol. She actually cares about the servers future. Noodles is also active in chat and listens to what others says. She may not be nice all the time but she does care.')
    .setColor("RANDOM")
    .setFooter('Noodles ur cute')
    .setTimestamp()
    message.channel.send(embed)
   //Bruv noodle ur cute and seci and good and yes
  }
};
