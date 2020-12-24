const Discord = require("discord.js");

module.exports = {
  name: "snipe",
  category: "Misc",
  description: "Snipe those deleted messages",
  cooldown: 5,
  sped: true,
  exchannels: [
    {id: "548949556210040862", cooldown: 5}
  ],
  blacklistedChannels: ["791317380521394186","791317317140217866","791319900550725643","791319939348561930","791318245718097971","791317348735909928","791317335695818752","791318209978302474"],
  guildOnly: true,
  execute(bot, message, args) {
    const msg = bot.snipes.get(message.channel.id)
    if (!msg) return message.channel.send('Theres nothing to snipe!');

    const blacklist = ['194666207440273408','495248175808905226','401873000053342208','761733935210168370']//if youre seeing this ur seci :flooshed: - no u - NO U - k
    const filter = ['n1gg3r','nigga','n1gger','raid','n1gga','niggеr','niggers','n!gger','nigger','n!gga','n!gg3r','nlgga','nlgger','nlgg3r','n1gg3r','n1gg@',"n1gg@","n1gga","negro","n¡gg3r","fag",
"retard","faggot","n i g g e r","k k k","beaner","b e a n e r","be a ner","b e a ner","be an er","be an e r",'niggar','niggair','wetback','w e t b a c k','wet ba ck',
'we tback','w e tback','rëtard','rétard','retarted','retarded',
'r.e.t.a.r.d','r3tard','nigg3rs','nigg3r','retar.d','n1gg3r','nlgger','queer','qu e e r','que e r','qu ee r',
'q u e e r','qeer','quuer','quer','fags','chink','dike','niggar','niggur','nigor','nigre','nigar','niggah','nigguh','Niglet','nigglet','Nigra','negra','niggra',
'nigrah','nigruh','chinki','chinky','Spic','spick','spik','spig','dike','spigotty','whitey','nazi','Wigger','Wigga','wegro','nikker','nicker','icker','nikker','nikka','nibbah','nibba','nicka',
'jews','jews','f a g g o t','f a g','queer','q u e e r','qu e e r','quee r','q u e er','quee er','quee e r','qu ee r','quee r','q ueer','queer','q ueer','q uee r','rape','rapist','molest','molester',
'molestar','nibb','fagot','faget','kys','kill your self','k y s']
    const regex = /(https?:\/\/[^\s]+)/g

    let snipeEmbed = new Discord.MessageEmbed()
    .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
    .setColor('RANDOM')
    .setFooter(`Requested by ${message.author.tag}`)

    let inp = false
    filter.forEach(word => {
      if (msg.content.toLowerCase().includes(word)) inp = true
    })

    if (regex.test(msg.content)) inp = true

    if (inp === true || msg.content.length > 250) {
      snipeEmbed.setDescription('~~Inappropriate Message~~')
    } else if (blacklist.includes(msg.author.id)) {
      snipeEmbed.setDescription('~~This person is blacklisted!~~')
    } else {
      snipeEmbed.setDescription(msg.content)
      if (msg.attachment) snipeEmbed.setImage(msg.attachment);
    }

    message.channel.send(snipeEmbed)
  }
};
