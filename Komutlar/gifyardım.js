const Discord = require ("discord.js");

exports.run = (client, message) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
const EmbedCrewCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**  xDark Bot  **")
.setThumbnail("https://cdn.discordapp.com/attachments/779099271441809420/780001661166813204/gif_lencor.gif")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu]()** **•** **[Botun Davet Linki](issions=2146958847&scope=bot)** **•** **[Web-Site]()**
Bir komut hakkında detaylı __yardım için__: **-yardım**

**• Komutlar**
> [-normal](https://discord.gg/qzHTkhjQgT) → normal gifler.
> [-NSFW](https://discord.gg/qzHTkhjQgT) → NSFW gifler.
> [-hayvan](https://discord.gg/qzHTkhjQgT) → Hayvan gifleri.
> [-kemalsunal](https://discord.gg/qzHTkhjQgT) → **Kemal Sunal** gifleri.

**• Bilgilendirme**

> :bulb: **Discord Js Sürümü : 12.5.0**
> :robot: **Yapımcım : GusyPvP#2778**
> :eye_in_speech_bubble: **Sürümüm : 2.0.1**
© 2020 xDark | Tüm hakları saklıdır.
`)
 

return message.channel.send(EmbedCrewCode)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'gifyardım', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-yardım'
};