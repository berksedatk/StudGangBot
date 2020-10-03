const Discord = require("discord.js");

module.exports = {
  name: "ship",
  category: "Fun",
  description: "Ship yourself or someone else to see how good of a couple it makes!/n**Custom Command**: kia",
  usage: "<user> ",
  cooldown: 5,
  guildOnly: true,
  execute(bot, message, args) {
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
    if (user.id === message.author.id) return message.channel.send(":x: | You are too hot to be with yourself!");
    if (message.guild.members.cache.get(user.id).roles.highest.position >= message.member.roles.highest.position && message.guild.owner.id != message.author.id) return message.channel.send(":x: | This user is too good for you! :joy_cat:")
    
    const reciever = message.mentions.users.first();
    if (!reciever) return message.channel.send(":x: | You need to ping someone to check how gay they are!");
    let randomnumber = Math.floor(Math.random() * 100).toLocaleString() 
    sendEmbed()
       
    function sendEmbed() {
      let banEmbed = new Discord.MessageEmbed()
      .setColor("PINK")
      .setTimestamp()
      .setTitle("**SHIP R8er**")
      .setAuthor(user.tag, user.avatarURL())
      .addField("The Love Birds :smirk:", `${user}, ${author}`)
      .addField("Ship Amount",'**${randomnumber}%** :purple_heart:)
      try {
        user.send(`You and ${user} are an ugly couple btw. :grin:`)
        message.channel.send(banEmbed);
      } catch (e) {
        message.channel.send("An error occured: " + e);
      }
    }  
  }
};
