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
      `Live view of ${author} literally killing ${reciever}.. <:SG_Worried_Kirby:662514338963390494> `,
      `As ${author} is losing the fight with ${reciever}, ${reciever}'s whore ass slaps ${author}'s huge cock. <:SG_Flooooooshed:673264250319405064> `,
      `${author}'s poor ass tries to fight ${reciever} even tho they have more dino nuggets. <:(`,
    ]
    const images = [
      'https://tenor.com/view/fight-smash-girl-fight-gif-15340791',
      'https://tenor.com/view/kick-anime-fight-angry-gif-16836989',
      'https://tenor.com/view/slap-handaseishuu-narukotoishi-barakamonanime-barakamon-gif-5509136',
      'https://tenor.com/view/dragonball-fight-owned-one-piece-gif-5222656',
      'https://tenor.com/view/bear-fight-hit-teddy-bear-kids-gif-12373244',
      'https://tenor.com/view/relationship-anime-fight-arguing-gif-9778017'
      'https://tenor.com/view/angel-beats-wrestle-baseball-fight-couple-gif-5467430',
      'https://tenor.com/view/anime-funny-fight-gif-11425457',
      'https://tenor.com/view/anime-kick-fight-gif-15460532',
      'https://tenor.com/view/anime-punch-fight-slam-wall-gif-5012110',
      'https://tenor.com/view/sword-art-online-kirito-asuna-fierce-battle-gif-5349066',
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
