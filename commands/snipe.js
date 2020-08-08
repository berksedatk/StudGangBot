const Discord = require("discord.js");

module.exports = {
  name: "snipe",
  category: "Misc",
  description: "Snipe those deleted messages",
  cooldown: 5,
  guildOnly: true,
  execute(bot, message, args) {
    const msg = bot.snipes.get(message.channel.id)
    if (!msg) return message.channel.send('Theres nothing to snipe!');

    const blacklist = ["730795824006692865","534349263422095370","474231127163404289","474231127163404289","642589313988558897",'194666207440273408','495248175808905226','401873000053342208','478721209224265748','230084136868642818']//if youre seeing this ur seci :flooshed: - no u - NO U - k
    const filter = ["fag","chris","niggеr","negro","n¡gg3r","n¡gger","rape","rap3","r4pe","r4p3","nigger","retard","faggot","n i g g e r","kkk","k k k","beaner","b e a n e r","be a ner","b e a ner","be an er","be an e r",
      'niggar','niggair','wetback','w e t b a c k','wet ba ck','we tback','w e tback','wet bac k','niggèr','rëtard','rétard','retarted','retarded',
      'r.e.t.a.r.d','r3tard','nigg3rs','nigg3r','retar.d','n1gg3r','nlgger','queer','qu e e r','que e r','qu ee r','q u e e r','q-e-e-r','quuer','quer','fags']
    const regex = /(https?:\/\/[^\s]+)/g

    let snipeEmbed = new Discord.MessageEmbed()
    .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
    .setColor('RANDOM')

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
