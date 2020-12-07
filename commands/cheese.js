const Discord = require("discord.js");

module.exports = {
  name: "cheese",
  category: "Fun",
  description: "Give someone some cheese!",
  usage: "[mention]",
  aliases: ["givecheese"],
  cooldown: 5,
  guildOnly: true,
  sped: true,
  execute(bot, message, args) {
    
    let number = Number(args[0])
    const cheeseEmbed = new Discord.MessageEmbed()
    //Ur seci :floooooshed: - no u - NO UUU :3 - no u KMAI ^_^ - i saw the assets lol - noooooooooooooooooooooo - :floooooooshed: - oh nvm her address isn't their
    //Who's address? - HAHHAHA - bruv - bruv - im gonna upload dic pic :floooooshed: - that's bad behaviour - dont look at assets :floooshed: - oh no
    if (number) {
      if (!args[1]) return message.channel.send(":x: | You have to mention someone to give them cheese!");
      if (!message.mentions.users.first()) return message.channel.send(":x: | You have to mention a user to give them a cheese!");
      
      cheeseEmbed.setDescription(`**${message.mentions.users.first()}**, ${message.author} gave you ${number} pounds of cheese! :cheese: <:)`)
      cheeseEmbed.setColor('YELLOW')
    } else {
      if (!args[0]) return message.channel.send(":x: | You have to mention someone to give them cheese!");
      if (!message.mentions.users.first()) return message.channel.send(":x: | You have to mention a user to give them a cheese!");
      cheeseEmbed.setDescription(`**${message.mentions.users.first()}**, ${message.author} gave you cheese! :cheese: >:)`)
      cheeseEmbed.setColor('RANDOM')
    }
     
    message.channel.send(cheeseEmbed);
  }
};
