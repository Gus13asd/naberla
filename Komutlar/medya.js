const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {
if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  const davet = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle('Sosyal medyalar')
  .setDescription("**Takip et =**[vale__diecast](https://www.instagram.com/vale__diecast/) \n ** Takip et = **[iamegeyoruk](https://www.instagram.com/iamegeyoruk/)")
 .addField('``Code by GusyPvP#2778``')  
message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'medya',
  description: '',
  usage: ''
};