const Discord = require("discord.js");

module.exports = {
  name: "givenoodles",
  category: "Fun",
  description: "Give someone a bowl of noodles!",
  usage: "[mention]",
  aliases: ["noodle"],
  cooldown: 5,
  guildOnly: true,
  execute(bot, message, args) {
    let number = Number(args[0])
    const noodleEmbed = new Discord.MessageEmbed()
    
    if (number) {
      if (!args[1]) return message.channel.send(":x: | You have to mention someone to give them noodles!");
      if (!message.mentions.users.first()) return message.channel.send(":x: | You have to mention a user to give them noodles!");
      
      noodleEmbed.setDescription(`**${message.mentions.users.first()}**, ${message.author} gave you ${number} noodles! :ramen: Eat them while they're warm! :ramen:`)
      noodleEmbed.setFooter('All the noodles are provided by the CEO noodles/Zero Two hehe')
      noodleEmbed.setColor('RANDOM')
    } else {
      if (!args[0]) return message.channel.send(":x: | You have to mention someone to give them noodles!");
      if (!message.mentions.users.first()) return message.channel.send(":x: | You have to mention a user to give them noodles!");
      noodleEmbed.setDescription(`**${message.mentions.users.first()}**, ${message.author} has given you a bowl of noodles! :ramen: Eat it while it's warm!`)
      noodleEmbed.setColor('RANDOM')
    }
     
    message.channel.send(noodleEmbed);
  }
};
