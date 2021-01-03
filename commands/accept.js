const Discord = require("discord.js");

module.exports = {
  name: "accept",
  category: "Utility",
  unstaged: true,
  description: "yea",
  usage: "[user]",
  cooldown: 3,
  sped: true,
  dev: true,
  async execute(bot, message, args) {
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
        if(!rMember) 
            return message.channel.send(":x: | I couldn't find that user.").then(m => m.delete({timeout: 5000}))
        
        else{
           const success = new Discord.MessageEmbed()

            .setTitle("Hooray!")
            .setDescription(`${rMember} has been successfully accepted into the Support Team by ${message.author.tag}`)
            .setColor('#42f12c')
            .setTimestamp()
            message.channel.send(success)

            const acceptance = new Discord.MessageEmbed()
            .setTitle("Your Application Has Been Accepted By An Admin!")
            .setDescription(`Congratulations, We are welcoming you with open arms into our Support Team as one of our newest Trial-Support Team Member!\nUnfortunately you do not receive any roles in the main server but we have an exclusive support server where all the magic happens and the information/rules needed to get started are located!`)
            .addField("Permanent Support Server Invite:","[Click Here!](https://discord.gg/WGMrkqhuYb)")
            .addField("Questions/Concerns?","Ask noodle anything! He will try his best to give you the answer you need")
            .setColor('#42f12c')
            .setTimestamp()
            .setThumbnail("https://cdn.discordapp.com/avatars/536542160703586324/bbf97de08ae62d4d4eb801c956bedeba.png?size=1024")
            rMember.send(acceptance)
     }
   }
};
