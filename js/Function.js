//function

function addMember(firstName , lastName){
    return firstName + " " + lastName
}

const add = addMember("Aldo" , "Wiranata")
console.log(add)


function addValue (param1 , param2){
    return  param1 * param2
}

const value = addValue(10 , 10)
console.log(value)

//operator
function toCelcius(fahrenheit){
    return (5/9) * (fahrenheit - 32)
}

let addNum = toCelcius(77)
console.log(addNum)

addNum = toCelcius
console.log(addNum)

addNum = toCelcius()
console.log(addNum)

let newCelcius =  toCelcius(77)
let text = "The Temperature is " + newCelcius + " Celcius"
console.log(text)
text = "The Temperature is " + toCelcius(77) + " Celcius"
console.log(text)

//local variabel

function localVariabel (value1, value2){
    let myName = value1 + value2
    return myName
}
let name = localVariabel("aldo" ," wiranata")
console.log(name)