const person ={
    name  : "Aldo",
    age : 18,
    city : "Pekanabru"
}

let display =document.getElementById("menu")

display.innerHTML = person.name + "," + person.age + "," + person.city 

let text =  ""
for(let x in person){
    text += person[x] + " ";
}
const idText = document.getElementById("text").innerHTML = text

const myArray = Object.values(person)

document.getElementById("demo").innerHTML = myArray

const fruits = {Banana : 200 , Apple: 100 , Carrot : 300}
let app = ""

for (let[fruit, value ] of  Object.entries(fruits)){
    app += fruit + " : " + value +"</br>"
}

document.getElementById("fruit").innerHTML = app

let myString = JSON.stringify(person)
document.getElementById("JSON").innerHTML = myString
