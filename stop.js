module.exports = {
name: "stop",
code: `$stopSong
$sendMessage[⏹️ Parada.;no]
$onlyIf[$queueLength!=0;No hay nada en reproduccion]
$deleteIn[5s]`
}
