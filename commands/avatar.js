const Discord = require("discord.js");

module.exports = {
  name: "avatar",
  category: "Utility",
  description: "Get a specified user's avatar.",
  aliases: ["av"],
  usage: "[user]",
  cooldown: 5,
  async execute(bot, message, args) {
    let user
    if (!args[0]) {
      user = message.author
    } else {
      user = message.mentions.users.first() ? message.mentions.users.first()
        : (message.guild.members.cache.get(args[0]) ? message.guild.members.cache.get(args[0])
        : (message.guild.members.cache.filter(u => u.user.username.toLowerCase().includes(args[0].toLowerCase())).size > 0 ? message.guild.members.cache.filter(u => u.user.username.toLowerCase().includes(args[0].toLowerCase())).array()
        : undefined))

      if (!user) return message.channel.send(":x: | You didn't provide a true user.");

      if (user.length > 1) {
        let usermsg = "";
          for (let i = 0; i < (user.length > 10 ? 10 : user.length); i++) {
        usermsg += `\n${i + 1} -> ${user[i].user.username}`;
        }

        let msg = await message.channel.send("", {embed: {description: `**There are multiple users found with name '${args[0]}', which one would you like to use?** \n${usermsg}`, footer: {text: "You have 30 seconds to respond."}, timestamp: Date.now()}});
        let collected = await message.channel.awaitMessages(m => m.author.id === message.author.id, { max: 1, time: 30000, errors: ['time'] })
        if (Number(collected.first().content) > user.length) return message.channel.send(":x: | Invalid user number. Command cancelled.");
        user = user[collected.first().content - 1]
        msg.delete()
      } else {
        user = args[0] || bot.users.cache.get(user.id)
        user = bot.users.cache.get(user.id)
      }
    }

    message.channel.send({
      embed: {
        description: `Here is **${user.tag}**'s avatar:`,
        image: {
          url: user.avatarURL()
        },
        color: "RED",
        footer: {
          text: `Requested by: ${message.author.tag}`,
          icon: message.author.avatarURL()
        }
      }
    })
  }
};
