const Person = {
    firstName : "Aldo",
    lastName : "Wiranata",
    age : 18
}

let profile = ""
for(let x in Person){
    profile +=  Person[x] + " "
}


console.log(profile)

const numbers = [20,10,30,2,3]

let addNum = " "

function newNum(value){
addNum += value + " "
}

numbers.forEach(newNum)
console.log(addNum)

for(let x in numbers){
    addNum += numbers[x] + ","
}

console.log(addNum)