const Discord = require("discord.js");

module.exports = {
  name: "skip",
  category: "Music",
  description: "Skip a song",
  cooldown: 5,
  execute(bot, message, args) {
    const serverQueue = bot.queue.get(message.guild.id);
    if (message.member.voice.channel != serverQueue.voiceChannel) return message.channel.send("You have to be in the same voice channel to stop the music!");
    if (!serverQueue) return message.channel.send("There is no song that I could skip!");
    serverQueue.connection.dispatcher.end();
  }
};
