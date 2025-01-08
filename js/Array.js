const day = ["Sunday" ,"Monday","Thursday"]
const newDay = [
    "Wednesday",
    "Thursday",
    "Friday"
]
const endDay = []
endDay[0] = "Sunday"
endDay[1] = "Monday"

const cars = new Array("BMW" , "Toyota")
console.log(day , newDay , endDay , cars)

cars[1] = "Suzuki"
console.log(cars)

const fruits =  ["Banana" , "Orange" , " Apple" , "Mango"]
console.log(fruits.toString())

const Person = ["John", " Doe", 46]
console.log(Person[0])

//cara mengaskses object 
const Person1 = {
    firstName : "ALdo" ,
    lastName: " Wiranata",
    age : 18
}
console.log(Person1.firstName)

function myFunction(){
    return "Hello World"
}

fruits[0] = Date.now
fruits[1] = myFunction()
fruits[2] = cars
console.log(fruits)


const juice = fruits[fruits.length -1]
console.log(juice)

let myBody = [
    "Kepala",
    "Pundak",
    "Lutut",
    "Kaki",
]

let text = " "
function myBody1(value){
    text += value
}

myBody.forEach(myBody1)
console.log(text)



for(let i = 0; i< myBody.length;i++){
    console.log(myBody[i])
}

const title = ["Menu" , "SubMenu" , "Title"]
title.push("About")
title[title.length] = "Help"
console.log(title)

const point = new Array(40,50)
console.log(point, typeof point , Array.isArray(point))

const myObj ={
    firstName : "aldo",
    lastName : "Wiranata",
    FullName: function() {
        return this.firstName + this.lastName
    },
    toy : [
        {
            name : "BMW",
            models :["320"]
        },
        {
            name : "Ford",
            models :["Fiesta", "Focus", "Mustang"]
        },
        {
            name : "Fiat",
            models: ["500" ,"Panda"]
        }
    ]
}

console.log(myObj.FullName())

let x = " "
let y = " "
let z = " "
for(let i in myObj.toy){
    y+= "name = " + myObj.toy[i].name + "; "
    z+= "models =" + myObj.toy[i].models + "; "
   for(let j in myObj.toy[i].models){
    x += "models : " + myObj.toy[i].models[j] +  "; "
   }
}
console.log(x)
console.log(y)
console.log(z)
