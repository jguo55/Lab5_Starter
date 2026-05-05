// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const voiceSelect = document.querySelector("#voice-select")
  var voices = []

  function populateVoices() {
    voices = synth.getVoices();
    for (const voice of voices){
      const option = document.createElement("option")
      option.textContent = `${voice.name} (${voice.lang})`;

      if (voice.default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voice.lang);
      option.setAttribute("data-name", voice.name);
      voiceSelect.appendChild(option);
    }
  
  }

  populateVoices();
  speechSynthesis.onvoiceschanged = populateVoices;

  const voiceButton = document.querySelector("#explore button")
  const textArea = document.querySelector("#explore textarea")
  voiceButton.addEventListener("click", (event) => {
    const utterThis = new SpeechSynthesisUtterance(textArea.value)
    const selectedOption =
      voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (const voice of voices) {
      if (voice.name === selectedOption) {
        utterThis.voice = voice;
      }
    }
    synth.speak(utterThis);
    //switch to speaking face. then use utterThis end event to switch back to smiley
    const face = document.querySelector("#explore img")
    face.src = "assets/images/smiling-open.png"
    utterThis.addEventListener("end", (event) => {
      face.src = "assets/images/smiling.png"
    })
  })

}