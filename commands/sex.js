const Discord = require("discord.js");

module.exports = {
  name: "sex",
  category: "Fun",
  description: "Sex someone",
  usage: "[mention]",
  cooldown: 5,
  execute(bot, message, args) {
    let author = message.author;
    let reciever = message.mentions.users.first();
    if (!reciever) return message.channel.send(":x: | You need someone to sex!");

    const list = [
      "It was so hot that people in 3 miles radius came.",
      "Sexing complete.",
      "All the neighbor was annoyed by your moanings.",
      "Hawt",
      "Youre cute when youre cumming :3"
    ]

    const gifs = [

    ]

    const sex = new Discord.MessageEmbed()
    .setDescription(`${author} sexes ${reciever}!`)
    .setColor("RANDOM")
    .setFooter(`${list[Math.floor(Math.random() * list.length)]}`)
    .setTimestamp()
    //This adds the image
    if (message.channel.nsfw === true) {
      sex.setImage(gifs[Math.floor(Math.random() * gifs.length)])
    }
    message.channel.send(sex)
  }
};
