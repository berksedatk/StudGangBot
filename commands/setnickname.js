const Discord = require("discord.js");

module.exports = {
  name: "nick",
  category: "General",
  aliases: ["setnick","setnickname"],
  description: "Set a users nickname via a command.",
  usage: ["<mention> <nickname>"],
  reqPermissions: ['MANAGE_NICKNAMES'],
  cooldown: 5,
  execute(bot, message, args) {
    let logchannel = bot.channels.cache.get('563402253139050496');
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    const newname = args.slice(1).join(' ');
    if(!member)
    return message.channel.send(":x: | Please mention a valid member of this server");
    if (!args[1]) return message.channel.send(":x: | You need to provide a new nickname!");
        member.setNickname(newname);
        message.channel.send(`Successfully changed ${member.user.tag}'s nickname to: ${newname}`);
        logchannel.send({embed: {title: "User Nickname changed via command!", description:`Responsible Mod:\n ${message.author.tag}\n Targeted User:\n ${member.user.tag}\nNew Nickname:\n${newname}`, color:'#f83e42'}})
  }
};
