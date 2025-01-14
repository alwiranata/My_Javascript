const fruits = ["Banana","Apple","Manggo"]
console.log(fruits.sort())
console.log(fruits.reverse())
console.log(fruits.toReversed())
console.log(fruits.toSorted())

const cars =[
    {type: "Volvo", year :2016},
    {type: "Saab", year :2001},
    {type: "BMW", year : 2010}
]
console.log(cars[0].year)

cars.sort((p1 , p2) =>{

    if(p1.year < p2.year){
        return -1
    }

    if(p1.year > p2.year){
        return 0
    }

})

console.log(cars)

const numbers = [45,4,9,19 ]
const over18= numbers.filter(myFunction)

function myFunction(value){
    return value > 18
}

console.log(over18)


const sum = numbers.reduce(myFunction10)

function myFunction10(total,value){
    return total + value
}

console.log(sum)


const num2 = [10,20,9,30]
let allOver18 = Array.from("adsko")

function myFunction (value){
    return value > 18
}

console.log(allOver18)



const myFruits = ["Banana", "Orange", "Apple" ,"Mango"]

let txt2= ""
const keys = myFruits.entries()

for(let x of keys){
    txt2 += x
}

console.log(txt2)