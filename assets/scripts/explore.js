// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voSelect = document.getElementById("voice-select");
  const but = document.querySelectorAll("button")[0];
  const cont = document.getElementById("text-to-speak");
  const smile = document.querySelectorAll("img")[0];
  let voices = [];
  let utter = new SpeechSynthesisUtterance("your mom");

  synth.addEventListener('voiceschanged', () => {
    voices = synth.getVoices();
    for (let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute('lang', voices[i].lang);
      option.setAttribute('voice', voices[i].name);
      voSelect.appendChild(option);
    }
    console.log(voices);
  });
  console.log(voices);

  voSelect.addEventListener("change", function(){
    utter.lang = this.lang;
    //utter.voice = this.name;
    
    console.log(this.options[1].value);
    console.log(this.value);
    for (let i = 0; i < this.options.length; i++){
      if (this.options[i].value === this.value){
        utter.voice = voices[i-1];
        utter.lang = this.options[i].lang;
        console.log(utter.voice);
        console.log(utter.lang);
      }
    }
  });

  but.addEventListener("click", function(){
    let te = cont.value;
    utter.text = te;
    synth.speak(utter);
    if(synth.speaking){
      smile.src = "assets/images/smiling-open.png";
    }
  })
  var stod = setInterval(function() {
    if(!synth.speaking){
      smile.src = "assets/images/smiling.png";
    }
  },100)
}

