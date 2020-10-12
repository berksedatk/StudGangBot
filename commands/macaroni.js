const Discord = require("discord.js");

module.exports = {
  name: "macaroni",
  category: "Fun",
  description: "Give someone macaroni! Noodle make this command so sab can gib him macaroni :pensive:",
  vip: "true",
  usage: "[mention]",
  aliases: ["macncheese","mnc","mac"],
  cooldown: 5,
  guildOnly: true,
  execute(bot, message, args) {
    
    let number = Number(args[0])
    const mncEmbed = new Discord.MessageEmbed()
    //Ur seci :floooooshed: - no u - NO UUU :3 - no u KMAI ^_^ - i saw the assets lol - noooooooooooooooooooooo - :floooooooshed: - oh nvm her address isn't their
    //Who's address? - HAHHAHA - bruv - bruv - im gonna upload dic pic :floooooshed: - that's bad behaviour - dont look at assets :floooshed: - oh no
    if (number) {
      if (!args[1]) return message.channel.send(":x: | You have to mention someone to give them cheese!");
      if (!message.mentions.users.first()) return message.channel.send(":x: | You have to mention a user to give them bowls of macaroni!");
      
      mncEmbed.setDescription(`**${message.mentions.users.first()}**, ${message.author} gave you ${number} bowls of macaroni! :cheese: <:)`)
      mncEmbed.setColor('YELLOW')
    } else {
      if (!args[0]) return message.channel.send(":x: | You have to mention someone to give them a bowl of macaroni!");
      if (!message.mentions.users.first()) return message.channel.send(":x: | You have to mention a user to give them a bowl of macaorni!");
      mncEmbed.setDescription(`**${message.mentions.users.first()}**, ${message.author} gave you a bowl of macaroni! :cheese: >:)`)
      mncEmbed.setColor('RANDOM')
    }
     
    message.channel.send(mncEmbed);
  }
};
