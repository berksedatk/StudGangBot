const Discord = require("discord.js");

module.exports = {
  name: "fight",
  category: "Fun",
  description: "Fight some random stupid thot in chat lmao",
  aliases: ['heck'],
  usage: "[mention]",
  cooldown: 5,
  guildOnly: true,
  async execute(bot, message, args) {
    let author = message.author;
    let reciever = message.mentions.users.first();
    if (!reciever) return message.channel.send(":x: | You need someone to fight, mention them!");
    const response = [
      `Live view of ${author} literally killing ${reciever}.. <:SG_Worried_Kirby:662514338963390494>`,
      `As ${author} is losing the fight with ${reciever}, ${reciever}'s whore ass slaps ${author}'s huge cock. <:SG_Flooooooshed:673264250319405064>`,
      `${author}'s poor ass tries to fight ${reciever} even tho they have more dino nuggets. <:(`,
    ]
    const images = [
      `https://cdn.discordapp.com/attachments/697244050293653605/733203679049416835/animefight_1.gif`,
      `https://cdn.discordapp.com/attachments/697244050293653605/733204952440111124/animefight_2.gif`,
      `https://cdn.discordapp.com/attachments/697244050293653605/733203974576144384/animefight_3.gif`,
      `https://cdn.discordapp.com/attachments/697244050293653605/733205103766667274/animefight_4.gif`,
      `https://cdn.discordapp.com/attachments/697244050293653605/733204168298463292/animefight_5.gif`,
      `https://cdn.discordapp.com/attachments/697244050293653605/733204323982376971/animefight_6.gif`,
      `https://cdn.discordapp.com/attachments/697244050293653605/733204434729041980/animefight_7.gif`,
      `https://cdn.discordapp.com/attachments/697244050293653605/733205239997661255/animefight_8.gif`,
      `https://cdn.discordapp.com/attachments/697244050293653605/733205366032302151/animefight_9.gif`,
      `https://cdn.discordapp.com/attachments/697244050293653605/733205447007404035/animefight_10.gif`,
      `https://cdn.discordapp.com/attachments/697244050293653605/733205523373228072/animefight_11.gif`,
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
