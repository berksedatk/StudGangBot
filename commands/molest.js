const Discord = require("discord.js");

module.exports = {
  name: "molest",
  category: "Fun",
  description: "Molest someone and to things to them without their permission! >:3",
  aliases: ['fuck'],
  usage: "[mention]",
  cooldown: 5,
  guildOnly: true,
  async execute(bot, message, args) {
    let author = message.author;
    let reciever = message.mentions.users.first();
    if (!reciever) return message.channel.send(":x: | You need someone to molest, mention them! >:3");
    const response = [
      `Live view of ${author} molesting ${reciever}`,
      `${author} molests ${reciever} as Sensei is watching.`,
      `Known molester, ${author}, molests ${reciever} once again!`,
      `Trainee Molester, ${author}, molest ${reciever} as the CEO of molesters, Sensei, watches over them.`,
      `${author} molests ${reciever} before they even get out of the adoption centre!`,
      `${author} once again is molesting ${reciever} for the 3rd time today!`,
      `As ${author} is molesting ${reciever}, he thinks how greatful his master, Sensei, is to have him.`,
      `Ever since ${author}'s ex girlfriend/boyfriend left them, he has been molesting children under the age of 12, kind of like ${reciever}.`,
      `For 1248th time today, ${author} is molesting ${reciever}.`,
      `Ffs, ${author} is molesting ${reciever} again!`,
      `*as Sensei is holding a camera* ${author} is once again molesting ${reciever}. We've lost count.`,
      `*as eli, the pro molester is recording* ${author} is once again molesting ${reciever}. We've now completely lost count of how many times he has molested children.`
    ]
    const images = [
      'https://cdn.discordapp.com/attachments/687865931938136109/699946812265726013/LMAOsenseitherapist.gif',
      'https://cdn.discordapp.com/attachments/687865931938136109/699947557240963212/senseirapingagain.gif',
      'https://cdn.discordapp.com/attachments/687865931938136109/699945670152421447/H1urgT5-f.gif',
      'https://cdn.discordapp.com/attachments/687865931938136109/699948016567713792/senseirapingsmh.gif',
      'https://cdn.discordapp.com/attachments/687865931938136109/699948665388925009/senseirapingsmh2.gif',
      'https://cdn.discordapp.com/attachments/687865931938136109/699950234171605082/senseilickinglilgirls.gif'
    ]
    
    const answer = response[Math.floor(Math.random() * response.length)];  
    const image = images[Math.floor(Math.random() * images.length)];
    
    const molestEmbed = new Discord.MessageEmbed()
    .setDescription(answer)
    .setImage(image)
    .setColor('RANDOM')
    message.channel.send(molestEmbed)
  }
};