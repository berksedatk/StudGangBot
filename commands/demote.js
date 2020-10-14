const Discord = require("discord.js");

module.exports = {
  name: "demote",
  category: "Fun",
  description: "Demote someone for being a dummy head.",
  cooldown: 5,
  guildOnly: true,
  execute(bot, message, args) {

    const author = message.author;
    const reciever = message.mentions.users.first();
    if (!reciever) return message.channel.send(":x: | You need someone to demote!");

    const demootEmbed = new Discord.MessageEmbed()
    .setDescription(`yo this works??!`)
    .setColor('RED')
    message.channel.send(demootEmbed)
    message.delete().catch(err => console.log(err));//use this if youre gonna delete a message
  }
};//bruv smd man ik smh//r u mad at me ;0; i was just vibin ohkau
//ill put the appliction for gangbot to start verifiaction
//i saw in main
