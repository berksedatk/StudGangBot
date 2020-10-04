const Discord = require("discord.js");

module.exports = {
  name: "ship",
  category: "Fun",
  description: 'Ship yourself or someone else to see how good of a couple it makes! \n**Custom Command**: kia.#0002',
  usage: "<user> [user]",
  cooldown: 5,
  async execute(bot, message, args) {
    if (!args[0]) return message.channel.send(":x: | You need something or someone to ship yourself with!");
    let number = Math.floor(Math.random() * 100)
    let loadingbar = ""
    let custommsg = ""
    if (number == 0) {
      loadingbar = ":skull::skull::skull::skull::skull::skull::skull::skull::skull::skull:"
      custommsg = "No love at all! :broken_heart:"
    } else if (number < 11) {
      loadingbar = ":black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square:"
      custommsg = "Not a match! :person_gesturing_no:"
    } else if (number < 21) {
      loadingbar = ":red_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square:"
      custommsg = "Maybe a small hope. :crying_cat_face:"
    } else if (number < 31) {
      loadingbar = ":red_square::red_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square:"
      custommsg = "Not too much :no_mouth:"
    } else if (number < 41) {
      loadingbar = ":red_square::red_square::red_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square:"
      custommsg = "It has potential :thinking:"
    } else if (number < 51) {
      loadingbar = ":red_square::red_square::red_square::red_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square:"
      custommsg = "Might be a good match! :clap:"
    } else if (number < 61) {
      loadingbar = ":red_square::red_square::red_square::red_square::red_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square:"
      custommsg = "Cute together uwu :eyes:"
    } else if (number < 71) {
      loadingbar = ":red_square::red_square::red_square::red_square::red_square::red_square::black_large_square::black_large_square::black_large_square::black_large_square:"
      custommsg = "More likely :yum:"
    } else if (number < 81) {
      loadingbar = ":red_square::red_square::red_square::red_square::red_square::red_square::red_square::black_large_square::black_large_square::black_large_square:"
      custommsg = "Adorable together :smirk_cat:"
    } else if (number < 91) {
      loadingbar = ":red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::black_large_square::black_large_square:"
      custommsg = "Wholesome! :smiling_face_with_3_hearts:"
    } else if (number < 100) {
      loadingbar = ":red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::black_large_square:"
      custommsg = "A match!!! :heart_eyes:"
    } else if (number == 100) {
      loadingbar = ":red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square:"
      custommsg = "A perfect matchhhhh!!! :heart_eyes::smiling_face_with_3_hearts::heart_eyes:smirk_cat:::heart_eyes::heart_eyes::heart:"
    }

    if (args[1]) {
      let shipEmbed = new Discord.MessageEmbed()
      .setColor("#f069cc")
      .setTimestamp()
      .setTitle("❤️ **Ship Meter** ❤️")
      .setFooter(`Requested by: ${message.author.tag}`, message.author.avatarURL())
      .setDescription(`<a:SG_pheart:762045374495981568> **${args[0]}** & **${args[1]}** <a:SG_pheart:762045374495981568>\n\n${number}% - ${custommsg}\n ${loadingbar}`)
      message.channel.send(shipEmbed)
    } else if (args[0]) {
      let shipEmbed = new Discord.MessageEmbed()
      .setColor("#f069cc")
      .setTimestamp()
      .setTitle("❤️ **Ship Meter** ❤️")
      .setFooter(`Requested by: ${message.author.tag}`, message.author.avatarURL())
      .setDescription(`<a:SG_pheart:762045374495981568> **${args[0]}** & **${message.author}** <a:SG_pheart:762045374495981568>\n\n${number}% - ${custommsg}\n ${loadingbar}`)
      message.channel.send(shipEmbed)
    }
  }
};
