const nhentai = require('nhentai-js');

const Discord = require("discord.js");

module.exports = {
  name: "nhentai",
  category: "Fun",
  description: "Search for a doujin or get a random one",
  usage: "[search/searchid/random]",
  cooldown: 5,
  async execute(bot, message, args) {
    if (message.channel.nsfw === false) return message.channel.send(":x: | This command can only be executed in a nsfw marked channel.");
    if (!args[0]) return message.channel.send(":x: | You have to provide a option. `search/searchid/random`");
    
    if (args[0].toLowerCase() === "search") {
      if (!args[1]) return message.channel.send(":x: | What am I gonna seach for? I suggest Zero Two.");
      
      args.shift()
      const search = args.join(" ");
      const results = await nhentai.search(search);
      
      const hentaiEmbed = new Discord.MessageEmbed()
      .setTitle(`**${search}** Search Results`)
      .setDescription(`Total Results: ${results.results.length}`)
      .setTimestamp()
      .setFooter("Press on ⏩ to get to the next page.")
      .setColor("RED")
      
      if (results.results.length > 5) {
        for (let i = 0; i < results.results.length; i++) {
          if (i < 5) {
            hentaiEmbed.addField(`**Result #${i + 1}:**`,`**Book Title:** ${results.results[i].title} \n**Book Id:** ${results.results[i].bookId} \n[Click here for the thumbnail](${results.results[i].thumbnail})`)
          }
        }   
      }
      message.channel.send(hentaiEmbed).then(msg => {
        msg.react('⏪')
        msg.react('⏩')      
      })
    }
    
  }
};
