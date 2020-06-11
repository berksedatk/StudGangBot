const Discord = require('discord.js')

module.exports = {
  name: "turkish",
  category: "Fun",
  description: "Sax? Turkish!",
  unstaged: true,
  blacklisted: true,
  cooldown: 5,
  execute(bot, message, args) {
    const list = [
      "https://cdn.discordapp.com/attachments/548949556210040862/704697080706367569/sax.png",
      "https://cdn.discordapp.com/attachments/701214262667771904/704466900696170606/IMG-20180522-WA0000.jpg",
      "https://cdn.discordapp.com/attachments/701214262667771904/704466853443010570/image0-17.jpg",
      "https://cdn.discordapp.com/attachments/701214262667771904/704466764544868460/20200109_235101.jpg",
      "https://cdn.discordapp.com/attachments/701214262667771904/704466701315735605/20200119_200040.jpg",
      "https://cdn.discordapp.com/attachments/701214262667771904/704466664124579860/20200113_222950.jpg",
      "https://cdn.discordapp.com/attachments/701214262667771904/704466631891484734/20200202_180000.jpg",
      "https://cdn.discordapp.com/attachments/701214262667771904/704466631526449193/20200201_230005.jpg",
      "https://cdn.discordapp.com/attachments/701214262667771904/704466631052754964/20200201_201056.jpg",
      "https://cdn.discordapp.com/attachments/701214262667771904/704466460877258823/20200312_081931.jpg",
      "https://cdn.discordapp.com/attachments/701214262667771904/704466414479605781/20200312_194415.jpg",
      "https://cdn.discordapp.com/attachments/701214262667771904/704466391784226956/20200312_081844.jpg",
      "https://cdn.discordapp.com/attachments/701214262667771904/704466321496211566/IMG_20200324_224754_396.jpg",
      "https://cdn.discordapp.com/attachments/701214262667771904/704466244451041411/IMG-20200328-WA0002.jpg",
      "https://cdn.discordapp.com/attachments/701214262667771904/704466237958127707/20200420_024132.jpg",
      "https://cdn.discordapp.com/attachments/701214262667771904/704466237245227098/20200420_025121.jpg",
      "https://cdn.discordapp.com/attachments/701214262667771904/704466136434999487/Untitled133_20200425181442.png",
      "https://cdn.discordapp.com/attachments/701214262667771904/704466103338008636/Snapchat-1827528850.jpg"
    ]
      
    const slapEmbed = new Discord.MessageEmbed()
    .setDescription(`SAX? WHITEST TURKISH EVER`)
    .setImage(list[Math.floor(Math.random() * list.length)])
    .setColor('RANDOM')
    message.channel.send(slapEmbed)
  }
};
