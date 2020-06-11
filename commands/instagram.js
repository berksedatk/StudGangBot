const Discord = require("discord.js");
const Instagram = require("instagram-web-api");

module.exports = {
  name: "instagram",
  category: "Utility",
  description: "Log in to instagram and shit",
  unstaged: true,
  async execute(bot, message, args) {
    if (message.channel.type != "dm") return message.channel.send(":x: | This command only can be used in DM's!");
    
    let username
    let password
    if (!args[0]) {
      message.channel.send("Please type in the username of the user you want to log in.")
      await message.channel.awaitMessages(m => m.author.id === message.author.id, { max: 1, time: 60000, error: ['time'] }).then(async collected => {
        username = collected.first().content
        message.channel.send("Please type in the password of the user you want to log in.")
        await message.channel.awaitMessages(m => m.author.id === message.author.id, { max: 1, time: 60000, error: ['time'] }).then(collected => {
          password = collected.first().content  
        })
      })
    } else {
      username = args[0]
      password = args[1]
    }
    
    const client = new Instagram({ username, password })
    
    let loginmsg = await message.channel.send("Logging in...");
    await client.login().then(async () => {
      loginmsg.edit("Successfully logged in! Type the command you want to execute: `botbanisher, searchuser`").then(async () => {
        message.channel.awaitMessages(m => m.author.id === message.author.id, { max: 1, time: 60000, errors: ['time'] }).then(async collected => {
          if (collected.first().content.toLowerCase() === "botbanisher") {
            //Bot banisher
            let msg = await message.channel.send("Banishing the bots...");
            
            let activity = await client.getActivity()
            let list
            
            let profiles = await activity.edge_follow_requests.edges

            await profiles.forEach(async profile => {
              //Challenge 1 - followers
              //lol loser imagine stud forcing you to do this
              
              let user = await client.getFollowings({ username: profile.node.username })
              
              
            })
            
            message.channel.send(list)
            
          } else if (collected.first().content.toLowerCase().startsWith("searchuser")) {
            //Search User
            
            const argz = collected.first().content.split(/ +/);
            
            await client.getUserByUsername({ username: argz[1] }).then(async user => {
              const userEmbed = await new Discord.MessageEmbed()
              .setColor("#fffffe")
              .setTitle(user.username)
              .setDescription(`**${user.full_name}** \n\n${user.biography}`)
              .addField("Followers:", user.edge_followed_by.count, true)
              .addField("Following:", user.edge_follow.count, true)
              .addField("Id:", user.id)
              .addField("Private:", user.is_private)
              await message.channel.send(userEmbed)
            })
            
          }
        })
      })
      
    }).catch(err => {
      return message.channel.send(`An error occured: ${err}`);
    })   
  }
};
