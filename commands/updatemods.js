const Discord = require("discord.js");
const modlist = require("../modlist.json");

module.exports = {
  name: "updatemods",
  category: "Utility",
  description: "Updates the mod list.",
  reqPermissions: ["MANAGE_GUILD"],
  execute(bot, message, args) {

    const modBanner = "https://cdn.discordapp.com/attachments/659898976438452234/697719297509949441/Adobe_Post_20200409_1550200.7230005945244219-01.jpeg"
    const eventBanner = "https://cdn.discordapp.com/attachments/659898976438452234/697719297211891752/Adobe_Post_20200409_1604090.1084822664302203-01.jpeg"
    const partnerBanner = "https://cdn.discordapp.com/attachments/659898976438452234/697719297941962782/Adobe_Post_20200409_1547130.011374860602526904-02.jpeg"
    
    const modTotal = modlist.moderation.owner.length + modlist.moderation.coowner.length + modlist.moderation.headadmins.length + modlist.moderation.admins.length + modlist.moderation.managers.length +
          modlist.moderation.seniormods.length + modlist.moderation.mods.length + modlist.moderation.juniormods.length + modlist.moderation.helpers.length
    
    const eventTotal = modlist.events.head.length + modlist.events.senior.length + modlist.events.junior.length + modlist.events.trial.length
    
    const partnerTotal = modlist.partner.managers.length
    
    const mod = new Discord.MessageEmbed()
    .setImage(modBanner)
    .setColor("RED")
    
    const moderationTeam = new Discord.MessageEmbed()
    .setAuthor(`Total: ${modTotal}`, message.guild.iconURL())
    .setTitle("**StudGang Moderation Teams**")
    .setDescription("Frequently Updated List")
    .setColor("RED")
    .addField("Owner", modlist.moderation.owner[0] ? modlist.moderation.owner : "None", true)
    .addField("Co-Owner", modlist.moderation.coowner[0] ? modlist.moderation.coowner : "None", true)
    .addField("Head Admin(s)", modlist.moderation.headadmins[0] ? modlist.moderation.headadmins : "None", true)
    .addField("Admin(s)", modlist.moderation.admins[0] ? modlist.moderation.admins : "None", true)
    .addField("Manager(s)", modlist.moderation.managers[0] ? modlist.moderation.managers : "None", true)
    .addField("Senior Moderator(s)", modlist.moderation.seniormods[0] ? modlist.moderation.seniormods : "None", true)
    .addField("Moderator(s)", modlist.moderation.mods[0] ? modlist.moderation.mods : "None", true)
    .addField("Junior Moderator(s)", modlist.moderation.juniormods[0] ? modlist.moderation.juniormods : "None", true)
    .addField("Helper(s)", modlist.moderation.helpers[0] ? modlist.moderation.helpers : "None", true)
    
    const event = new Discord.MessageEmbed()
    .setImage(eventBanner)
    .setColor("ORANGE")
    
    const eventTeam = new Discord.MessageEmbed()
    .setAuthor(`Total: ${eventTotal}`, message.guild.iconURL())
    .setTitle("**StudGang Event Handlers**")
    .setDescription("Frequently Updated List")
    .setColor("ORANGE")
    .addField("Head of Events Team:", modlist.events.head[0] ? modlist.events.head : "None", true)
    .addField("Senior Events Team:", modlist.events.senior[0] ? modlist.events.senior : "None", true)
    .addField("Junior Events Team:", modlist.events.junior[0] ? modlist.events.junior : "None", true)
    .addField("Trial Events Team:", modlist.events.trial[0] ? modlist.events.trial : "None", true)
    
    const partner = new Discord.MessageEmbed()
    .setImage(partnerBanner)
    .setColor("GREEN") //#sax is cute!
    
    const partnerTeam = new Discord.MessageEmbed()
    .setAuthor(`Total: ${partnerTotal}`, message.guild.iconURL())
    .setTitle("**StudGang Partnership Handlers**")
    .setDescription("Frequently Updated List")
    .setColor("GREEN")
    .addField("Head of Partnership Managers:", modlist.partner.head[0] ? modlist.partner.head : "None", true)
    .addField("Partnership Manager(s):", modlist.partner.managers[0] ? modlist.partner.managers : "None", true)
   
        
  message.delete().catch(O_o=>{}); 
    message.channel.send(mod).then(() => {
      message.channel.send(moderationTeam).then(() => {
        message.channel.send(event).then(() => {
          message.channel.send(eventTeam).then(() => {
            message.channel.send(partner).then(() => {
              message.channel.send(partnerTeam)
            })
          })
        })
      })
    })
  }
};
