 // backticks used to make template literal --- when key is pressed, function fires. audio element will be selected based on keyCode(stored in event object)
 function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    // selects element w class of key ---for styling purposes to chnage
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(audio);
    // if there is no audio linked with pressed key, stop function from running
    if (!audio) return;

    // plays audio from START w each keydown VS waiting until sound is over to play again
    audio.currentTime = 0;
    // if there IS audio linked with pressed key, play the audio
    audio.play();

    // adds class of 'playing' each time key is pressed
    key.classList.add("playing");
  }

  function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    // console.log(e.propertyName);
    this.classList.remove("playing");
  }

  const keys = document.querySelectorAll(".key");
  keys.forEach((key) =>
    key.addEventListener("transitionend", removeTransition)
  );

  window.addEventListener("keydown", playSound);