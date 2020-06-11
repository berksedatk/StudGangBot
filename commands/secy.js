
const Discord = require('discord.js')

module.exports = {
  name: "secy",
  category: "Fun",
  description: "Cami is such a cutie",
  blacklisted: true,
  unstaged: true,
  cooldown: 5,
  execute(bot, message, args) {
    const list = [
      "https://cdn.discordapp.com/attachments/635320134847954954/704033977752617070/image0.png",
      "https://cdn.discordapp.com/attachments/635320134847954954/703993423035629608/image0.jpg",
      "https://cdn.discordapp.com/attachments/635320134847954954/703284755193528401/image0.png",
      "https://cdn.discordapp.com/attachments/683923680664748033/704494142213980234/image1.jpg",
      "https://cdn.discordapp.com/attachments/683923680664748033/704494386125340773/image0.jpg",
      "https://cdn.discordapp.com/attachments/683923680664748033/704494470410010704/image0.jpg",
      "https://cdn.discordapp.com/attachments/683923680664748033/704494534544982048/image0.jpg",
      "https://cdn.discordapp.com/attachments/635320134847954954/702332359399309422/image0.jpg",
      "https://cdn.discordapp.com/attachments/683923680664748033/704494142033494076/image0.jpg",
      "https://cdn.discordapp.com/attachments/635320134847954954/700235722346463274/image0.jpg",
      "https://cdn.discordapp.com/attachments/635320134847954954/699025423002107954/RPReplay_Final1586240624.mov",
      "https://cdn.discordapp.com/attachments/635320134847954954/698258482687901766/image0.jpg",
      "https://cdn.discordapp.com/attachments/683923680664748033/704494003411746946/image0.jpg",
      "https://cdn.discordapp.com/attachments/635320134847954954/697147953504059412/image0.png",
      "https://cdn.discordapp.com/attachments/635320134847954954/697147953504059412/image0.png",
      "https://cdn.discordapp.com/attachments/635320134847954954/694608652283150356/image0.jpg",
      "https://cdn.discordapp.com/attachments/635320134847954954/694371080776712284/image0.png",
      "https://cdn.discordapp.com/attachments/635320134847954954/693929030382125187/image0.jpg",
      "https://cdn.discordapp.com/attachments/635320134847954954/693590835396214814/image0.jpg",
      "https://cdn.discordapp.com/attachments/635320134847954954/691683162941816832/image0.jpg",
      "https://cdn.discordapp.com/attachments/635320134847954954/691357033953492992/image0.jpg",
      "https://cdn.discordapp.com/attachments/635320134847954954/688980205947060251/randomselfie.png",
      "https://cdn.discordapp.com/attachments/635320134847954954/688664942014234624/image0.jpg",
      "https://cdn.discordapp.com/attachments/635320134847954954/688582340498554962/Screen_Shot_2020-03-14_at_7.58.34_PM.png",
      "https://cdn.discordapp.com/attachments/635320134847954954/687847145910304806/image0.jpg",
      "https://cdn.discordapp.com/attachments/635320134847954954/686678026498474003/image0.jpg",
      "https://cdn.discordapp.com/attachments/635320134847954954/686275793906827345/image0.jpg",
      "https://cdn.discordapp.com/attachments/635320134847954954/685960236938428422/image0.jpg",
      "https://cdn.discordapp.com/attachments/635320134847954954/685503363361931300/image0.jpg",
      "https://cdn.discordapp.com/attachments/635320134847954954/685270675443023937/image0.jpg",
      "https://cdn.discordapp.com/attachments/635320134847954954/684248981701656644/image0.png",
      "https://cdn.discordapp.com/attachments/635320134847954954/684229146628325401/image0.png",
      "https://cdn.discordapp.com/attachments/635320134847954954/684157340278325392/image0.png",
      "https://cdn.discordapp.com/attachments/635320134847954954/683930648779685888/image0.png",
      "https://cdn.discordapp.com/attachments/635320134847954954/683781883087290408/image0.png"
      
    ]//she might as well send you nudes o.o
      
    const SecyEmbed = new Discord.MessageEmbed()
    .setDescription(`Admire Cami!`)
    .setColor('RANDOM')
    .setImage(list[Math.floor(Math.random() * list.length)])
    message.channel.send(SecyEmbed)
  }
};
