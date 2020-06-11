const Discord = require("discord.js");

module.exports = {
  name: "catlin",
  category: "Fun",
  description: "caitlynn",
  blacklisted: true,
  unstaged: true,
  cooldown: 5,
  guildOnly: true,
  execute(bot, message, args) {
    const list = [
      "https://cdn.discordapp.com/attachments/701214262667771904/704784233956376616/Snapchat-1221705373.jpg",
      "https://cdn.discordapp.com/attachments/701214262667771904/704784235310874684/Snapchat-1857483486.jpg",
      "https://cdn.discordapp.com/attachments/701214262667771904/704784235571183727/Snapchat-1926985799.jpg",
      "https://cdn.discordapp.com/attachments/701214262667771904/704784235873042462/Snapchat-39329791.jpg",
      "https://cdn.discordapp.com/attachments/701214262667771904/704784236254724117/Snapchat-279261584.jpg",
      "https://cdn.discordapp.com/attachments/701214262667771904/704784236627886190/Snapchat-273749824.jpg",
      "https://cdn.discordapp.com/attachments/701214262667771904/704784236913360926/Snapchat-513654003.jpg",
      "https://cdn.discordapp.com/attachments/701214262667771904/704784237144047626/Snapchat-719106164.jpg",
      "https://cdn.discordapp.com/attachments/701214262667771904/704784237462552626/Snapchat-862075891.jpg",
      "https://cdn.discordapp.com/attachments/701214262667771904/704784237991166082/Snapchat-870119834.jpg",
      "https://cdn.discordapp.com/attachments/701214262667771904/704784281016205434/Snapchat-1001931400.jpg",
      "https://cdn.discordapp.com/attachments/701214262667771904/704784281297485844/Snapchat-129180051.jpg",
      "https://cdn.discordapp.com/attachments/701214262667771904/704784281674711131/Snapchat-1309696941.jpg",
      "https://cdn.discordapp.com/attachments/701214262667771904/704784282211582003/Snapchat-1571853292.jpg",
      "https://cdn.discordapp.com/attachments/701214262667771904/704784282761166888/Snapchat-1795578813.jpg",
      "https://cdn.discordapp.com/attachments/701214262667771904/704784283189117048/Snapchat-2007642143.jpg",
      "https://cdn.discordapp.com/attachments/701214262667771904/704784283474067537/Snapchat-550852476.jpg",
      "https://cdn.discordapp.com/attachments/701214262667771904/704784283788902411/Snapchat-694596299.jpg"
    ]
    
    const slapEmbed = new Discord.MessageEmbed()
    .setDescription(`CAITLYNN? MORE LIKE HUGS`)
    .setColor('RANDOM')
    .setImage(list[Math.floor(Math.random() * list.length)])
    message.channel.send(slapEmbed)
  }
};