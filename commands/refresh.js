const Discord = require("discord.js");
const fs = require('fs');

module.exports = {
  name: "reload",
  category: "Utility",
  unstaged: true,
  description: "Reloads a command.",
  usage: "[command name]",
  dev: true,
  execute(bot, message, args) {
    if (!args[0]) return message.channel.send(`<:cross:724049024943915209> | Missing arguments. \n-Usage: \`${message.prefix}${this.name} ${this.usage}\``);
    let commandName = args[0].toLowerCase()
    if (!bot.commands.get(commandName)) return message.channel.send(" <:cross:724049024943915209> | This command does not exist.");


    try {
      delete require.cache[require.resolve(`../commands/${commandName}.js`)];
      bot.commands.delete(commandName);
      const pull = require(`../commands/${commandName}.js`);
      bot.commands.set(commandName, pull);
    } catch(err) {
      return message.channel.send("<:cross:724049024943915209> | Could not reload the command: " + err);
    }

    message.channel.send(":white_check_mark: | Command has been reloaded successfully.");
  }
};
