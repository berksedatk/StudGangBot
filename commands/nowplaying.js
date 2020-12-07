const Discord = require("discord.js");

module.exports = {
  name: "nowplaying",
  category: "Music",
  description: "Current Playing song",
  aliases: ["np","currentsong","current","playing"],
  cooldown: 5,
  sped: true,
  execute(bot, message, args) {
    const serverQueue = bot.queue.get(message.guild.id);
    if (!serverQueue) return message.channel.send("No songs in queue");
    if (message.member.voice.channel != serverQueue.voiceChannel) return message.channel.send("You have to be in the same voice channel to see the queue!");
    message.channel.send(`Now playing: **${serverQueue.currentSong.title}**`)
  }
};
