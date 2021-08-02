module.exports = {
name: "skip",
code: `
$skipSong
⏩ Skipeada!
$onlyIf[$queueLength>1; $queueLength No hay mas canciones en la cola]
$onlyIf[$queueLength!=0;**No hay nada reproduciendose**]
$onlyIf[$voiceID!=;**No estas en un canal de voz**]`
}
