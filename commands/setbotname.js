const Discord = require("discord.js");

module.exports = {
  name: "setbotname",
  category: "Utility",
  description: "Set's the bots username.",
  usage: "<name>",
  dev: true,
  async execute(bot, message, args) {
      const newName = message.content.split(' ');

    try{
        bot.user.setUsername(newName[1])
            .then(user => message.channel.send(`My new username is **${user.username}**`))
            .catch(console.error);
    }
    catch(error){
        message.channel.send("I could not set my new username :sob:");
        console.log(error);
    }
  }
};
