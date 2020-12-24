const Discord = require("discord.js");

module.exports = {
  name: "uwu",
  category: "Utility",
  unstaged: true,
  description: "Add a special role to a user! :)",
  aliases: ["fuck"],
  usage: "[user]",
  reqPermissions: ["MANAGE_GUILD"],
  cooldown: 3,
  sped: true,
  async execute(bot, message, args) {
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
    if(!message.member.hasPermission("MANAGE_GUILD")){
        message.channel.send("smd").then(m => m.delete({timeout: 1000}));
    }

    else{

        if(!rMember) 
            return message.channel.send(":x: | I couldn't find that user.");
            
        let role = message.member.guild.roles.cache.get('791333448928460831');
        
        if(!role) 
            return message.channel.send("owo whats this lol!");

        if(rMember.roles.cache.has(role)) 
            return message.channel.send(":x: | That user already is fucked"); 

        else{
            rMember.roles.add(role).catch(console.error);
            message.delete(); 
            message.channel.send(`🤡`).then(m => m.delete({timeout: 1000}));
          }
     }
   }
};
