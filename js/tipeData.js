//numbers 
let length = 16
let weight = 7.5
let num = length + weight
console.log(num)
//string

let firstName = 'aldo'
let lastName = "Wiranata"
let string = firstName + lastName
console.log(string)
//Booleans 

let x = true
let y = false
let Booleans = x + y 
console.log(Booleans)
//object

const Person = {
    firstName : "aldo",
    lastName : " Wiranata",
    nama(){
        console.log(firstName + lastName)
    }
}

Person.nama()

//Array Object

const cars = [
    "Name",
    "PW",
    "Username"
]
for (let i = 0 ; i < cars.length; i++){
    console.log(cars[i])
}

//date obeject

const date = new Date("2024-12-25")
console.log(date)
