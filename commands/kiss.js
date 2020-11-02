const Discord = require("discord.js");

module.exports = {
  name: "kiss",
  category: "Fun",
  description: "Kiss your lover, or your best friend or whatever idk",
  usage: "[mention]",
  cooldown: 5,
  guildOnly: true,
  exchannels: [
    {id: "548949556210040862", cooldown: 20}
  ],
  execute(bot, message, args) {
    const author = message.author;
    const reciever = message.mentions.users.first();
    if (!reciever) return message.channel.send(":x: | You need someone to kissy wissy, mention them!");

    const images = [
      'https://cdn.discordapp.com/attachments/687865931938136109/700467616870826024/002kiss.gif',
      'https://cdn.discordapp.com/attachments/687865931938136109/700468778651222126/002kiss2.gif',
      'https://cdn.discordapp.com/attachments/687865931938136109/700469129727049749/animekiss.gif',
      'https://cdn.discordapp.com/attachments/687865931938136109/700469420077613056/animekiss2.gif',
      'https://cdn.discordapp.com/attachments/687865931938136109/700469786710376478/animekiss3.gif',
      'https://cdn.discordapp.com/attachments/687865931938136109/700470171911061604/animekiss4.gif',
      'https://cdn.discordapp.com/attachments/687865931938136109/700470630289637456/animekiss5.gif',
      'https://cdn.discordapp.com/attachments/687865931938136109/700470969311035444/animekiss6.gif',
      'https://cdn.discordapp.com/attachments/687865931938136109/700471793307353118/animekiss7.gif',
      'https://cdn.discordapp.com/attachments/687865931938136109/700472565239513228/animekiss8.gif',
      'https://cdn.discordapp.com/attachments/687865931938136109/700473665774419998/animekiss9.gif',
      'https://cdn.discordapp.com/attachments/652681168994697236/700014025391472741/c2e2d217850896f642facdb2488943f7.gif'
    ]
    
    const image = images[Math.floor(Math.random() * images.length)];
  
    const kissEmbed = new Discord.MessageEmbed()
    .setDescription(`${message.mentions.users.first()} ^3^ *mwah*`)
    .setImage(image)
    .setColor('RANDOM')
    message.channel.send(kissEmbed)
  }
};
