const Discord = require("discord.js");

module.exports = {
  name: "nuggets",
  category: "Fun",
  description: "Give someone nuggets as much as you want!",
  usage: "[amount] [mention]",
  aliases: ["nugget"],
  cooldown: 5,
  guildOnly: true,
  execute(bot, message, args) {
    let number = Number(args[0])
    const nuggetEmbed = new Discord.MessageEmbed()
    
    if (number) {
      if (!args[1]) return message.channel.send(":x: | You have to mention someone to give them nuggets!");
      if (!message.mentions.users.first()) return message.channel.send(":x: | You have to mention a user to give them nuggets!");
      
      nuggetEmbed.setDescription(`**${message.mentions.users.first()}**, ${message.author} gave you ${number} nuggets! :hatched_chick: UwU`)
      nuggetEmbed.setColor('RANDOM')
    } else {
      if (!args[0]) return message.channel.send(":x: | You have to mention someone to give them nuggets!");
      if (!message.mentions.users.first()) return message.channel.send(":x: | You have to mention a user to give them nuggets!");
      nuggetEmbed.setDescription(`**${message.mentions.users.first()}**, ${message.author} has given you a nugget! :hatched_chick: UwU`)
      nuggetEmbed.setColor('RANDOM')
    }
     
    message.channel.send(nuggetEmbed);
  }
};
