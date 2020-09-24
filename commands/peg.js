const Discord = require("discord.js");

module.exports = {
  name: "peg",
  category: "Fun",
  description: "Peg Someone.. <:SG_FLOOOOOOSHED:758607101446062081>",
  aliases: ["pegg"],
  usage: "[mention]",
  cooldown: 5,
  guildOnly: true,
  execute(bot, message, args) {
    const author = message.author;
    const reciever = message.mentions.users.first();
    if (!reciever) return message.channel.send(":x: | You need someone to peg, mention them!");
    const response = [
      `${author} starts pegging ${reciever}.. <:SG_FLOOOOOOSHED:758607101446062081>`,
      `The strange e-couple in the server, ${author} and ${reciever}, start pegging eachother. :sob:`

    ]
    const images = [
      'https://cdn.discordapp.com/attachments/675728032203407387/756457955846520892/animegrin_1.gif',
      'https://cdn.discordapp.com/attachments/675728032203407387/756457977963085824/animegrin_2.gif',
      'https://cdn.discordapp.com/attachments/675728032203407387/756458046749671454/animegrin_3.gif',
      'https://cdn.discordapp.com/attachments/675728032203407387/756458072670470174/animegrin_4.gif',
      'https://cdn.discordapp.com/attachments/675728032203407387/756458154732027934/animegrin_5.gif',
      'https://cdn.discordapp.com/attachments/675728032203407387/756458200479301652/animegrin_6.gif',
      'https://cdn.discordapp.com/attachments/675728032203407387/756458254208335943/animegrin_7.gif',
      'https://cdn.discordapp.com/attachments/675728032203407387/756458322827411466/animegrin_8.gif',
      'https://cdn.discordapp.com/attachments/675728032203407387/756458354888671333/animegrin_9.gif',
      'https://cdn.discordapp.com/attachments/697244050293653605/756756637401743420/animegrin_10.gif'
    ]
    
    const answer = response[Math.floor(Math.random() * response.length)];  
    const image = images[Math.floor(Math.random() * images.length)];
  
    const pegEmbed = new Discord.MessageEmbed()
    .setDescription(answer)
    .setImage(image)
    .setColor('RANDOM')
    message.channel.send(pegEmbed)
  }
};
