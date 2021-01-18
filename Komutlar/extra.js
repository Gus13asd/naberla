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
.setThumbnail("https://cdn.discordapp.com/emojis/770265448892858368.gif?v=1")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu]()** **•** **[Botun Davet Linki]()** **•** **[Web-Site]()**
Bir komut hakkında detaylı __yardım için__: **-yardım**


**• Komutlar**
> [-rol-ver](https://discord.gg/qzHTkhjQgT) → Etiketlediniz kullanıcıya rol verir.
> [-rol-al](https://discord.gg/qzHTkhjQgT) → Etiketlediğin kişden rol alır.
> [-anket](https://discord.gg/qzHTkhjQgT) → Anket yaparsınız.
> [-rololuştur](https://discord.gg/qzHTkhjQgT) → Rol oluşturur.
> [-id](https://discord.gg/qzHTkhjQgT) → İstediğin bi kişinin ID sini alır.
> [-kanal-id](https://discord.gg/qzHTkhjQgT) → Etiketlediğin kanalın ID sini atar.
> [-davet-oluştur](https://discord.gg/qzHTkhjQgT) → Etiketlediğin kanalın ID sini atar.
> [-oy-kick](https://discord.gg/qzHTkhjQgT) → Oylama yaparak bir kişiyi sunucudan atar.
> [-hesapla](https://discord.gg/qzHTkhjQgT) → Matamatik işlemi yapar.
> [-davet-sıralaması](https://discord.gg/qzHTkhjQgT) → Sunucuda yapılan davetleri sıralar
> [-iltifat](https://discord.gg/qzHTkhjQgT) → Etiketlediğin kişiye bot iltifat eder.
> [-nick](https://discord.gg/qzHTkhjQgT) → Etiketlediğin kişinin ismini değiştirir.
> [-tekerleme](https://discord.gg/qzHTkhjQgT) → Tekerleme yazar.
> [-ilgincbilgi](https://discord.gg/qzHTkhjQgT) → İlginç bilgi yazar.
> [-desteaç](https://discord.gg/qzHTkhjQgT) → Zula deste açar.
> [-soygunyap](https://discord.gg/qzHTkhjQgT) → Vurgun yapmaya hazırmısın? :D

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
    name: 'extra', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-extra'
};