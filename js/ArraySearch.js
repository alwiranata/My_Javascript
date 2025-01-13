const fruits =["Banana","Mango","Apple"]
console.log(fruits.includes("Mango"))

function findNumber (value , index ,array){
    return value > 18
}
 const numbers = [10 ,9,19,20]
 const func =  numbers.find(findNumber)
 console.log(func)

 const temp = [10,20,30,40 ,50]
 let pos = temp.findLastIndex( x => x > 40)
 console.log(pos)