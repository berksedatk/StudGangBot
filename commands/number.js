const Discord = require("discord.js");

module.exports = {
  name: "number",
  category: "Utility",
  description: "Let the bot pick a number 1-100 for you!",
  aliases: ["pick","random","num"],
  cooldown: 5,
  guildOnly: true,
  exchannels: [
    {id: "548949556210040862", cooldown: 10}
  ],
  execute(bot, message, args) {
let randomnumber = Math.floor(Math.random() * 100).toLocaleString()
    message.channel.send(`${randomnumber}`); 
  }
};
