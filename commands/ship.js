const Discord = require("discord.js");

module.exports = {
  name: "ship",
  category: "Fun",
  description: "Ship yourself or someone else to see how good of a couple it makes!/n**Custom Command**: kia.#0002",
  usage: "<user> [user2]",
  cooldown: 5,
  execute(bot, message, args) {
    if (!args[0]) {
      return message.channel.send(":x: | You need something or someone to ship yourself with!")
    } else if (args[1]) {
      let randomnumber = Math.floor(Math.random() * 100).toLocaleString()
      let loadingbar = ""
      let custommsg = ""
      if (randomnumber = 0) {
        loadingbar = ":black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square:"
        custommsg = "No love at all! :broken_heart:"
      } else if (randomnumber < 11) {
        loadingbar = ":red_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square:"
        custommsg = "Not a match! :person_gesturing_no:"
      } else if (randomnumber < 21) {
        loadingbar = ":red_square::red_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square:"
        custommsg = "Maybe a small hope. :crying_cat_face:"
      } else if (randomnumber < 31) {
        loadingbar = ":red_square::red_square::red_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square:"
        custommsg = "Not too much :no_mouth:"
      } else if (randomnumber < 41) {
        loadingbar = ":red_square::red_square::red_square::red_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square:"
        custommsg = "It has potential :thinking:"
      } else if (randomnumber < 51) {
        loadingbar = ":red_square::red_square::red_square::red_square::red_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square:"
        custommsg = "Might be a good match! :clap:"
      } else if (randomnumber < 61) {
        loadingbar = ":red_square::red_square::red_square::red_square::red_square::red_square::black_large_square::black_large_square::black_large_square::black_large_square:"
        custommsg = "Cute together uwu :eyes:"
      } else if (randomnumber < 71) {
        loadingbar = ":red_square::red_square::red_square::red_square::red_square::red_square::red_square::black_large_square::black_large_square::black_large_square:"
        custommsg = "More likely :yum:"
      } else if (randomnumber < 81) {
        loadingbar = ":red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::black_large_square::black_large_square:"
        custommsg = "Adorable together :smirk_cat:"
      } else if (randomnumber < 91) {
        loadingbar = ":red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::black_large_square:"
        custommsg = "Wholesome! :smiling_face_with_3_hearts:"
      } else if (randomnumber = 100) {
        loadingbar = ":red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square:"
        custommsg = "A match!!! :heart_eyes:"
      }

      let shipEmbed = new Discord.MessageEmbed()
      .setColor("PINK")
      .setTimestamp()
      .setTitle("**Ship Meter**")
      .setAuthor(message.author.tag, message.author.avatarURL())
      .addField(custommsg, loadingbar)
      message.channel.send(shipEmbed)
    }
  }
};
