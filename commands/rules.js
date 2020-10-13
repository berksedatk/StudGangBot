
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
    .setDescription(` \n**__Follow the Discord ToS and Community Guidelines__** \n
1) We are highly strict when it comes to the rules Discord themselves have set out. 100% of the time you will be banned for violating those rules. \n
 
    •  https://discordapp.com/tos \n
    •  https://discordapp.com/guidelines \n
**__Do not attempt to find loopholes around our rules nor bypass them.__** \n
 
 2) Bypassing or finding loopholes around the rules is not taken lightly. An example would be creating an alt to get out of a mute on your main account. (mute/temp-ban) \n`)
    .setColor('#1fbceb')

    
        const inforulesEmbed = new Discord.MessageEmbed()
    .setTitle("**__Server Information__**")
    .setDescription('thanks for touching my penis we have rules so u dont be bad lol xd lmao')
    .setColor('#f53348')

        message.delete().catch(O_o=>{}); 
          message.channel.send(inforulesEmbed).then(() => {
              message.channel.send(rulesEmbed)   
            
          })  
  }
};
