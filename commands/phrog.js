const Discord = require("discord.js");
module.exports = {
  name: "phrog",
  category: "Fun",
  description: "Get phrog pics",
  cooldown: 20,
  aliases: ["frog"],
  async execute(bot, message, args) {
    const list = [
  "https://noodle.hep.gg/0jdMU4NBL",
  "https://noodle.hep.gg/rfIwNg_A_",
  "https://noodle.hep.gg/A4iNl3Q8K",
  "https://noodle.hep.gg/qyRfHpoOt",
  "https://noodle.hep.gg/ZbnJHf-qJ",
  "https://noodle.hep.gg/AAHtG8nPQ",
  "https://noodle.hep.gg/1DMMxx4Zr",
  "https://noodle.hep.gg/1jjYtN0CH",
  "https://noodle.hep.gg/uuYYkJ1tr",
  "https://noodle.hep.gg/6dLbnIMd1",
  "https://noodle.hep.gg/Q746uJ4W-",
  "https://noodle.hep.gg/hTf9yECpV",
  "https://noodle.hep.gg/SjH2PFT5g",
  "https://noodle.hep.gg/gymKHNMun",
  "https://noodle.hep.gg/STLC1LJz3",
  "https://noodle.hep.gg/nFa96O-Uj",
  "https://noodle.hep.gg/e5IAmCcKQ",
  "https://noodle.hep.gg/0ZH6HUsOK",
  "https://noodle.hep.gg/XD3wID5ml",
  "https://noodle.hep.gg/IVb8e2O08",
  "https://noodle.hep.gg/ljqtZ0YrL",
  "https://noodle.hep.gg/nFIKEC4ewX",
  "https://noodle.hep.gg/XoFz--3jF",
  "https://noodle.hep.gg/AI52CPCvF",
  "https://noodle.hep.gg/Zeq_4xbWO",
  "https://noodle.hep.gg/QsoCUoLGq",
  "https://noodle.hep.gg/JIJS4ltAD",
  "https://noodle.hep.gg/NAz2aFH3m",
  "https://noodle.hep.gg/rmzluBdca",
  "https://noodle.hep.gg/HxxHUgd1m",
  "https://noodle.hep.gg/haDhP3hrE",
  "https://noodle.hep.gg/0N1p_sd3_",
  "https://noodle.hep.gg/_2wlOZN5k",
  "https://noodle.hep.gg/B4EoMFFkt",
  "https://noodle.hep.gg/AInUOxq4V",
  "https://noodle.hep.gg/s8hqlCrxL",
  "https://noodle.hep.gg/VxHQq32vH",
  "https://noodle.hep.gg/fEG067GSf",
  "https://noodle.hep.gg/-Se7Kj-KF",
  "https://noodle.hep.gg/FvZQaTdxb",
  "https://noodle.hep.gg/KBhZdr4oJ",
  "https://noodle.hep.gg/6r8_jW8jG",
  "https://noodle.hep.gg/H2vdkFjHI",
  "https://noodle.hep.gg/Zw-v28FNP",
  "https://noodle.hep.gg/zM76j0G7V",
  "https://noodle.hep.gg/QFNmDHbP6",
  "https://noodle.hep.gg/WMqexwbMa",
  "https://noodle.hep.gg/T8QyjLIAp",
  "https://noodle.hep.gg/lHomxmSlZ",
  "https://noodle.hep.gg/k9Wdr5Zt8q",
  "https://noodle.hep.gg/0jWna3E4d",
  "https://noodle.hep.gg/KGtVXWVf9E",
  "https://noodle.hep.gg/nIBOuLGy6",
  "https://noodle.hep.gg/0MAc6jFCg",
  "https://noodle.hep.gg/bkeynppF_",
  "https://noodle.hep.gg/77PzqEa8k",
  "https://noodle.hep.gg/bfZs1mWt2",
  "https://noodle.hep.gg/3z-56VMxt",
  "https://noodle.hep.gg/UMYxzA9l9",
  "https://noodle.hep.gg/I5ib3JzNq",
  "https://noodle.hep.gg/g1mTtyLXl",
  "https://noodle.hep.gg/sbDjNnUTx",
  "https://noodle.hep.gg/PgE8WFg-x",
  "https://noodle.hep.gg/LG72GfgI-",
  "https://noodle.hep.gg/gaV1ItyRh",
  "https://noodle.hep.gg/AWr1MmQOb",
  "https://noodle.hep.gg/6DcbxW8x9",
  "https://noodle.hep.gg/IzYWK5Do5",
  "https://noodle.hep.gg/-xE9wvV4u"
  
    ]
    const f1 = "Here is your frog :)"
    const f2 = "Here is your phrog ;)"
    const footers = [
        f1,
        f2
    ]
    const footerpicker = Math.floor(Math.random() * footers.length);
    const frogEmbed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setColor('#56FA85')
    .setImage(list[Math.floor(Math.random() * list.length)])
    .setTimestamp()
    .setFooter(footers[footerpicker])
      message.channel.send(frogEmbed)
  }
};
