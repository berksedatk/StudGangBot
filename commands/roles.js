const Discord = require("discord.js");

module.exports = {
  name: "roles",
  category: "Utility",
  description: "e bro",
  aliases: "funroles",
  reqPermissions: ["MANAGE_GUILD"],
  cooldown: 5,
  unstaged: true,
  vip: "true",
  guildOnly: true,
  sped: true,
  execute(bot, message, args) {    
    const genderEmbed = new Discord.MessageEmbed()
    .setTitle("Gender Roles")
    .setDescription(`
:man: **Male
:woman: Female
:repeat: Transgender
:no_entry_sign: Non-Binary**`)
    .setFooter("React with the emote beside the role you want!")
    .setColor('#5E9BF7')
    const genderMessage = "`c!rr addmany ${message.channel.id} MESSGAE_ID_HERE  
:man: Male
:woman: Female 
:repeat: Transgender
:no_entry_sign: Non-Binary`" 
    const ageEmbed = new Discord.MessageEmbed()
    .setTitle("Age Roles")
    .setDescription(`
:baby: **13-17
:boy: 18-21
:man: 22-29
:older_man: 30+**`)    
    .setFooter("React with the emote beside the role you want!")
    .setColor('#5E9BF7')
    const ageMessage = "`c!rr addmany ${message.channel.id} MESSGAE_ID_HERE 
:baby: 13-17
:boy: 18-21
:man: 22-29
:older_man: 30+`"

    const sexualityEmbed = new Discord.MessageEmbed()
    .setTitle("Sexuality Roles")
    .setDescription(`
:kiss_woman_man: **Heterosexual
:kiss_mm: Homosexual
:kiss_ww: Lesbian
:man_shrugging: Bisexual
:woman_gesturing_no: Other(Ask-Me!)
:smiling_imp: Homiesexual**`)    
    .setFooter("React with the emote beside the role you want!")
    .setColor('#5E9BF7')
    
    const sexualityMessage = "`c!rr addmany ${message.channel.id} MESSGAE_ID_HERE 
:kiss_woman_man: Sexuality:Heterosexual
:kiss_mm: Sexuality:Homosexual
:kiss_ww: Sexuality:Lesbian
:man_shrugging: Sexuality:Bisexual
:woman_gesturing_no: Sexuality:Other(Ask-Me!)
:smiling_imp: Sexuality:Homiesexual`"

    const pingEmbed = new Discord.MessageEmbed()
    .setTitle("Ping Roles")
    .setDescription(`
:bangbang: **Announcements
:tada: Giveaways
:fire: Events
:hammer_pick: Updates
:handshake: Partnerships
:smiling_imp: Ping Me Daddy~**`)
    .setFooter("React with the emote beside the role you want!")    
    .setColor('#5E9BF7')
    
    const pingMessage = "`c!rr addmany ${message.channel.id} MESSGAE_ID_HERE 
:bangbang: [@]Announcements
:tada: [@]Giveaways
:fire: [@]Events
:hammer_pick: Updates
:handshake: Partnerships
:smiling_imp: Ping Me Daddy~`"

    const gamingEmbed = new Discord.MessageEmbed()
    .setTitle("Gaming Channel Access")
    .setDescription(`
:video_game: **Gaming**`)    
    .setFooter("React with the emote to gain access to our Gaming Channels")
    .setColor('#5E9BF7')
    
    const gamingMessage = "`c!rr add ${message.channel.id} MESSGAE_ID_HERE :video_game: Gaming`"

        message.delete().catch(O_o=>{}); 
          message.channel.send(genderEmbed).then(() =>
          message.channel.send(genderMessage)then(() => {
              message.channel.send(ageEmbed).then(() => {
              message.channel.send(ageMessage)then(() => {
                message.channel.send(sexualityEmbed).then(() => {
                message.channel.send(sexualityMessage)then(() => {  
                    message.channel.send(pingEmbed).then(() => {
                    message.channel.send(pingMessage)then(() => { 
                       message.channel.send(gamingEmbed)then(() => {
                       message.channel.send(gamingMessage)
            
          })  
          })
            })  
            })
              })
              })
                })
                })
                 })
  }
};
