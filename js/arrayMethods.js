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
const newfruits = ["Banana"," Orange", "apple ", "Manggo"] 
console.log(newfruits.copyWithin(2,0))
console.log(newfruits.copyWithin(2,0,2))

const newArr = [[1,2],[3,4],[5,6]]
console.log(newArr.flat())

const myValue = [1,2,3,4,5,6]
console.log(myValue.flatMap(x=> [x, x *10]))
console.log(myValue.splice(2,0, "lemon" ,"kiwi"))
const pfruits = ["Banana", "Orange", "Apple", "Mango"]
console.log(pfruits.splice(2, 2, "Kiwi"))
console.log(pfruits)

const fruitsa = ["Banana", "Orange", "Apple", "Mango"];
console.log("splice" ,fruitsa.splice(0 , 1))
console.log(fruitsa)

const fruitsp = ["Banana", "Orange", "Lemon", "Apple", "Mango"]
const citrus = fruitsp.slice(1,3)
console.log(citrus)
console.log(fruitsp) 