document.getElementById("PW").innerHTML = "PW"
document.getElementById("UN").innerHTML = "UN"

let ON = document.getElementById("ON") 
let OFF = document.getElementById("OFF")
let Lamp = document.getElementById("light")


ON.addEventListener("click" ,function(){
    Lamp.innerHTML = "ON"
    Lamp.style.color = "blue"
    Lamp.style.fontSize = "35px"
    Lamp.style.display =  "blox"
})

OFF.addEventListener("click", function(){
    Lamp.innerHTML= "OFF"
    Lamp.style.color = "tomato"
    Lamp.style.fontSize = ""
    // Lamp.style.display = "none"
})

// function ON1(){
//     Lamp.innerHTML = "ON1"
//     Lamp.style.color = "blue"
// }

// function OFF1(){
//     Lamp.innerHTML = "OFF1"
//     Lamp.style.color = "tomato"
// }