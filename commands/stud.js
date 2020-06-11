const Discord = require("discord.js");

module.exports = {
  name: "stud",
  category: "Fun",
  description: "Stud",
  blacklisted: true,
  unstaged: true,
  cooldown: 5,
  execute(bot, message, args) {
    const embed = new Discord.MessageEmbed()
    .setTitle("Stud is the boss")
    .setDescription('Stud is hawt and he smells good \nHe fasts and goes walking cuz he epic and it refreshes him \nStud gets all the girls including yours \nHe has muscles bigger than a mountain \nI will suck him off no homo')
    .setColor("RANDOM")
    .setFooter('I\'ll make a AI soon dont worry')
    .setTimestamp()
    message.channel.send(embed)
  }
};
