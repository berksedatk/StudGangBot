const Discord = require("discord.js");

module.exports = {
  name: "L",
  category: "Fun",
  description: "Give people all the L's!",
  aliases: "l",
  usage: "[mention]",
  cooldown: 5,
  guildOnly: true,
  execute(bot, message, args) {
  
  if (message.content === 'pp-milk') {
	message.react('722539935898271784');
}
}; //do ur job github
