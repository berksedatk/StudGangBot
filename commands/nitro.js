const Discord = require("discord.js");

module.exports = {
  name: "nitro",
  category: "Utility",
  description: "Troll",
  cooldown: 5,
  guildOnly: true,
  unstaged: true,
  reqPermissions: ['MANAGE_MESSAGES'],
  execute(bot, message, args) {
    if (!args[0]) return message.channel.send(':x: | You have to mention the channel to send the embed..');

    let channel = message.mentions.channels.first() ? message.mentions.channels.first()
    : (message.guild.channels.cache.get(args[0]) ? message.guild.channels.cache.get(args[0])
    : undefined)

    if (!channel) return message.channel.send(":x: | You didn't provide a true channel.");

    const msgEmbed = new Discord.MessageEmbed()
    .setAuthor("Nitro Gifting Community", "https://cdn.discordapp.com/emojis/585595632610181196.gif?v=1")
    .setColor('#f47fff')
    .setFooter("By Nitro Boost Team™", "https://cdn.discordapp.com/emojis/585558042309820447.png?v=1")
    .setTitle("You have been gifted Monthly Discord Nitro!")
    .setThumbnail("https://cdn.discordapp.com/attachments/630515339205279774/721347414291644416/Do-You-Keep-Discord-Nitro-Games-Forever.png")
    .setImage("https://cdn.discordapp.com/attachments/630515339205279774/721347228018671616/discord-nitro-games-oyun-servisini-kapatiyor-687x400.png")
    .setDescription("Congratulations! You won the Free Monthly Discord Nitro by chosing from **451974** other members. \n\nTo claim your prize please click on the link below: \n\n**[https://discord.gift/5fyQGgGKkyNDHkdhd7](https://www.youtube.com/watch?v=dQw4w9WgXcQ)** \n\nThis gift will expire in **48 hours**, be quick!")
    channel.send(msgEmbed)
  }
};
