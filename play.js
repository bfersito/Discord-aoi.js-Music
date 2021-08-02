module.exports = {
 name: "play",
 code: `
$color[RANDOM]
$thumbnail[$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;thumbnail]]
$title[**Comando Ejecutado Exitosamente**]
$description[**Musica agregada con exito!**
[$songInfo[title]\\]($songInfo[url])]
$playSong[$message;1m;{title:Error}{description:*Ocurrio un error al reproducier esta cancion**}{color:RANDOM}]
$onlyIf[$message!=;{title:Error}{description:**Introduzca el nombre de una cancion**}]
$onlyIf[$voiceID!=;**No estas en un canal de voz**]
$cooldown[3s;Espere para volver a utilizar el comando!]`
}
