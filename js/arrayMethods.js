const fruits = [ "Banana" , " Orange" , "Apple" ,"Mango"]

console.log(fruits.toString())
console.log(fruits.at(2))
console.log(fruits[2])
console.log(fruits.join(" *; "))
console.log(fruits.pop())

let fruit = fruits.pop()
console.log(fruit)

fruits.push("kiwi")
console.log(fruits)
console.log(fruits.shift())
console.log(fruits)
console.log(fruits.unshift("lemon"))
console.log(fruits)

console.log(fruits[0] ="kiwi")
console.log(fruits[fruits.length] = "aldo")
 console.log(fruit.length)
 console.log(fruits)
 console.log( delete fruits[0])
 console.log(fruits)
  

const myGirls = ["Mifatahul Jannah" , "Tasya"]
const myBoys = ["Aldo" , " Wirnaata"]
const myBaby = ["falmi", "Yana"]
const myChildrem = myGirls.concat(myBoys)
console.log(myChildrem)

const add = myGirls.concat(myBoys,myBaby)
console.log(add )
console.log(myGirls.concat("i dont know"))