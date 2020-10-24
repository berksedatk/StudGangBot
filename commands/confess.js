const Discord = require("discord.js");

module.exports = {
  name: "confess",
  category: "Fun",
  description: "Puts a message anon into the confession channel.",
  usage: "<message>",
  cooldown: 300,
  execute(bot, message, args) {
    const msg = message.channel.id
    if (message.channel.type != "dm") return message.channel.send(":x: | This command can only be executed in DM's.");
    if (!bot.guilds.cache.get("548949555597803550").members.cache.get(message.author.id)) return message.channel.send(":x: | This command can only be executed by StudGang members. To join the server please use this invite: https://discord.gg/dysKCmx")

    const filter = ['n1gg3r','nigga','n1gger','raid','n1gga','niggеr','niggers','n!gger','nigger','n!gga','n!gg3r','nlgga','nlgger','nlgg3r','n1gg3r','n1gg@',"n1gg@","n1gga","negro","n¡gg3r","fag",
"retard","faggot","n i g g e r","k k k","beaner","b e a n e r","be a ner","b e a ner","be an er","be an e r",'niggar','niggair','wetback','w e t b a c k','wet ba ck',
'we tback','w e tback','rëtard','rétard','retarted','retarded',
'r.e.t.a.r.d','r3tard','nigg3rs','nigg3r','retar.d','n1gg3r','nlgger','queer','qu e e r','que e r','qu ee r',
'q u e e r','qeer','quuer','quer','fags','chink','dike','niggar','niggur','nigor','nigre','nigar','niggah','nigguh','Niglet','nigglet','Nigra','negra','niggra',
'nigrah','nigruh','chinki','chinky','Spic','spick','spik','spig','dike','spigotty','whitey','nazi','Wigger','Wigga','wegro','nikker','nicker','icker','nikker','nikka','nibbah','nibba','nicka',
'jews','jews','f a g g o t','f a g','queer','q u e e r','qu e e r','quee r','q u e er','quee er','quee e r','qu ee r','quee r','q ueer','queer','q ueer','q uee r','rape','rapist','molest','molester',
'molestar','nibb','fagot','faget','kys','kill your self','k y s']

    const titleList = [
      "As I heard from a Anonymous person",
      "A Anonymous person is confessing this",
      "Here is the Anonymous person's truth",
      "They were too shy to reveal it but here is Anonymous person's confession"
    ]
    if (!args[0]) return message.channel.send(":x: | You need a message to put in confession.")
    const regex = /(https?:\/\/[^\s]+)/g
    let inp = false
    let confession = args.join(" ")
    let bad = false
    filter.forEach(word => {
      if (confession.includes(word)) bad = true
    })

    if (bad) return message.channel.send(":x: | You can't use a blacklisted word in your message.")
    
    if (regex.test(message.content)) inp = true

    if (inp === true) return message.channel.send(':x: | You cannot use links in your confession!')
      
    let confessEmbed = new Discord.MessageEmbed()
    .setTitle(titleList[Math.floor(Math.random() * titleList.length)])
    .setColor("#efefef")
    .setDescription(confession)

    bot.channels.cache.get("730994932424245258").send(confessEmbed).then(() => {
      message.channel.send("Your confession has been sent in <#730994932424245258>")
    })
  }
};
