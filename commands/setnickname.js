const Discord = require("discord.js");

module.exports = {
  name: "nick",
  category: "General",
  aliases: ["setnick","setnickname"],
  description: "Set a users nickname via a command.",
  reqPermissions: ['MANAGE_NICKNAMES'],
  cooldown: 5,
  execute(bot, message, args) {
    let logchannel = bot.channels.cache.get('563402253139050496');
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if(!user)
    return message.channel.send(":x: | Please mention a valid member of this server");
        message.guild.members.get(user).setNickname("Command Executed");
        message.channel.send(`Successfully changed ${user}'s nickname to "${message.channel.server.detailsOf(user).nick}"`);
        logchannel.send({embed: {title: "User Nickname changed via command!", description:`Responsible Mod:\n ${message.author}\n Targeted User:\n ${user}\nNew Nickname:\n${message.channel.server.detailsOf(user).nick}`, color:'#f83e42'}})
  }
};
