const Discord = require("discord.js");

module.exports = {
  name: "queue",
  category: "Utility",
  description: "See the current queue",
  aliases: ["q"],
  cooldown: 5,
  execute(bot, message, args) {
    const serverQueue = bot.queue.get(message.guild.id);
    if (!serverQueue) return message.channel.send("No songs in queue");
    if (message.member.voice.channel != serverQueue.voiceChannel) return message.channel.send("You have to be in the same voice channel to see the queue!");
    let queueMessage = `Now playing: **${serverQueue.currentSong.title}**\n`
    if (serverQueue.songs.length > 0) {
      serverQueue.songs.forEach(song => {
        queueMessage += `-> ${song.title}`
      })
    }
    message.channel.send(queueMessage)
  }
};
