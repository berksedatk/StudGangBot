const Discord = require("discord.js");

module.exports = {
  name: "spoon",
  category: "Fun",
  description: "Spoon Someone.. :flushed:",
  usage: "[mention]",
  cooldown: 5,
  guildOnly: true,
  execute(bot, message, args) {
    const author = message.author;
    const reciever = message.mentions.users.first();
    if (!reciever) return message.channel.send(":x: | You need someone to spoon, mention them! lol i ain't a simp fuck off you e-girl");
    const response = [
      `UwU ${author} starts spooning ${reciever} <:pepeOK:567778750104731648>`,
      `${author} makes ${reciever} cum from spooning so gud!`,
      `Extreme spooning from ${author} incoming to ${reciever}...`,
      `${author} starts to give ${reciever} the best spooning job!`,
      `Call backup! ${author} has made ${reciever} bust everywhere from spooning them so good!`,
      `${author} has been caught spooning ${reciever} by Noodle! C'mon guys, you could've hidden it better. ;3`,
      `Ahem, why is ${author} so good at spooing ${reciever}?`,
      `:point_right::point_left::flushed: Why is ${author} so good at spooning ${reciever}?`,
      `Oh shiet oh frick, ${author} has covered everything with white stuff from spooning ${reciever}! We are going to have a white Christmas!`,
      `Guess what. ${author} is the fricking worse at spooning but ${reciever} still likes it. :point_right::point_left::weary: How cute :3`,
      `Once again, ${author} is spooning ${reciever}.`,
      `${author} and ${reciever} are once again being too loud and getting caught by noodle spooning eachother`,
      `:face_with_raised_eyebrow: ${author} still spoons ${reciever} while Barak Obama watches them.`,
      `HEY guys, MTV cribs here- oh god ${author} and ${reciever} at it again spooning eachother.`,
      `*holds camera as ${author} is spooning ${reciever}*`
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
      'https://cdn.discordapp.com/attachments/675728032203407387/756458354888671333/animegrin_9.gif'
    ]
    
    const answer = response[Math.floor(Math.random() * response.length)];  
    const image = images[Math.floor(Math.random() * images.length)];
  
    const spoonEmbed = new Discord.MessageEmbed()
    .setDescription(answer)
    .setImage(image)
    .setColor('RANDOM')
    message.channel.send(spoonEmbed)
  }
};
