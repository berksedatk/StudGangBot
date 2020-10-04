const Discord = require("discord.js");

module.exports = {
  name: "gayrate",
  aliases: ["grate","gay-rate","gay"],
  category: "Fun",
  description: 'testing lol',
  usage: "<user>",
  cooldown: 5,
  async execute(bot, message, args) {
    if (!args[0]) return message.channel.send(":x: | You need to mention someone or something to check the gay-rate!");
    let number = Math.floor(Math.random() * 100)
    let loadingbar = ""
    let custommsg = ""
    if (number == 0) {
      loadingbar = ":skull::skull::skull::skull::skull::skull::skull::skull::skull::skull:"
      custommsg = "This user is not gay at all! :smirk_cat:"
    } else if (number < 11) {
      loadingbar = ":black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square:"
      custommsg = "Not so gay! :person_gesturing_no:"
    } else if (number < 21) {
      loadingbar = ":red_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square:"
      custommsg = "Just a lil gay.. :flushed:"
    } else if (number < 31) {
      loadingbar = ":red_square::red_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square:"
      custommsg = "Just gay for your dad :purple_heart:"
    } else if (number < 41) {
      loadingbar = ":red_square::red_square::red_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square:"
      custommsg = "he just a lil gay :pensive:"
    } else if (number < 51) {
      loadingbar = ":red_square::red_square::red_square::red_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square:"
      custommsg = "A lil more gay than average.. :eyes:"
    } else if (number < 61) {
      loadingbar = ":red_square::red_square::red_square::red_square::red_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square:"
      custommsg = "LOL i think this is broken ur a lil more gay than that.."
    } else if (number < 71) {
      loadingbar = ":red_square::red_square::red_square::red_square::red_square::red_square::black_large_square::black_large_square::black_large_square::black_large_square:"
      custommsg = "It's okay we don't discriminate.. :eyes:"
    } else if (number < 81) {
      loadingbar = ":red_square::red_square::red_square::red_square::red_square::red_square::red_square::black_large_square::black_large_square::black_large_square:"
      custommsg = "God damn :heart_eyes_cat:"
    } else if (number < 91) {
      loadingbar = ":red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::black_large_square::black_large_square:"
      custommsg = "Hey sisters! :smirk:"
    } else if (number < 100) {
      loadingbar = ":red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::black_large_square:"
      custommsg = "A match!!! :heart_eyes:"
    } else if (number == 100) {
      loadingbar = ":red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square:"
      custommsg = "OMl ur so gAy :confounded:"
    }

    if (args[1]) {
      let gayEmbed = new Discord.MessageEmbed()
      .setColor("#6EA3F1")
      .setTimestamp()
      .setTitle(":heart_eyes_cat: Gay Meter :heart_eyes_cat:")
      .setFooter(`Requested by: ${message.author.tag}`, message.author.avatarURL())
      .setDescription(`:yum: **${args[1]}**'s Gay Rate :yum:\n\n${number}% - ${custommsg}\n ${loadingbar}`)
      message.channel.send(gayEmbed)
    } else if (args[0]) {
      let gayEmbed = new Discord.MessageEmbed()
      .setColor("#6EA3F1")
      .setTimestamp()
      .setTitle(":heart_eyes_cat: Gay Meter :heart_eyes_cat:")
      .setFooter(`Requested by: ${message.author.tag}`, message.author.avatarURL())
      .setDescription(`:yum: **${args[0]}**'s Gay Rate :yum:\n\n${number}% - ${custommsg}\n ${loadingbar}`)
      message.channel.send(gayEmbed)
    }
  }
};
