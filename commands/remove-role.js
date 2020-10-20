  const Discord = require("discord.js");

module.exports = {
  name: "remove-role",
  category: "Utility",
  description: "Remove roles from users!",
  aliases: ["removerole","role-remove","rremove","roleremove"],
  usage: "[user] [role]",
  reqPermissions: ["MANAGE_ROLES"],
  cooldown: 3,
  async execute(bot, message, args) {
      let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);

    if(!message.member.hasPermission("MANAGE_ROLES")){
        message.channel.send("");
    }
    
    else{

        if(!rMember) 
            return message.channel.send("Couldn't find that user.");
        
        let role = args.join(" ").slice(23);
        if(!role) 
            return message.channel.send("Please specofy a role.");
        
        let gRole = message.guild.roles.cache.find(roles => roles.name === role);
        if(!gRole) 
            return message.channel.send("I couldn't find that role.");

        if(!rMember.roles.cache.has(gRole.id)) 
            return message.reply("They do not have that role.");
        
        else{
            rMember.roles.remove(gRole.id).catch(console.error);
            
            try{
                rMember.send(`Your role ${gRole.name} had been removed ${message.guild.name}.`);
                message.channel.send(`The role **${gRole.name}** has been removed from` + message.author.tag);
            }
            catch(e){
                console.log(e.stack);
                message.channel.send(`The role **${gRole.name}** has been removed from` + message.author.tag)
           }
        }
     }
  }
};
