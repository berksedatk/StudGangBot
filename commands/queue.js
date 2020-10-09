const Discord = require("discord.js");

module.exports = {
  name: "queue",
  category: "Music",
  description: "See the current queue",
  aliases: ["q"],
  cooldown: 5,
  execute(bot, message, args) {
    const serverQueue = bot.queue.get(message.guild.id);
    if (!serverQueue) return message.channel.send("No songs in queue");
    if (message.member.voice.channel != serverQueue.voiceChannel) return message.channel.send("You have to be in the same voice channel to see the queue!");
    let queueMessage = `Now playing: **${serverQueue.currentSong.title}**\n`
    for (let i = 0; i > serverQueue.songs.length; i++) {
      if (i != 0) queueMessage += `<${i}> ${serverQueue.songs[i].title}\n`
    }
    message.channel.send(queueMessage)
  }
};
