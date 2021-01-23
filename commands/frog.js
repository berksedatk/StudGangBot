phatforg = "http://results.dogpile.com/serp?qc=images&q=" + "fat frogs"
    const choices = [
      forg,
      lollmeme,
      phorg,
      cutiefrogs,
      thiccforgs,
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
     
    const frog = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setColor('#56FA85')
    .setImage(urls[Math.floor(Math.random() * urls.length)])
    .setTimestamp()
    .setFooter("Here is your frog :)")
    msg.edit(' ',frog)
    })
    }
  }
};
