const Discord = require("discord.js");

module.exports = {
  name: "changelog",
  category: "General",
  description: "To keep track of what has been changed by the Developers without having to check the Github. Just to be a bit more convient.",
  aliases: ["changes"],
  cooldown: 5,
  guildOnly: true,
  admin: true,
  blacklistedChannels: ["791317380521394186","791317317140217866","791319900550725643","791319939348561930","791318245718097971","791317348735909928","791317335695818752","791318209978302474"],
  execute(bot, message, args) {
    message.channel.send(`**Removed un-needed files:**\n>basement.txt, emote.txt, frog.txt, hump.txt. nitro.txt, noodles.txt, peg.txt, seggs.txt, sex.txt, ship.txt, spank.txt, spoon.txt, succ.txt\n
      **Removed Music Commands since they are broken and no one uses them.**\n>nowplaying.js, play.js, queue,js, skip.js, stop.js\note
      **Removed useless commands:\n>react.js, roles.js\n**Removed un-used package:**\n>nhentai-js@3.3.0`)
  }
};
