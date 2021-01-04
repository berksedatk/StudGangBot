const Discord = require("discord.js");

module.exports = {
  name: "userinfo",
  category: "Utility",
  description: "Get information about a user!",
  usage: "<user>",
  cooldown: 5,
  guildOnly: "true",
  async execute(bot, message, args) {
    let inline = true
    let resence = true
    const status = {
    online: "<:onlinesymbol:795652240102785044> Online",
    idle: "<:idlesymbol:795652292144922634> Idle",
    dnd: "<:dndsymbol:795652333857538140> Do Not Disturb",
    offline: "<:offlinesymbol:795652721184604212> Offline/Invisible"
  }
    if(!args[0]) message.channel.send(":x: | Please provide a user!");
const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
let target = message.mentions.users.first() || message.author

if (member.user.bot === true) {
bot = "<:boticon:795652386734473236> Yes";
} else {
bot = "<:membersicon:795652425910452245> No";
}

        let embed = new Discord.MessageEmbed().catch(err => {
          console.log(err)
          message.channel.send(err)
        })
            //.setAuthor(member.user.username)
            .setThumbnail((target.displayAvatarURL))
            .setColor("#00ff00")
            .addField("Full Username", `${member.user.tag}`, inline)
            .addField("ID", member.user.id, inline)
            .addField("Nickname", `${member.nickname !== null ? `Nickname: ${member.nickname}` : "None"}`, true)
            .addField("Bot", `${bot}`,inline, true)
            .addField("Status", `${status[member.user.presence.status]}`, inline, true)
            .addField("Playing", `${member.user.presence.game ? `🎮 ${member.user.presence.game.name}` : "Not playing"}`,inline, true)
            .addField("Roles", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "No Roles"}`, true)
            .addField("Joined Discord At", member.user.createdAt)
            .setFooter(`Information about ${member.user.username}`)
            .setTimestamp()

        message.channel.send(embed);
  }
};
