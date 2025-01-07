const firstName = `Aldo `
const lastName = `Wiranata`
console.log(`${firstName} ${lastName}`)

let price = 10
let VAT = 0.25
let total = `Total: ${(price * (1 +  VAT)).toFixed(2) }`
console.log(total)

let header = `Template String`
let tags = ["template strings ", "JS" , " ES6"]

let html = `<h2>${header}</h2><ul>`
for (const x of tags){
    html +=`<li>${x}</li>`
}

let demo = document.getElementById("demo").
innerHTML = html


