const Discord = require("discord.js");

module.exports = {
  name: "roles",
  category: "Utility",
  description: "e bro",
  aliases: "funroles",
  reqPermissions: ["MANAGE_GUILD"],
  cooldown: 5,
  unstaged: true,
  guildOnly: true,
  sped: true,
  execute(bot, message, args) {
    const genderEmbed = new Discord.MessageEmbed()
    .setTitle("Gender Roles")
    .setDescription(`:man: **Male\n:woman: Female\n:repeat: Transgender\n:no_entry_sign: Non-Binary**`)
    .setFooter("React with the emote beside the role you want!")
    .setColor('#5E9BF7')
    const genderMessage = `c!rr addmany ${message.channel.id} MESSGAE_ID_HERE  \n:man: Male\n:woman: Female \n:repeat: Transgender\n:no_entry_sign: Non-Binary`

    const ageEmbed = new Discord.MessageEmbed()
    .setTitle("Age Roles")
    .setDescription(`:baby: **13-17\n:boy: 18-21\n:man: 22-29\n:older_man: 30+**`)
    .setFooter("React with the emote beside the role you want!")
    .setColor('#5E9BF7')
    const ageMessage = `c!rr addmany ${message.channel.id} MESSGAE_ID_HERE \n:baby: **13-17\n:boy: 18-21\n:man: 22-29\n:older_man: 30+`

    const sexualityEmbed = new Discord.MessageEmbed()
    .setTitle("Sexuality Roles")
    .setDescription(`:kiss_woman_man: **Heterosexual\n:kiss_mm: Homosexual\n:kiss_ww: Lesbian\n:man_shrugging: Bisexual\n:woman_gesturing_no: Other(Ask-Me!)\n:smiling_imp: Homiesexual**`)
    .setFooter("React with the emote beside the role you want!")
    .setColor('#5E9BF7')

    const sexualityMessage = `c!rr addmany ${message.channel.id} MESSGAE_ID_HERE \n:kiss_woman_man: Sexuality:Heterosexual\n:kiss_mm: Sexuality:Homosexual\n:kiss_ww: Sexuality:Lesbian\n:man_shrugging: Sexulity:Bisexual\n:woman_gesturing_no: Sexuality:Other(Ask-Me!)\n:smiling_imp: Sexuality:Homiesexual`

    const pingEmbed = new Discord.MessageEmbed()
    .setTitle("Ping Roles")
    .setDescription(`:bangbang: **Announcements\n:tada: Giveaways\n:fire: Events\n:hammer_pick: Updates\n:handshake: Partnerships\n:smiling_imp: Ping Me Daddy~**`)
    .setFooter("React with the emote beside the role you want!")
    .setColor('#5E9BF7')

    const pingMessage = `c!rr addmany ${message.channel.id} MESSGAE_ID_HERE \n:bangbang: [@] Announcements\n:tada: [@] Giveaways\n:fire: [@] Events\n:hammer_pick: Updates\n:handshake: Partnerships\n:smiling_imp: [@] Ping Me Daddy~`

    const gamingEmbed = new Discord.MessageEmbed()
    .setTitle("Gaming Channel Access")
    .setDescription(`:video_game: **Gaming**`)
    .setFooter("React with the emote to gain access to our Gaming Channels")
    .setColor('#5E9BF7')

    const gamingMessage = `c!rr add ${message.channel.id} MESSGAE_ID_HERE :video_game: Gaming`

    message.delete();
    message.channel.send(genderEmbed).then(() => {
      message.channel.send(ageEmbed).then(() => {
        message.channel.send(sexualityEmbed).then(() => {
          message.channel.send(pingEmbed).then(() => {
            message.channel.send(gamingEmbed).then(() => {
              message.channel.send(genderMessage).then(() => {
                message.channel.send(ageMessage).then(() => {
                  message.channel.send(sexualityMessage).then(() => {
                    message.channel.send(pingMessage).then(() => {
                      message.channel.send(gamingMessage).then(() => {
                        message.channel.send("All set!").then(m => m.delete({timeout: 2000}))
                      })
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
