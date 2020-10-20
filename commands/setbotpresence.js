const Discord = require("discord.js");

module.exports = {
  name: "setbotpresence",
  category: "Utility",
  aliases: "setpr",
  description: "Sets if the bot is online, idle, DND, or invisible.",
  usage: "[status]",
  dev: true,
  async execute(bot, message, args) {
  
      const setStatus = message.content.split(' ');
    
    if(setStatus[1] === 'idle'){
        bot.user.setStatus('idle')
            .then(message.channel.send("My status has been set to: "+setStatus[1]))
            .catch(console.error);
    } 

    else if(setStatus[1] === 'online'){
        bot.user.setStatus('online')
            .then(message.channel.send("My status has been set to: "+ setStatus[1]))
            .catch(console.error);
    }

    else if(setStatus[1] === 'invisible'){
        bot.user.setStatus('invisible')
            .then(message.channel.send("My status has been set to: "+ setStatus[1]))
            .catch(console.error);
    }

    else if(setStatus[1] === 'dnd'){
        bot.user.setStatus('invisible')
            .then(message.channel.send("My status has been set to: "+ setStatus[1] + "(do not disturb)"))
            .catch(console.error);
    }

    else{
        return message.channel.send("I could not set my status please type one of the following status: idle, online, invisible, dnd (do not disturb)");
    }
  }
};
