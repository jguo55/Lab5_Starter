// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const horn = document.getElementById("horn-select")
  const hornimg = document.querySelector("#expose img")
  const hornaudio = document.querySelector("#expose audio")
  horn.addEventListener("change", (event) => {
    console.log(event.target.value)
    hornimg.src = `./Lab5_Starter/assets/images/${event.target.value}.svg`;
    hornimg.alt = `${event.target.value}-image`;
    hornaudio.src = `./Lab5_Starter/assets/audio/${event.target.value}.mp3`;
    console.log(hornaudio.src)
  })

  const hornvolume = document.querySelector("#volume-controls input")
  const hornvolumeimg = document.querySelector("#volume-controls img")
  hornvolume.addEventListener("input", (event) => {
    const vol = event.target.value
    if(vol == 0){
      hornvolumeimg.src = "./Lab5_Starter/assets/icons/volume-level-0.svg"
      hornvolumeimg.alt = "Volume Level 0"
    } else if (vol > 0 && vol < 33) {
      hornvolumeimg.src = "./Lab5_Starter/assets/icons/volume-level-1.svg"
      hornvolumeimg.alt = "Volume Level 1"
    } else if (vol >= 33 && vol < 67) {
      hornvolumeimg.src = "./Lab5_Starter/assets/icons/volume-level-2.svg"
      hornvolumeimg.alt = "Volume Level 2"
    } else if (vol >= 67 && vol <= 100) {
      hornvolumeimg.src = "./Lab5_Starter/assets/icons/volume-level-3.svg"
      hornvolumeimg.alt = "Volume Level 3"
    }
    hornaudio.volume = vol/100;
  })

  const hornbutton = document.querySelector("#expose button")
  const jsConfetti = new JSConfetti()
  hornbutton.addEventListener("click", (event) => {
    const audio = new Audio(hornaudio.src)
    audio.volume = hornaudio.volume
    audio.play()
    if(hornimg.alt == "party-horn-image"){
      jsConfetti.addConfetti()
    }
  })
}