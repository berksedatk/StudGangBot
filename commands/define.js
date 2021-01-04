const Discord = require("discord.js");
const ud = require("relevant-urban");
module.exports = {
  name: "define",
  category: "Fun",
  description: "Search a word from the urban dictionary",
  cooldown: 20,
  guildOnly: true,
  aliases: ["urban"],
  execute(bot, message, args) {
  const worder = args[0];
    if(!worder) return message.channel.send("Specify a word")
  const defin = await ud(args.join(' ')).catch(e => {
    message.channel.send("Word not found")
      return;
  });
 const defembed = new Discord.MessageEmbed()
    .setTitle(defin.word)
    .setURL(defin.urbanURL)
    .setDescription(defin.definition)
    .addField("Example", defin.example)
    .addField("Author", defin.author)
    .setColor('RANDOM')
message.channel.send(defembed)
  }
};
