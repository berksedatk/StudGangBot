const Discord = require("discord.js");
const ytdl = require('ytdl-core');

module.exports = {
  name: "play",
  category: "Utility",
  description: "Plays something off youtube",
  usage: "[URL or search criteria]",
  cooldown: 5,
  async execute(bot, message, args) {
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) return message.channel.send(":x: | You need to be in a voice channel to play music!");

    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
      return message.channel.send("I need the permissions to join and speak in your voice channel!");
    }

    const songInfo = await ytdl.getInfo(args.join(" "));
    const song = {
      title: songInfo.title,
      url: songInfo.videoDetails.video_url
    }
    console.log(song)

    const serverQueue = bot.queue.get(message.guild.id);
    if (!serverQueue) {
      const queueContruct = {
       textChannel: message.channel,
       voiceChannel: voiceChannel,
       connection: null,
       songs: [],
       volume: 5,
       playing: true,
      };
      bot.queue.set(message.guild.id, queueContruct);
      queueContruct.songs.push(song);

      try {
       var connection = await voiceChannel.join();
       queueContruct.connection = connection;
       play(message.guild, queueContruct.songs[0]);
      } catch (err) {
       console.log(err);
       bot.queue.delete(message.guild.id);
       return message.channel.send(err);
      }
    } else {
     serverQueue.songs.push(song);
     console.log(serverQueue.songs);
     return message.channel.send(`${song.title} has been added to the queue!`);
    }
  }
};

function play(guild, song) {
  const serverQueue = queue.get(guild.id);
  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }

  const dispatcher = serverQueue.connection
    .play(ytdl(song.url))
    .on("finish", () => {
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
    .on("error", error => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
  serverQueue.textChannel.send(`Start playing: **${song.title}**`);
}
