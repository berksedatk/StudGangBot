const Discord = require("discord.js");

module.exports = {
  name: "kiss",
  category: "Fun",
  description: "Kiss your lover, or your best friend or whatever idk",
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
    if (!reciever) return message.channel.send(":x: | You need someone to kissy wissy, mention them!");

    const images = [
'https://noodle.is-big.gay/syHaQs4AO',
'https://noodle.is-big.gay/E1NkVqqbs.gif',
'https://noodle.is-big.gay/UgljrnYw9.gif',
'https://noodle.is-big.gay/RcCzqJ0oY.gif',
'https://noodle.is-big.gay/cPqDTOEPX.gif',
'https://noodle.is-big.gay/1xr0Mw7xt.gif',
'https://noodle.is-big.gay/jULdWOYDT.gif',
'https://noodle.is-big.gay/R0CdwDAFQ.gif',
'https://noodle.is-big.gay/Jkusb3n0P.gif',
'https://noodle.is-big.gay/QycnJG7Vt.gif',
'https://noodle.is-big.gay/WPYWOryDV.gif',
'https://noodle.is-big.gay/u2BpL-Pt1.gif',
'https://noodle.is-big.gay/8Hvmv5DGf.gif',
'https://noodle.is-big.gay/auoM6xJio.gif',
'https://noodle.is-big.gay/RXF4WEuLJ.gif',
'https://noodle.is-big.gay/7JKQcnw3F.gif',
'https://noodle.is-big.gay/3kTKm4H_V.gif',
'https://noodle.is-big.gay/-xQWYfDFI.gif',
'https://noodle.is-big.gay/OH_p97po4.gif'
    ]
    
    const image = images[Math.floor(Math.random() * images.length)];
  
    const kissEmbed = new Discord.MessageEmbed()
    .setDescription(`${message.mentions.users.first()} ^3^ *mwah*`)
    .setImage(image)
    .setColor('RANDOM')
    message.channel.send(kissEmbed)
  }
};
