let video = document.getElementById('video1');

function retroceder(){
    video.currentTime -= 15;
}

function avancar(){
    video.currentTime += 15;
}

function diminuir_velocidade(){
    video.playbackRate -= 0.5;
}

function aumentar_velocidade(){
    video.playbackRate += 0.5;
}

function play(){
    video.play();
}

function pause(){
    video.pause();
}

function stop(){
    video.pause();
    video.currentTime = 0;
}

