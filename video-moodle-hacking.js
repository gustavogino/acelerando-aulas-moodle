var time = 600, //Define o tempo (em segundos) para ir no vídeo
    rate = 1;   //Define a taxa de velocidade de reprodução do vídeo (até 2x, máximo do youtube)
var data1 = {
        event: "command",
        func: "setplaybackRate",
        args: [rate, !0]
    },
    message1 = JSON.stringify(data1);
document.getElementById("h5p-youtube-0").contentWindow.postMessage(message1, "*");
var data2 = {
        event: "command",
        func: "seekTo",
        args: [time, !0]
    },
    message2 = JSON.stringify(data2);
document.getElementById("h5p-youtube-0").contentWindow.postMessage(message2, "*");