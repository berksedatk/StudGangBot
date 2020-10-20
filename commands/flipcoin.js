const Discord = require("discord.js");

module.exports = {
  name: "avatar",
  category: "Utility",
  description: "Get a specified user's avatar.",
  aliases: ["av"],
  usage: "[heads] [tails]",
  cooldown: 60,
  async execute(bot, message, args) {
     if (!args[0]) return message.channel.send(":x: | You need to choose heads or tails!"); 
  var flipcoin = ["heads", "tails"];

exports.run = (client, message, args) =>{
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    var randomIndex = Math.floor(Math.random() * flipcoin.length); 

    message.channel.send(`<@${member.user.id}> `+ flipcoin[randomIndex]);
}
  
  }
};
