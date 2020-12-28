const fs = require('fs');
const config = require('./config.json');

function prettyString(string) {
 return string.replace(/_/g, " ").replace(/guild/gi, "Server").replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})
}

//#Discord Client#

const Discord = require("discord.js");
const bot = new Discord.Client({
  disableMentions: "everyone",
  ws: {
    intents: ["GUILD_PRESENCES","GUILDS","GUILD_MEMBERS","GUILD_MESSAGES","DIRECT_MESSAGES","GUILD_MESSAGE_REACTIONS"]
  }
});
bot.snipes = new Map();
bot.edits = new Map();
bot.wallets = new Map();
bot.queue = new Map();
//#Load Commands#

bot.commands = new Discord.Collection();
const cooldowns = new Discord.Collection();
const attcooldowns = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  bot.commands.set(command.name, command);
}

//#On Ready#

bot.on('ready', () => {

  const activities = [
    `Thank You, Talon!`,
    'The StudGang | ~help',
    ];


  setInterval(() => {
    let activity = activities[Math.floor(Math.random() * activities.length)];
    bot.user.setActivity(activity, { type: "WATCHING" });
  }, 10000);

  bot.user.setStatus("dnd").catch(console.error);

  setInterval(() => {
    var date = new Date();
    if (date.getHours() - 6 >= 0 && date.getHours() - 6 < 12){
      bot.channels.cache.get("792441809858199552").setName('😈┃noodles sex dungeon')
    } else if (date.getHours() - 6 >= 12){
      bot.channels.cache.get("792441809858199552").setName("🍝┃noodles cave")
    }
  }, 60000);

 let msgchannels = ["791319923967131658","791326324739538994","791320068273078312"]

  msgchannels.forEach(channelid => {
    setInterval(function() {
      bot.channels.cache.get(channelid).send({embed: {description: "Always feel free to check out our main chat <#791297870565343232>! :)"}})
    }, 4.32e+7)
  })

  console.log(`Bot is ready.`);
});

bot.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  bot.channels.cache.get("792442072040079400").send({embed: {title: `New guild joined`, description: `${guild.name} (id: ${guild.id}).\nOwner's ID: ${guild.ownerID} \nThis Guild has ${guild.memberCount} members.`, color: '5bff14'}});
});

bot.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  bot.channels.cache.get("792442072040079400").send({emved: {title: 'Guild left', description: `${guild.name} (id: ${guild.id})\nOwner's ID: ${guild.ownerID}\nThis Guild had ${guild.memberCount} members!`, color: 'ff0000'}});
});

//#On Message Deleted#

bot.on('messageDelete', message => {
  if (message.author.bot) return;
  bot.snipes.set(message.channel.id, {
    content: message.content,
    author: message.author,
    attachment: message.attachments.first() ? message.attachments.first().proxyURL : null
  })
})

bot.on('messageUpdate', (oldMessage, newMessage) => {
  if (oldMessage.author.bot) return;
  bot.edits.set(oldMessage.channel.id, {
    author: oldMessage.author,
    oldContent: oldMessage.content,
    newContent: newMessage.content
  })
})

//#On Message-Command#

bot.on('message', message => {
  if (message.author.bot) return;
  //Prefix
  if (!message.content.toLowerCase().startsWith(config.prefix)) return;

  //Arguments
  const args = message.content.slice(config.prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();

  //Command Matching
  const command = bot.commands.get(commandName) || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
  if (!command) return;

  //Statements
  if (command.dev && !config.owners.includes(message.author.id)) {
    return message.reply(":x: | You are not allowed to use this command.").then(m => m.delete({timeout: 15000}))
  }
  if (command.blacklisted && message.channel.id === "791297870565343232") {
    return message.reply(":x: | This command cannot be used in this channel!").then(m => m.delete({timeout: 7000}));
  }
  if (command.admin && !config.admins.includes(message.author.id)) {
    return message.reply(":x: | You are not allowed to use this command!");
  }
   if (command.vip && !config.vip.includes(message.author.id)) {
    return message.reply(":x: | You are not allowed to use this command!");
  }
    if (command.mnc && !config.mnc.includes(message.author.id)) {
    return message.reply(":x: | You are not cool enough to use this command!");
  }
  if (command.guildOnly && message.channel.type === "dm") {
    return message.reply(":x: | This command cannot be executed in direct messages.");
  }
  if (command.blacklistedChannels && !message.member.permissions.has("MANAGE_MESSAGES")) {
    let e;
    command.blacklistedChannels.forEach(channel => {
      if (message.channel.id === channel) e = true
    })
    if (e) return message.channel.send(":x: | This command cant be used in this channel!").then(m => m.delete({timeout: 7000}))
  }
  if (command.reqPermissions && !config.owners.includes(message.author.id)) {
    let missing = []
    command.reqPermissions.forEach(permission => {
      if (!message.guild.members.cache.get(message.author.id).permissions.has(permission)) missing.push(prettyString(permission))
    })
    if (missing.length > 0) {
      return message.channel.send(":x: | You don't have the required permission(s) to use this command!! Missing permission(s): " + missing.join(', '));
    }
  }

  //Cooldown
  if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Discord.Collection());
  }

  const now = Date.now();
  const timestamps = cooldowns.get(command.name);
  let cooldown = command.cooldown || 3
  if (command.exchannels && message.channel.type != "dm") {
    command.exchannels.forEach(c => {
      if (c.id === message.channel.id) cooldown = c.cooldown
    })
  }
  const cooldownAmount = (cooldown || 3) * 1000;

  if (!timestamps.has(message.author.id)) {
    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
  } else {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

    if (now < expirationTime && !config.owners.includes(message.author.id)) {
      const timeLeft = (expirationTime - now) / 1000;
      return message.reply(
        `Please wait ${timeLeft.toFixed(
          1
        )} more second(s) before reusing the \`${command.name}\` command.`
      );
    }

    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
  }

  try {
    command.execute(bot, message, args);
  } catch (err) {
    console.log(`Command Error: ${err}`);
    message.channel.send(`An error occured: ` + err);
  }
});


//Attachments

bot.on("message", msg => {
  if (msg.channel.id === "791362579011469352") {
    msg.react("772556511783682060")
    msg.react("772556931632988181")
    msg.react("772556883214860348")
  }
  if (msg.author.bot) return;
  if (msg.channel.type === "dm") return;
  if (msg.member) {if (msg.member.hasPermission("KICK_MEMBERS")) return;}

  //Blacklisted words


  //const exception = ["556927352513363968"]
  const filter = ['nigger','n1gg3r','nigga','wigga','n1gger','rapist','n1gga','n!gger','n!gga','n!gg3r','nlgga','nlgger','nlgg3r','n1gg3r',
"n¡gg3r",'fag','retard','faggot',"n i g g e r",'beaner',"b e a n e r","be a ner","b e a ner","be an er","be an e r",
'niggair','wetback','w e t b a c k','wet ba ck','we tback','w e tback','rëtard','rétard','retarted',
'r.e.t.a.r.d','r3tard','nigg3rs','nigg3r','retar.d','n1gg3r','queer','nlgger','fags','chink','niggar','niggur','nigor',
'nigre','nigar','niggah','nigguh','Niglet','nigglet','Nigra','negra','niggra','nigrah','nigruh','chinki','chinky',
'spick','spig','spigotty','whitey','nazi','Wigger','Wigga','wegro','nikker','nikker','nikka','nibbah',
'nibba','nicka','f a g g o t','f a g','molest','molester','molestar','fagot','faget','niggar','n1gg@','n1gg@','n1gga','negro','kill urself','kill yourself']

  filter.forEach(word => {
    if (msg.content.toLowerCase().includes(word)) {
      if (msg.guild.id == "548949555597803550") {
        let logEmbed = new Discord.MessageEmbed()
        .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
        .setDescription(`**Message sent by ${msg.author.tag} deleted in ${msg.channel}**`)
        .addField("Message Content", msg.content)
        .addField("Reason","Banned words")
        .setColor('RED')
        bot.channels.cache.get("791344325761302588").send(logEmbed)
      }
      msg.delete()
      return msg.reply("Your message has been removed for containing words that possibly go against StudGang or Discord's Terms!").then(m => m.delete({timeout: 7000}))
    }
  })

 //Only attachment filter
  const channels = ["791317380521394186","791317348735909928","791317335695818752","791318209978302474"]
  if (channels.includes(msg.channel.id) && msg.attachments.size === 0) {
     msg.delete()
     msg.reply("Please do not talk in this channel!").then(m => m.delete({timeout: 5000}))
  }

//Attachment limit
  let exchannel = ["791317380521394186","791317317140217866","791317348735909928","791317335695818752","791318209978302474","791317380521394186"]
  if (msg.attachments.size >= 2 && !exchannel.includes(msg.channel.id)) {
    msg.delete({reason: "Multiple Attachments"})
    return msg.reply("Please upload **one** attachment per message.").then(m => m.delete({timeout: 7000}))

  } else if (msg.attachments.size > 1 && !msg.member.permissions.has("MANAGE_MESSAGES") && !exchannel.includes(msg.channel.id)) {

    const atttimestamps = attcooldowns
    const attcooldownAmount = 15000;
    const now = Date.now();

    if (!atttimestamps.has(msg.author.id)) {
      atttimestamps.set(msg.author.id, now);
      setTimeout(() => atttimestamps.delete(msg.author.id), attcooldownAmount);
    } else {
      let expirationTime = atttimestamps.get(msg.author.id) + attcooldownAmount;

      if (now < expirationTime && !exception.includes(msg.channel.id)) {
        let timeLeft = (expirationTime - now) / 1000;
        msg.delete({reason: "Cooldown"})
        return msg.reply(`Please wait ${Math.round(timeLeft.toFixed(1))} more second(s) before posting another attachment.`);
      }

      atttimestamps.set(msg.author.id, now);
      setTimeout(() => atttimestamps.delete(msg.author.id), attcooldownAmount);

    }
  }
})

//#Login as bot#

bot.login(process.env.BOT_TOKEN)
