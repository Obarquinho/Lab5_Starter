// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSel = document.getElementById("horn-select");
  var hornOpt = document.querySelectorAll("img")[0];
  var audPath = "";
  const audSel = document.getElementsByClassName("hidden");
  const conf = new JSConfetti();
  hornSel.addEventListener("change", function(){
    if (this.value == "air-horn"){
      hornOpt.src="assets/images/air-horn.svg";
      audPath = "assets/audio/air-horn.mp3";
      audSel[0].src = audPath;
    }
    else if (this.value == "car-horn"){
      hornOpt.src = "assets/images/car-horn.svg";
      audPath = "assets/audio/car-horn.mp3";
      audSel[0].src = audPath;
    }
    else{
      hornOpt.src = "assets/images/party-horn.svg";
      audPath = "assets/audio/party-horn.mp3"
      audSel[0].src = audPath;
    }
  });
  const butSound = document.querySelectorAll("button")[0];
  butSound.addEventListener("click", function(){
    audSel[0].play();
    if(audPath == "assets/audio/party-horn.mp3"){
      conf.addConfetti();
    }
  });

  const soundBar = document.getElementById("volume-controls");
  const soundE = soundBar.querySelectorAll("input")[0];
  const soundI = soundBar.querySelectorAll("img")[0];
  soundE.addEventListener("change", function(){
    audSel[0].volume = (soundE.value / 100.0);
    if(soundE.value < 33 && soundE.value >= 1){
      soundI.src = "assets/icons/volume-level-1.svg";
    }
    else if(soundE.value >= 33 && soundE.value < 67){
      soundI.src = "assets/icons/volume-level-2.svg";
    }
    else if(soundE.value >= 67){
      soundI.src = "assets/icons/volume-level-3.svg";
    }
    else{
      soundI.src = "assets/icons/volume-level-0.svg";
    }
  })
}