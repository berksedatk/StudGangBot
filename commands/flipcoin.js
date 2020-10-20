const Discord = require("discord.js");

module.exports = {
  name: "flipcoin",
  category: "Utility",
  description: "Let the bot choose heads or tails for you by flipping a coin!",
  aliases: ["flip-coin","coinflip","coin-flip"],
  cooldown: 20,
  async execute(bot, message, args) {
  var flipcoin = ["heads", "tails"];

exports.run = (client, message, args) =>{
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    var randomIndex = Math.floor(Math.random() * flipcoin.length); 

    message.channel.send(`<@${member.user.id}> `+ flipcoin[randomIndex]);
}
  
  }
};
