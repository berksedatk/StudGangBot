const Discord = require("discord.js");

module.exports = {
  name: "pickcotton",
  category: "Fun",
  description: "Make someone pick some of the cotton!",
  usage: "[mention]",
  aliases: 'cottonpick',
  blacklisted: true,
  cooldown: 5,
  execute(bot, message, args) {
    let author = message.author;
    let reciever = message.mentions.users.first();
    if (!reciever) return message.channel.send(":x: | You need someone to pick the cotton!");
    
    const response = [
      `*${author} whips ${reciever}*`,
      `${reciever} immediately starts picking that cotton for ${author}. <:)`,
      `${reciever} is so good at picking cotton!`,
      `${author} commands ${reciever} to pick the cotton!`,
      `${author} tells ${reciever} how HORRIBLE they are at picking cotton.`,
    ]
    const gifs = [
      "https://cdn.discordapp.com/attachments/625075767075799060/704538433518829688/image0.jpg",                                    
      "https://cdn.discordapp.com/attachments/625075767075799060/704538434160689235/image1.jpg",
      "https://cdn.discordapp.com/attachments/625075767075799060/704538434425061406/image2.jpg",
      "https://cdn.discordapp.com/attachments/625075767075799060/704538434722594846/image3.jpg", 
      "https://cdn.discordapp.com/attachments/625075767075799060/704538434953412698/image4.jpg",
      "https://cdn.discordapp.com/attachments/625075767075799060/704538435188293692/image5.jpg",  
      "https://cdn.discordapp.com/attachments/625075767075799060/704538435788210236/image6.jpg",
      "https://cdn.discordapp.com/attachments/625075767075799060/704538436060708905/image7.jpg",
      "https://cdn.discordapp.com/attachments/625075767075799060/704538436295589968/image8.jpg", 
      "https://cdn.discordapp.com/attachments/625075767075799060/704538436513824788/image9.jpg",
      "https://cdn.discordapp.com/attachments/625075767075799060/704538464242368522/image0.jpg",
      "https://cdn.discordapp.com/attachments/625075767075799060/704538464535707728/image1.jpg",
      "https://cdn.discordapp.com/attachments/625075767075799060/704538464766656513/image2.jpg",
      "https://cdn.discordapp.com/attachments/625075767075799060/704538465412317204/image3.jpg",
      "https://cdn.discordapp.com/attachments/625075767075799060/704538465659912222/image4.jpg",
      "https://cdn.discordapp.com/attachments/625075767075799060/704538466037530655/image5.jpg",
      "https://cdn.discordapp.com/attachments/625075767075799060/704538466847031366/image6.jpg",
      "https://cdn.discordapp.com/attachments/625075767075799060/704538467090300988/image7.jpg",
      "https://cdn.discordapp.com/attachments/625075767075799060/704538467388096562/image8.jpg",
      "https://cdn.discordapp.com/attachments/625075767075799060/704538467689955338/image9.jpg",



    ]
    
    const retard = [
      "Hope getting whipped makes you cry in pain. ;)",
      "How is it getting whipped?",
      "Personally, you're shitty at picking cotton",
      "Wait- What?! Why do you like picking cotton you dirty whore!",
    
      

]
    const dumb = retard[Math.floor(Math.random() * response.length)]; 
    const answer = response[Math.floor(Math.random() * response.length)]; 
    const pickcottonEmbed = new Discord.MessageEmbed()
    .setDescription(answer)
    .setColor("RANDOM")
    .setFooter(dumb)
    .setTimestamp()
    //This adds the image
    {
      pickcottonEmbed.setImage(gifs[Math.floor(Math.random() * gifs.length)])
    }
    message.channel.send(pickcottonEmbed)
  }
};
