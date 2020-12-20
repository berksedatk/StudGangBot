const Discord = require("discord.js");

module.exports = {
  name: "deny",
  category: "Utility",
  unstaged: true,
  description: "yuh",
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

        if(!rMember) 
            return message.channel.send(":x: | I couldn't find that user.").then(m => m.delete({timeout: 5000}))
        
        else{
            message.delete();
           const deny = new Discord.MessageEmbed()

            .setTitle("F in the chat..")
            .setDescription(`${rMember}'s Helper application has successfully been denied by ${message.author.tag}`)
            .setColor('#42f12c')
            .setTimestamp()
            message.channel.send(deny)

            const denial = new Discord.MessageEmbed()
            .setTitle("Your Helper Application Has Been Denied By An Admin :(")
            .setDescription(`We are unfortunately having to inform you that your Application for becoming part of our Staff Team has been officially denied. Do no fret though, you could still have a chance next time!\nBefore we end things off, regardless if you're approved or not, please realize there are MANY factors that go into deciding if someone becomes part of our team.\n Once again, we are sincerely sorry for the inconvience for such news and hope we can have a difference response next time.\n If you would like to know more, you are more than welcome to DM ModMail to create a Thread.`)
            .setColor('#f83e42')
            .setTimestamp()
            rMember.send(denial)
        }
     }
   }
};
