const Discord = require("discord.js");
module.exports = {
    name: "tosname",
    category: "Utility",
    description: "Changes someone name to change name (tos) for you",
    usage: "<user>",
    cooldown: 5,
    guildOnly: "true",
    reqPermissions: ["MANAGE_NICKNAMES"],
    sped: true,
    async execute(bot, message, args) {
      let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
      let logchannel = bot.channels.cache.get('563402253139050496');
      if(!user)
         return message.channel.send(":x: | Please mention a valid member of this server");
      if (message.guild.members.cache.get(user.id).roles.highest.position >= message.member.roles.highest.position && message.guild.owner.id != message.author.id) return message.channel.send(":x: | You can't change nicknames for this member, they are too powerful for you.")
      user.send({embed: {title: `Message from the server ${message.guild}⚠️`, description: `You nickname in **${message.guild}** has been changed for possibly going against Discord's Terms of Service.\nWe've done this to keep our server a safer environment for our members. Please refer to <#556926596209049620> for more info.\nIt is recommend that you to change your username to something more casual. If you don't already know how to change your username/nickname, you can refer to the articles below to learn how.\n[How to change your username](https://support.discord.com/hc/en-us/articles/213480948-How-do-I-change-my-Username-)\n[How to change your nickname in a server](https://support.discord.com/hc/en-us/articles/219070107-Server-Nicknames#:~:text=If%20you're%20on%20the,new%20nickname%20of%20your%20choice!)\nIf you have questions/concerns, please contact our ModMail bot (<@536542160703586324>)`, color: 'BLUE'}})
      user.setNickname('change name (tos)');
      message.channel.send('I have successfully changed their nickname to `change name (tos)`')
      logchannel.send({embed: {title: "User Nickname changed via command!", description:`Tos-Name command - Used to change users nicknames to "change name (tos)"\n Command Author: ${message.author.tag}\nTargeted User: ${user}\nNew Nickname: "change name (tos)"\nReason: Name possibly goes against Discord's ToS/Guidelines\nNotified: true`, color:'#f83e42'}})
    }
  };
