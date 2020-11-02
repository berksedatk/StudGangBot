const Discord = require("discord.js");

module.exports = {
  name: "avatar",
  category: "Utility",
  description: "Get a specified user's avatar.",
  aliases: ["av"],
  usage: "[user]",
  cooldown: 10,
  exchannels: [
    {id: "548949556210040862", cooldown: 60}
  ],
  blacklistedChannels: ["580083502867808287","606314770546556961","709248514550530048","730994932424245258","730682637051756554","635320134847954954","718972368416014367","689865780292223012"],
  async execute(bot, message, args) {
    let user
    if (!args[0]) {
      user = message.author
    } else {
      user = message.mentions.users.first()
      if (!user) return message.channel.send(":x: | You didn't provide a true user.")
    }

    message.channel.send({
      embed: {
        description: `Here is **${user.tag}**'s avatar:`,
        image: {
          url: user.avatarURL({format:"png",dynamic:true,size:1024})
        },
        color: "RED",
        footer: {
          text: `Requested by: ${message.author.tag}`,
          icon: message.author.avatarURL({dynamic:true})
        }
      }
    })
  }
};
