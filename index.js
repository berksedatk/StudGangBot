const fs = require('fs');
const config = require('./config.json');

function prettyString(string) {
 return string.replace(/_/g, " ").replace(/guild/gi, "Server").replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})
}

const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);

app.get('/', (req, res) => {
  res.send("ok");
})

server.listen(process.env.PORT, () => {
  console.log("Listenin on port " + process.env.PORT)
})

//#Discord Client#

const Discord = require("discord.js");
const bot = new Discord.Client({disableMentions: "everyone"});
bot.snipes = new Map();
bot.edits = new Map();
bot.wallets = new Map();
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
    `For ~help`,
    'The StudGang',
    ];

  setInterval(() => {
    let activity = activities[Math.floor(Math.random() * activities.length)];
    bot.user.setActivity(activity, { type: "WATCHING" });
  }, 10000);

  bot.user.setStatus("dnd").catch(console.error);

  //Channel update
  bot.channels.cache.get("708151643539243018").setName(`『Members』『${bot.guilds.cache.get("548949555597803550").members.cache.size}』`)
  setInterval(function() {
    bot.channels.cache.get("708151643539243018").setName(`『Members:』『${bot.guilds.cache.get("548949555597803550").members.cache.size}』`)
  }, 300000)

  setInterval(() => {
    var date = new Date();
    if (date.getHours() - 5 >= 0 && date.getHours() - 5 < 12){
      bot.channels.cache.get("591123171504029696").setName('😈 | noodles "sex" dungeon')
    } else if (date.getHours() - 5 >= 12){
      bot.channels.cache.get("591123171504029696").setName("🍝 | noodles cave")
    }
  }, 60000);

 let msgchannels = ["551217309369368625","712358040908595220","706175822297432195","697544526365065236","674791248816635914","561608898478342164"]

  msgchannels.forEach(channelid => {
    setInterval(function() {
    bot.channels.cache.get(channelid).send({embed: {description: "Always feel free to check out our main chat <#548949556210040862>! :)"}})
  }, 1800000)
  })

  console.log('Bot is ready.')

})

 let msgchannels = ["680905360613310464"]

  msgchannels.forEach(channelid => {
    setInterval(function() {
    bot.channels.cache.get(channelid).send({embed:  {description: 'Make sure to read <#680898144195969028> before you create a ticket!\nOur staff work very hard to make sure to get to you as quick as they can!\nMake sure to add a reason to make their jobs a bit easier!\n **Commands Usage:** -new <reason>'}})
  }, 5.04e+7)
  })


   let msgchannel = ["556929328672145430"]

  msgchannel.forEach(channelid => {
    setInterval(function() {
    bot.channels.cache.get(channelid).send({embed:  {description: 'Make a suggestion for it to posted in <#622983734144139295> so everyone can vote on your server ideas!\n Keep in mind that not all suggestions will happen even if you have a lot of checkmarks!\nSilly suggestions can get you warned for wrong channel usage!\n**Command Usage** !suggest <suggestion>'}})
  }, 8.64e+7)
  })


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
    return message.reply(":x: | You are not allowed to use this command.");
  }
  if (command.blacklisted && message.channel.id === "548949556210040862") {
    return message.reply(":x: | This command cannot be used in this channel!");
  }
  if (command.admin && !config.admins.includes(message.author.id)) {
    return message.reply(":x: | You are not allowed to use this command!");
  }
  if (command.guildOnly && message.channel.type === "dm") {
    return message.reply(":x: | This command cannot be executed in direct messages.");
  }
  if (command.blacklistedChannels && !message.member.permissions.has("MANAGE_MESSAGES")) {
    let e;
    command.blacklistedChannels.forEach(channel => {
      if (message.channel.id === channel) e = true
    })
    if (e) return message.channel.send(":x: | This command cant be used in this channel!")
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
  const cooldownAmount = (command.cooldown || 3) * 1000;

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
  if (msg.author.bot) return;
  if (msg.channel.type === "dm") return;

  if (msg.member) {
    if (msg.member.hasPermission("KICK_MEMBERS")) return;
  }

  //Blacklisted words
  const exception = ["556927352513363968"]
  const filter = ["niggеr","nigga","n1gg@","n1gga","negro","n¡gg3r","n¡gger","fag","nigger","retard","faggot","n i g g e r","k k k","beaner","b e a n e r","be a ner","b e a ner","be an er","be an e r",
      'niggar','niggair','wetback','w e t b a c k','wet ba ck','we tback','w e tback','wet bac k','niggèr','rëtard','rétard','retarted','retarded',
      'r.e.t.a.r.d','r3tard','nigg3rs','nigg3r','retar.d','n1gg3r','nlgger','queer','qu e e r','que e r','qu ee r','q u e e r','q-e-e-r','quuer','quer','fags']

  filter.forEach(word => {
    if (msg.content.toLowerCase().includes(word)) {
      msg.delete()
      return msg.reply("Your message has been removed for containing innapropiate words!").then(m => m.delete({timeout: 2000}))
    }

  })

  //Only attachment filter
  const channels = ["580083502867808287","635320134847954954","718972368416014367","689865780292223012","739462264720982037","739464889487065139","739463286776659969"]
  if (channels.includes(msg.channel.id) && msg.attachments.size === 0) {
     msg.delete()
     msg.reply("Please do not talk in this channel!").then(m => m.delete({timeout: 5000}))
  }

  //Automessage
  let rankroles = ["556938158416199715","556938790770311199","557223369162883082","557221724371025945","557222514909118484","584601046295379969","627101839099428864","627103275497553920","627105311584550912","627103434528784414"]
  let has = false
  rankroles.forEach(r => {
    if (msg.member.roles.cache.has(r)) has = true
  })

  if (has === false && msg.content.toLowerCase().includes("where") && msg.content.toLowerCase().includes("nude")) return msg.reply("It seems like you are looking for NSFW(nude) channels, I suggest you to check out the <#721635790760706079> channel for more info.");
  if (has === false && msg.content.toLowerCase().includes("send") && msg.content.toLowerCase().includes("nude")) return msg.reply("It seems like you are looking for NSFW(nude) channels, I suggest you to check out the <#721635790760706079> channel for more info.");
  if (has === false && msg.content.toLowerCase().includes("i") && msg.content.toLowerCase().includes("nude")) return msg.reply("It seems like you are looking for NSFW(nude) channels, I suggest you to check out the <#721635790760706079> channel for more info.");

 //Attachment limit
  let exchannel = ["673555443406077952","673587338865278978","673555191026417674","704071330391261184"]
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
