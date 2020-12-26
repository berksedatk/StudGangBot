const Discord = require("discord.js");

module.exports = {
  name: "pet",
  category: "Fun",
  description: "Pet pet pet pet pet pet pet pet pet pet pet pet pet pet pet pet pet pet pet pet pet pet pet pet pet pet pet pet",
  usage: "[mention]",
  cooldown: 5,
  guildOnly: true,
  aliases: "pat",
  sped: true,
  exchannels: [
    {id: "548949556210040862", cooldown: 20}
  ],
  execute(bot, message, args) {
    const author = message.author;
    const reciever = message.mentions.users.first();
    if (!reciever) return message.channel.send(":x: | You need someone to pet pet pet pet pet pet pet pet pet pet pet pet pet pet!");

    const images = [
'https://noodle.is-big.gay/NdtSTyVT6.gif',
'https://noodle.is-big.gay/Xc9ysDWpq.gif',
'https://noodle.is-big.gay/0nsYGN2hb.gif',
'https://noodle.is-big.gay/joG9ZZB9y.gif',
'https://noodle.is-big.gay/WgyaYRLyG.gif',
'https://noodle.is-big.gay/kpu3R_zzm.gif',
'https://noodle.is-big.gay/l0tkSZeXz.gif',
'https://noodle.is-big.gay/XE-EnFCft.gif',
'https://noodle.is-big.gay/H3ffI3VxS.gif',
'https://noodle.is-big.gay/s9OnSCXoh.gif'
    ]
    
    const image = images[Math.floor(Math.random() * images.length)];
  
    const petEmbed = new Discord.MessageEmbed()
    .setDescription(`${message.author} pets ${message.mentions.users.first()} gently :3`)
    .setImage(image)
    .setColor('RANDOM')
    message.channel.send(petEmbed)
  }
};
