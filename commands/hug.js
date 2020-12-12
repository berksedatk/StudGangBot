const Discord = require("discord.js");

module.exports = {
  name: "hug",
  category: "Fun",
  description: "Huggy wuggy someone uwu",
  usage: "[mention]",
  cooldown: 5,
  guildOnly: true,
  sped: true,
  exchannels: [
    {id: "548949556210040862", cooldown: 20}
  ],
  execute(bot, message, args) {
    const author = message.author;
    const reciever = message.mentions.users.first();
    if (message.mentions.everyone === true) {
      const everyoneEmbed = new Discord.MessageEmbed()
      .setDescription(`${message.author} HUGS EVERYONE HOLY SHIT!`)
      .setImage("https://cdn.discordapp.com/emojis/758607101446062081.png")
      .setColor("RANDOM")
      message.channel.send(everyoneEmbed) 
    } else {
    if (!reciever) return message.channel.send(":x: | You need someone to hug, mention them!");

    const images = [
'https://noodle.is-big.gay/yZwGput4p.gif', 
'https://noodle.is-big.gay/QEKyI9QiO.gif',
'https://noodle.is-big.gay/BrGpGu2TF.gif',
'https://noodle.is-big.gay/bkGN89pNv.gif',
'https://noodle.is-big.gay/y-rO1Uej1.gif',
'https://noodle.is-big.gay/mD14RayzC.gif',
'https://noodle.is-big.gay/4iPq8y0Yq.gif',
'https://noodle.is-big.gay/-9nr86ren.gif',
'https://noodle.is-big.gay/PtfWkOvOb.gif',
'https://noodle.is-big.gay/Q11B2GkDB.gif',
'https://noodle.is-big.gay/DEZ_a9t6N.gif',
'https://noodle.is-big.gay/WdG78nleH.gif'
    ]
    
    const image = images[Math.floor(Math.random() * images.length)];
  
    const hugEmbed = new Discord.MessageEmbed()
    .setDescription(`${message.mentions.users.first()} Huggy Wuggy :3`)
    .setImage(image)
    .setColor('RANDOM')
    message.channel.send(hugEmbed)
   }
  }
};
