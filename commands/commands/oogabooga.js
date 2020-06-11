const Discord = require("discord.js");

module.exports = {
  name: "oogabooga",
  category: "Fun",
  description: `\n**No one:**\n**Sensei:** *Ooga Booga*`,
  usage: "[mention]",
  cooldown: 5,
  blacklisted: true,
  execute(bot, message, args) {
    let author = message.author;
    let reciever = message.mentions.users.first();
    if (!reciever) return message.channel.send(":x: | You need someone to speak Ooga Booga with!");
    
    const response = [
      `${reciever},Ooga Boog booga ooga <:SadCat:612384937235972106>* ~${author}`,
      `${reciever}, Ooga booga nig nig <:) ~${author}`,
      `${reciever}, Me put pointy rock on stick ~${author}`,
    ]
    const image = [
      "https://cdn.discordapp.com/attachments/700500863621529640/704558299571421284/unknown.png",


    ]
    
    const answer = response[Math.floor(Math.random() * response.length)]; 
    const pickcottonEmbed = new Discord.MessageEmbed()
    .setDescription(answer)
    .setColor("RANDOM")
    .setFooter('Ooga Booga ;)')
    .setTimestamp()
    //This adds the image
    {
      pickcottonEmbed.setImage(image[Math.floor(Math.random() * image.length)])
    }
    message.channel.send(pickcottonEmbed)
  }
};
