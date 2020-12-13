const Discord = require("discord.js");

module.exports = {
  name: "fight",
  category: "Fun",
  description: "Fight some random stupid thot in chat lmao",
  aliases: ['heck'],
  usage: "[mention]",
  cooldown: 5,
  guildOnly: true,
  sped: true,
  exchannels: [
    {id: "548949556210040862", cooldown: 20}
  ],
  async execute(bot, message, args) {
    let author = message.author;
    let reciever = message.mentions.users.first();
    if (!reciever) return message.channel.send(":x: | You need someone to fight, mention them!");
    const response = [
      `Live view of ${author} literally killing ${reciever}.. <:SG_Worried_Kirby:662514338963390494>`,
      `As ${author} is losing the fight with ${reciever}, ${reciever}'s whore ass slaps ${author}'s huge cock. <:SG_Flooooooshed:673264250319405064>`,
      `${author}'s poor ass tries to fight ${reciever} even tho they have more dino nuggets. <:(`
    ]
    const images = [
'https://noodle.is-big.gay/2LLeIFwc2.gif',
'https://noodle.is-big.gay/xXTPX6ynm.gif',
'https://noodle.is-big.gay/1pahfhG4D.gif',
'https://noodle.is-big.gay/E3mL07xKr.gif',
'https://noodle.is-big.gay/4CoCOhG9K.gif',
'https://noodle.is-big.gay/Rxs0577MQ.gif',
'https://noodle.is-big.gay/FOIQ6oZMB.gif',
'https://noodle.is-big.gay/eQvVE2ncr.gif',
'https://noodle.is-big.gay/USlpIkF1y.gif',
'https://noodle.is-big.gay/-RCxTQDMc.gif',
'https://noodle.is-big.gay/bzpDRIEVu.gif'
    ]
    
    const answer = response[Math.floor(Math.random() * response.length)];  
    const image = images[Math.floor(Math.random() * images.length)];
    
    const fightEmbed = new Discord.MessageEmbed()
    .setDescription(answer)
    .setImage(image)
    .setColor('RANDOM')
    message.channel.send(fightEmbed)
  }
};
