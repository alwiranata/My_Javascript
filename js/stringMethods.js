let text = "Aldo"
let length = text.length
let char = text.charAt(0)

let letter = text.at(2)
let getThree = text[3]

//ekstrak
let newText = "aldo,wiranata,18"
let part = newText.slice(7,13)
let part1 = newText.slice(7)
let part2 = newText.slice(-13,-2)

let part3 = newText.substring(7)
let part4 = newText.substr(-3)
let part5 = newText.substr(7,5)

console.log(length, char,letter ,getThree ,part ,part1 ,part2 ,part3 )
console.log(part4)
console.log(part5)

//to up and lower

let text1= "Hello World"
let up = text1.toUpperCase()
let low = text1.toLowerCase()
console.log(up , low)

//menggabungkana

let first = "aldo"
let last = "wiranata"
let age = 18
let fullName = first.concat(" " , last ," ", age)

console.log(fullName)

//trim
let newName = "    alwi   " 
let trim = newName.trim()
let star = newName.trimStart()
let end = newName.trimEnd()
console.log(trim)
console.log(star + trim)
console.log(end + trim )


//pad

let num= 5
let number = num.toString()
let z =  number.padStart(4,"0");
let y = number.padEnd(5,"0")

//repeat

let add =  "Password"
let result = add.repeat(3)
console.log(result)

//replace
let replace = " Please visit Microsoft to visit  new"
let newText2 = replace.replace(/Micsrosoft/i, " W3Schools")

let newText3 = replace.replaceAll("visit" , "go")
console.log(newText2 ,newText3)

//to array with split
let huruf = "a|b|c|d|e"
let split = huruf.split("|")
console.log(split)
for(let i = 0 ; i< split.length; i++){
 console.log(split[i])
}
