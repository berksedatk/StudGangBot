const Discord = require("discord.js");

module.exports = {
  name: "confess",
  category: "Fun",
  description: "Puts a message anon into the confession channel.",
  usage: "<message>",
  cooldown: 300,
  execute(bot, message, args) {
    if (message.channel.type != "dm") return message.channel.send(":x: | This command can only be executed in DM's.");
    if (!bot.guilds.cache.get("548949555597803550").members.cache.get(message.author.id)) return message.channel.send(":x: | This command can only be executed by StudGang members. To join the server please use this invite: https://discord.gg/dysKCmx")

    const filter = ["Niggеr","nigga","n1gg@","n1gga","negro","n¡gg3r","n¡gger","fag","nigger","retard","faggot","n i g g e r","k k k","beaner","b e a n e r","be a ner","b e a ner","be an er","be an e r",
        'niggar','niggair','wetback','w e t b a c k','wet ba ck','we tback','w e tback','wet bac k','niggèr','rëtard','rétard','retarted','retarded',
        'r.e.t.a.r.d','r3tard','nigg3rs','nigg3r','retar.d','n1gg3r','nlgger','queer','qu e e r','que e r','qu ee r','q u e e r','q-e-e-r','quuer','quer','fags']

    const titleList = [
      "As I heard from a Anonymous person",
      "A Anonymous person is confessing this",
      "Here is the Anonymous person's truth",
      "They were too shy to reveal it but here is Anonymous person's confession"
    ]

    if (!args[0]) return message.channel.send(":x: | You need a message to put in confession.")

    let confession = args.join(" ")

    filter.forEach(word => {
      if (confession.includes(word)) return message.channel.send(":x: | You can't use a blacklisted word in your message.")
    })

    let confessEmbed = new Discord.MessageEmbed()
    .setTitle(titleList[Math.floor(Math.random() * titleList.length)])
    .setColor("#efefef")
    .setDescription(confession)

    bot.channels.cache.get("730994932424245258").send(confessEmbed).then(() => {
      message.channel.send("Your confession has been sent in <#730994932424245258>")
    })
  }
};
