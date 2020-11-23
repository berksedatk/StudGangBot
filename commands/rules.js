
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
    .setDescription(`
\n**__Follow the Discord ToS and Community Guidelines__**
1) We are highly strict when it comes to the rules Discord themselves have set out. 100% of the time you will be banned for violating those rules. (perm-ban)
    •  You can find the Terms of Service [here](https://discordapp.com/tos).
    •  You can find the Guidelines [here](https://discordapp.com/guidelines).
\n**__Do not attempt to find loopholes around our rules nor bypass them.__**
2) Bypassing or finding loopholes around the rules is not taken lightly. An example would be creating an alt to get out of a mute on your main account. This also touches up on bypassing our blacklisted words, you can find a full list in the Server Introduction above! (mute/temp-ban)
\n**__Do not post NSFW content in non-NSFW marked channels__**
3) NSFW (Not Safe For Work) content is NOT allowed anywhere in the server! If a channel is marked as NSFW, make sure to read the description. (warn/mute/temp-ban)
\n**__Use channels for their appropiate uses__**
4) We would like to keep our channels neat and so should you! We recommend that you try your best to limit the use of bot commands in channels that bot commands are allowed in. <#551217309369368625> is the best place to use commands! (warn/mute)
\n**__Do not advertise__**
5) We strictly forbid the advertisement of other discord servers/communities, social media (<#657318283967725588> is the only exception), third party websites, etc. This includes unsolicited DM and indirect advertisements. (warn/mute/temp-ban)`)    .setColor('#1fbceb')
    
    const rules2Embed = new Discord.MessageEmbed()
    .setDescription(`**__Treat everyone including the staff, members and yourself with respect.__**
6) We do not tolerate discrimination, harassment, hate speech, belittlement, the use of racial slurs, pedophilia, the posting of content of other users without their consent, nor extreme toxicity here. We ask you to please acknowledge that each member here is diverse and might take offense to what you say. Of course if you are only having a little fun with being toxic and the other members involved in your "joke" are fine with it then there shouldn't be a problem, however when a member tells you to stop, you should respect it and stop immediately or staff will be forced to intervene.
(warn/mute/temp-ban)
\n**__Keep discussing regarding religion, suicide, and similar stuff out of chat__**
7) We would like to limit topics like this as much as we can due to the possibility of them creating unnecessary dicussions or toxicity. This includes topics about religion, politics, sucide, anything that goes against Discord's Terms of Service like gore or loli's, shaming LGBTQ+ individuals, disorders, and many other things alike. (warn/mute/temp-ban)
\n**__Spamming/Flooding chats is not tolerated__**
8) Spamming/Flooding is highly unappreciated in this server! Examples of spamming would be sending the same/similar messages in a fast or slow interval. Flooding is posting content that overwhelms a users screen. Spamming/Flooding isn't just words, it could be images, links, mentions, copy pasta, etc. (warn/mute)
\n**__Always listen to what a staff member says__**
9) Listen to what a staff member says. If they tell you to stop doing something, stop. If you feel that they abuse their powers, report it to the ModMail bot (<#747015088564731904>). (warn/mute)`)
    .setColor('#1fbceb')
    
        const introrulesEmbed = new Discord.MessageEmbed()
    .setTitle("**__Server Introduction__**")
    .setDescription(`Hey, thanks for joining the server and taking the time to look at our set of rules laid out to ensure our server is a safe environment for everyone! If you see anyone breaking any of the rules, or have questions/concerns about the server, please feel free to DM our ModMail bot <@536542160703586324> to contact our support team. \n
One thing to keep in mind when entering our chat is that we do indeed have a blacklisted words list set out.\n You can see a full list [here](https://pastebin.com/4BqkFZC6).
We have implemented the blacklisted words system to make sure our server and yourself do not get in trouble for saying certain kinds of words! :smiley:`)
    .setColor('#f53348')
        


        message.delete().catch(O_o=>{}); 
          message.channel.send(introrulesEmbed).then(() => {
              message.channel.send(rulesEmbed).then(() => {
                message.channel.send(rules2Embed)      
            
          })  
            })  
  }
};
