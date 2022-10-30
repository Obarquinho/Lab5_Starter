// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voSelect = document.getElementById("voice-select");
  let voices = [];

  synth.addEventListener('voiceschanged', () => {
    voices = synth.getVoices();
    for (let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voSelect.appendChild(option);
    }
    console.log(voices);
  });
  console.log(voices);

  var timer = setInterval(function() {
    voices = synth.getVoices();
    console.log(voices);
    if (voices.length !== 0) {
      clearInterval(timer);
    }
}, 200);
}

