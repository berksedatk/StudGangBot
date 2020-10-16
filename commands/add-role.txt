const Discord = require("discord.js");

module.exports = {
  name: "add-role",
  category: "Utility",
  description: "Add a role to a member",
  aliases: ["tests"],
  reqPermissions: "MANAGE_ROLES",
  usage: "[role]",
  cooldown: 5,
  guildOnly: true,
  execute(bot, message, args) {
 
       let { cache } = message.guild.roles;
       let role = cache.find(find => role.name.toLowerCase() === args);
       if (role) {
            if (message.member.roles.cache.has(role.id)) {
             message.channel.send(":x: You already have that role!");
             return;
       }
              else {
                  message.member.roles.add(role)
                     .then(member => message.channel.send("You were added to this role"))
                     console.log(`args have been added to {$message.author}`)
           }
     }
};
