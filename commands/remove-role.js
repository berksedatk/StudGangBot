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
      let logchannel = bot.channels.cache.get('563402253139050496');
      let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);

    if(!message.member.hasPermission("MANAGE_ROLES")){
        message.channel.send("");
    }
    
    else{

        if(!rMember) 
            return message.channel.send(":x: | Couldn't find that user.");
        
        let role = args.join(" ").slice(23);
        if(!role) 
            return message.channel.send(":x: | Please specofy a role.");
        
        let gRole = message.guild.roles.cache.find(roles => roles.name === role);
        if(!gRole) 
            return message.channel.send(":x: | I couldn't find that role.");

        if(!rMember.roles.cache.has(gRole.id)) 
            return message.reply(":x: | They do not have that role.");
        
        else{
            rMember.roles.remove(gRole.id).catch(console.error);
            
            try{
                rMember.send(`The role **${gRole.name}** has been removed from you in **${message.guild.name}**.`);
                message.channel.send(`:thumbsup:Role removed.`)
                logchannel.send({embed: {title: "New Role-Remove Command Log!", description:`${message.author} has removed the role ${gRole.name} from user ${rMember}!`, color:'#f83e42'}});
            }
            catch(e){
                console.log(e.stack);
                message.channel.send(`The role **${gRole.name}** has been removed from **` + message.author.tag + "**")
           }
        }
     }
  }
};
