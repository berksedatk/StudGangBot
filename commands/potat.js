const Discord = require('discord.js')

module.exports = {
  name: "lilhuddy",
  category: "Fun",
  description: "Potato is 13 year old Lil Huddy",
  blacklisted: true,
  unstaged: true,
  cooldown: 5,
  aliases: ["potat"],
  execute(bot, message, args) {
    const list = [
      "https://cdn.discordapp.com/attachments/586378281167749130/704597136523788609/Screenshot_20200428-023514_Gallery.jpg",
      "https://cdn.discordapp.com/attachments/586378281167749130/704597137190551552/Screenshot_20200428-023448_Gallery.jpg",
      "https://cdn.discordapp.com/attachments/586378281167749130/704597137656250428/Screenshot_20200428-023434_Gallery.jpg",
      "https://cdn.discordapp.com/attachments/586378281167749130/704597138121687130/Screenshot_20200428-023407_Gallery.jpg",
      "https://cdn.discordapp.com/attachments/586378281167749130/704597138646106162/Screenshot_20200428-023356_Gallery.jpg",
      "https://cdn.discordapp.com/attachments/586378281167749130/704597190806470716/Screenshot_20200428-023314_Gallery.jpg",
      "https://cdn.discordapp.com/attachments/586378281167749130/704597191477690398/Screenshot_20200428-023303_Gallery.jpg",
      "https://cdn.discordapp.com/attachments/586378281167749130/704597191838269490/Screenshot_20200428-023244_Gallery.jpg",
      "https://cdn.discordapp.com/attachments/586378281167749130/704597192186265631/Screenshot_20200428-023216_Gallery.jpg",
      "https://cdn.discordapp.com/attachments/586378281167749130/704597192664547338/Screenshot_20200428-023153_Gallery.jpg",
      "https://cdn.discordapp.com/attachments/586378281167749130/704597192987377694/Screenshot_20200428-023140_Gallery.jpg",
      "https://cdn.discordapp.com/attachments/586378281167749130/704597258687217684/Screenshot_20200428-023123_Gallery.jpg",
      "https://cdn.discordapp.com/attachments/586378281167749130/704597259081351182/Screenshot_20200428-023059_Gallery.jpg",
      "https://cdn.discordapp.com/attachments/586378281167749130/704597259458969620/Screenshot_20200428-023047_Gallery.jpg",
      "https://cdn.discordapp.com/attachments/586378281167749130/704597259962286140/Screenshot_20200428-023036_Gallery.jpg",
      "https://cdn.discordapp.com/attachments/586378281167749130/704597260335317082/Screenshot_20200428-023023_Gallery.jpg",
      "https://cdn.discordapp.com/attachments/586378281167749130/704597260985565265/Screenshot_20200428-022949_Gallery.jpg",
      "https://cdn.discordapp.com/attachments/586378281167749130/704597306359414814/Screenshot_20200428-022925_Gallery.jpg",
      "https://cdn.discordapp.com/attachments/586378281167749130/704597306741227622/Screenshot_20200428-022856_Gallery.jpg",
      "https://cdn.discordapp.com/attachments/586378281167749130/704597307064320020/Screenshot_20200428-022841_Gallery.jpg",
      "https://cdn.discordapp.com/attachments/586378281167749130/704597307341013062/Screenshot_20200428-022821_Gallery.jpg",
      "https://cdn.discordapp.com/attachments/586378281167749130/704598243568255074/Snapchat-1110526616.jpg",
      "https://cdn.discordapp.com/attachments/586378281167749130/704598243761324032/Snapchat-1360980190.jpg",
      "https://cdn.discordapp.com/attachments/586378281167749130/704598243987816478/Snapchat-93743439.jpg",
      "https://cdn.discordapp.com/attachments/586378281167749130/704598244218503198/Snapchat-704790397.jpg",




    ]//she should also send you nudes as well holy sheit sax
    
    const potatEmbed = new Discord.MessageEmbed()
    .setDescription(`Admire Potat/Lil Huddy <:)`)
    .setImage(list[Math.floor(Math.random() * list.length)])
    .setColor('RANDOM')
    message.channel.send(potatEmbed)
  }
};
