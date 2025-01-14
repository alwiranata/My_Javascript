const numbers = [10,20,30,40,50]

let txt= ""
numbers.forEach(num)

function num(value) {
    txt += value +"<br>"
}

console.log(txt)

const addNum = numbers.map(add2) 

function add2(value){
    return value * 2
}

console.log(addNum)

const myArr = [1,2,3,4,5,6,7]
const newArr =myArr.flatMap((x) => x * 2)
console.log(newArr)