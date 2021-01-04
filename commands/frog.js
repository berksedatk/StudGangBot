const Discord = require("discord.js");
const cheerio = require('cheerio');
const request = require('request');
module.exports = {
  name: "phrog",
  category: "Fun",
  description: "Get phrog pics",
  cooldown: 10,
  guildOnly: true,
  aliases: ["frog"]
  sped: true,
  exchannels: [
    {id: "548949556210040862", cooldown: 25}
  ],
  execute(bot, message, args) {
     Image(message);
    function Image(message){
    const options = {
    url: "http://results.dogpile.com/serp?qc=images&q=" + "frog",
    method: "GET",
    headers: {
    "Accept": "text/html",
    "User-Agent": "Chrome"
      }
    };
      
    request(options, function(error, response, responseBody) {

    if (error) {
         return;
    }
     
     
    $ = cheerio.load(responseBody);
     
     
    const links = $(".image a.link");
     
    const urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
           
     
    if (!urls.length) {     
         return;
    }
     
    const frog = new Discord.MessageEmbed()
    .setTitle('Here is your phrog!')
    .setColor('#56FA85')
    .setImage(urls[Math.floor(Math.random() * urls.length)])
    .setTimestamp()
    .setFooter(`Phrog Requested By: ${message.author.tag}`, message.author.avatarURL)
    message.channel.send(frog)
    })
    }
  }
};
