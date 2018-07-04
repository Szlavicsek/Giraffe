const horn1 = document.querySelector('#horn1')
const horn2 = document.querySelector('#horn2')
const bottomed = document.querySelector('.bottom')
const ear = document.querySelector('.giraffe-ear')
const giraffeHead = document.querySelector('.giraffe-head')
const giraffe = document.querySelector('.giraffe')
const eyes = document.querySelectorAll('.eyes')
const body = document.querySelector('body')
const trigger = document.querySelector('.trigger1')

let popUp = function() {
  if (!trigger.classList.contains("disabled")) {
    giraffe.classList.toggle("action");
    if (giraffe.classList.contains("action")) {
      body.pseudoStyle("after", "opacity", "0");
      ear.classList.add("ear-anim")
      giraffe.classList.add("bounce")
      giraffeHead.classList.add("b-head")
      giraffe.style.bottom = "0px"
      horn1.classList.add("giraffe-horn1")
      horn2.classList.add("giraffe-horn2")
      setTimeout(function() {
        ear.classList.remove("ear-anim")
        ear.classList.add("ear-loop")
        eyes.forEach(x => x.classList.add("visible"))
        horn1.style.top = "20px";
      }, 990)
      setTimeout(function() {
        horn2.style.top = "20px";
        horn1.classList.remove("giraffe-horn1")
        horn2.classList.remove("giraffe-horn2")
        horn1.classList.add("horn-loop")
        horn2.classList.add("horn-loop")
      }, 1090)
    } else {
      ear.classList.remove("ear-loop");
      body.pseudoStyle("after", "opacity", "1");
      giraffe.classList.remove("bounce")
      giraffe.classList.add("bounce-reverse")
      giraffeHead.classList.remove("b-head")
      giraffeHead.classList.add("b-head-reverse")
      setTimeout(function() {
        giraffe.style.bottom = "-450px"
        giraffe.classList.remove("bounce-reverse")
        giraffeHead.classList.remove("b-head-reverse")
        horn1.style.top = "35px"
        horn2.style.top = "35px"
      }, 950)
    }
    trigger.classList.toggle("active")
    trigger.classList.toggle("disabled");
    setTimeout(function() {
      trigger.classList.toggle("disabled");
    }, 1000)
  };
}
document.addEventListener('readystatechange', event => {
  if (event.target.readyState === "complete") {
    popUp()
  }
})
trigger.addEventListener("click", popUp);