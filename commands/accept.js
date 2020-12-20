const Discord = require("discord.js");

module.exports = {
  name: "accept",
  category: "Utility",
  unstaged: true,
  description: "yea",
  usage: "[user]",
  reqPermissions: ["MANAGE_GUILD"],
  cooldown: 3,
  sped: true,
  async execute(bot, message, args) {
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
    if(!message.member.hasPermission("MANAGE_GUILD")){
        message.channel.send("Access Denied").then(m => m.delete({timeout: 2000}));
    }

    else{
        let role1 = message.member.guild.roles.cache.find(role => role.name === `Helper`);
        let role2 = message.member.guild.roles.cache.find(role => role.name === `-Server Staff`);      

        if(!rMember) 
            return message.channel.send(":x: | I couldn't find that user.").then(m => m.delete({timeout: 5000}))
        
        else{
            rMember.roles.add(role1).catch(console.error);
            rMember.roles.add(role2).catch(console.error);
            message.delete();
           const success = new Discord.MessageEmbed()

            .setTitle("Hooray!")
            .setDescription(`${rMember} has been successfully accepted into the StudGang Staff Team by ${message.author.tag}`)
            .setColor('#42f12c')
            .setTimestamp()
            message.channel.send(success)

            const acceptance = new Discord.MessageEmbed()
            .setTitle("Your Helper Application Has Been Accepted!")
            .setDescription(`:tada: We are welcoming you with open arms into our Moderation team as one of our newest Helpers! :tada:\n It is recommended to start off your journey by checking out <#694971157916680282> to insure that you have a great experience with your time with us.\nIf you have any questions/concerns, please so say so in <#745783788596101210> where you will be able to talk with other staff members one on one. `)
            .setColor('#42f12c')
            .setTimestamp()
            rMember.send(acceptance)
        }
     }
   }
};
