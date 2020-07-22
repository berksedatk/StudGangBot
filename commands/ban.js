const Discord = require("discord.js");

module.exports = {
  name: "ban",
  category: "Fun",
  description: "Ban someone.",
  usage: "<user> <reason>",
  cooldown: 5,
  guildOnly: "true",
  reqPermissions: ["BAN_MEMBERS"],
  async execute(bot, message, args) {
    if (!args[0]) return message.channel.send(":x: | You need to provide a user to ban.");
    
    let user = message.mentions.users.first() ? message.mentions.users.first() 
    : (message.guild.members.cache.get(args[0]) ? message.guild.members.cache.get(args[0])
    : (message.guild.members.cache.filter(user => user.user.username.toLowerCase().includes(args[0].toLowerCase())).size >= 1 ? message.guild.members.cache.filter(user => user.user.username.toLowerCase().includes(args[0].toLowerCase())).array()
    : null))
    
    if (user.length > 1) {
        let usermsg = "";
        for (let i = 0; i <user.length; i++) {
          usermsg += `\n${i + 1} - ${user[i].name}`
        }
        message.channel.send(`There are multiple users found with name '${args[0]}', which one would you like to use? ${usermsg}`)
        await message.channel.awaitMessages(m => m.author.id === message.author.id, { time:15000, max: 1, errors:['time'] }).then(collected => {
          if (Number(collected.first().content) > user.length) return message.channel.send(":x: | Invalid user number. Command cancelled.");
          user = user[collected.first().content - 1]
        }).catch(err => {
          return message.channel.send(":x: | Command cancelled.")
        });
      } else {
        user = user[0] || user
      }
    
    if (user === null) return message.channel.send(":x: | You didn't provide a true user.");
    if (user.id === message.author.id) return message.channel.send(":x: | You can't ban yourself, dummy!");
    if (!message.guild.members.cache.get(user.id).bannable) return message.channel.send(":x: | This user is too powerful for me.");
    if (message.guild.members.cache.get(user.id).roles.highest.position >= message.member.roles.highest.position && message.guild.owner.id != message.author.id) return message.channel.send(":x: | You can't mute this member, they are too powerful for you.")
    
    args.shift();
    const reason = args.join(" ");
    if (reason.length < 1) return message.channel.send(":x: | You didn't provide a reason.");
   
    sendEmbed()
       
    function sendEmbed() {
      let banEmbed = new Discord.MessageEmbed()
      .setColor("RED")
      .setTimestamp()
      .setTitle("**User Banned!**")
      .setAuthor(user.tag, user.avatarURL())
      .addField("User", `${user}(${user.id})`)
      .addField("Banned by", message.author)
      .addField("Reason", reason, true)
      try {
        user.send(`You have been **banned** in **${message.guild.name}** for the reason: \n${args.join(" ")}`)
        message.channel.send(banEmbed);
      } catch (e) {
        message.channel.send("An error occured: " + e);
      }
    }  
  }
};
