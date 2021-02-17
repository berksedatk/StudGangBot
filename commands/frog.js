const Discord = require("discord.js");
const cheerio = require('cheerio');
const request = require('request');
module.exports = {
  name: "phrog",
  category: "Fun",
  description: "Get phrog pics",
  cooldown: 20,
  guildOnly: true,
  aliases: ["frog"],
  async execute(bot, message, args) {
    const msg = await message.channel.send(`Generating Phrog Pics...`);
    const forg = "http://results.dogpile.com/serp?qc=images&q=" + "frog"
    const phorg = "http://results.dogpile.com/serp?qc=images&q=" + "phrog"
    const cutiefrogs = "http://results.dogpile.com/serp?qc=images&q=" + "cute frogs"
    const babieforgs = "http://results.dogpile.com/serp?qc=images&q=" + "baby frogs"
    const phatforg = "http://results.dogpile.com/serp?qc=images&q=" + "fat frogs"
    const choices = [
      forg,
      phorg,
      cutiefrogs,
      babieforgs,
      phatforg
      ]
    const pick = Math.floor(Math.random() * choices.length);
     Image(message);
    function Image(message){
    const options = {
    url: choices[pick],
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
    const f1 = "Here is your frog :)"
    const f2 = "Here is your phrog ;)"
    const footers = [
        f1,
        f2
    ]
    const footerpicker = Math.floor(Math.random() * footers.length);
    const frog = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setColor('#56FA85')
    .setImage(urls[Math.floor(Math.random() * urls.length)])
    .setTimestamp()
    .setFooter(footers[footerpicker])
    msg.edit(' ',frog)
    })
    }
  }
};
