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
      'https://cdn.discordapp.com/attachments/687865931938136109/700733282735620116/Animeheadpat.gif',
      'https://cdn.discordapp.com/attachments/687865931938136109/700733984484622408/Animeheadpat1.gif',
      'https://cdn.discordapp.com/attachments/687865931938136109/700734272608272515/Animeheadpat2.gif',
      'https://cdn.discordapp.com/attachments/687865931938136109/700735109552275466/Animeheadpat3.gif',
      'https://cdn.discordapp.com/attachments/687865931938136109/700735377287282718/Animeheadpat4.gif',
      'https://cdn.discordapp.com/attachments/687865931938136109/700735690228498492/Animeheadpat5.gif',
      'https://cdn.discordapp.com/attachments/687865931938136109/700736191539970129/Animeheadpat7.gif',
      'https://cdn.discordapp.com/attachments/687865931938136109/700736271945040012/Animeheadpat6.gif',
      'https://cdn.discordapp.com/attachments/687865931938136109/700737309829759047/Animeheadpat8.gif',
      'https://cdn.discordapp.com/attachments/687865931938136109/700739323120844851/Animeheadpat9.gif'
    ]
    
    const image = images[Math.floor(Math.random() * images.length)];
  
    const petEmbed = new Discord.MessageEmbed()
    .setDescription(`${message.author} pets ${message.mentions.users.first()} gently :3`)
    .setImage(image)
    .setColor('RANDOM')
    message.channel.send(petEmbed)
  }
};
