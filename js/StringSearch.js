let text = "aku aldo wiranata 18 'aldo'"
let index  = text.indexOf("wiranata") 
let index2 = text.lastIndexOf("18")
let index3 = text.indexOf("aldo",7)
let index4 = text.lastIndexOf("aldo",15)
let index5 = text.search("wiranata")
let index6 = text.match("aldo")
let index7 = text.match(/aldo/g)
const iterator = text.matchAll(/aldo/g)
let check = text.includes("aldo")
let checkPosition = text.includes("aldo",26)
const pw = "aldo wiranata"
const username = "1234 56 78"
const check1 = pw.startsWith("aldo" ,5)
const check2 = username.endsWith("78",10)

console.log(index , index2, index3 , index4 , index5, index6, index7 , iterator ,check , checkPosition)
console.log(check1 ,check2)