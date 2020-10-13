
const Discord = require("discord.js");

module.exports = {
  name: "rules",
  category: "Utility",
  description: "",
  aliases: "rs",
  reqPermissions: ["ADMINISTRATOR"],
  cooldown: 5,
  unstaged: true,
  vip: "true",
  guildOnly: true,
  execute(bot, message, args) {    
    const rulesEmbed = new Discord.MessageEmbed()
    .setTitle("**__Server Rules__**")
    .setDescription(` \n**__Follow the Discord ToS and Community Guidelines__**
1) We are highly strict when it comes to the rules Discord themselves have set out. 100% of the time you will be banned for violating those rules.
    •  https://discordapp.com/tos
    •  https://discordapp.com/guidelines \n
**__Do not attempt to find loopholes around our rules nor bypass them.__**
  2) Bypassing or finding loopholes around the rules is not taken lightly. An example would be creating an alt to get out of a mute on your main account. (mute/temp-ban) \n`)
    .setColor('#1fbceb')

    
        const inforulesEmbed = new Discord.MessageEmbed()
    .setTitle("**__Server Information__**")
    .setDescription(`Hey, thanks for joining the server and taking the time to look at our set of rules layed out to ensure our server is a safe environment for everyone! If you see anyone breaking any of the rules, please feel free to DM our ModMail bot <@536542160703586324> to contact our support team. \n
One thing to keep in mind when entering our chat is that we do indeed have a blacklisted words list set out. You can see a full list [here](https://pastebin.com/4BqkFZC6).
We have implemented the blacklisted words system to make sure our server and you do not get in trouble for saying certain kinds of words! :smiley:`)
    .setColor('#f53348')

        message.delete().catch(O_o=>{}); 
          message.channel.send(inforulesEmbed).then(() => {
              message.channel.send(rulesEmbed)   
            
          })  
  }
};
