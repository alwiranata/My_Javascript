//
const PI = 3.14
console.log(PI)

//constant array 

const cars = ["Toyota" ,"BMW" , "Volvo"]

cars [0] = "new"

cars.push("Aldo Wiranata")

console.log(cars)

//Objects
const car ={
    type : "Fiat",
    model : "500",
    color : "White",
}

//change property
car.color = "red"

//add  a property
car. owner ="Aldo"

console.log(car)

//Block Scope

const x = 10
{
    const x = 2
}
console.log(x)

//redeclaring

var y = 10
var y = 2

console.log(y)


//hoisting
carName = "Aldo Wiranata"
var carName 
console.log(carName)

const angka =1000

if(angka >= 1001 ){
    console.log("domba belum keluar")
}else if(angka <= 999 ){
    console.log("Domba belum keluar")
}else{
  console.log("Domba pink spawn")
}