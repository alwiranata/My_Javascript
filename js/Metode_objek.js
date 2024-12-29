const person = {
    firstName : "Aldo",
    lastName :  "Wiranata",
    fullName : function(){
        return this.firstName + " "+ this.lastName
    }
}
const name = person.fullName()
const nameFunction = person.fullName
console.log(name)
console.log(nameFunction)

person.newName = function(){
    return this.lastName + " " + this.firstName
}
const person1 = person.newName()
console.log(person1)

person.nameToUpperCase = function(){
    return (this.firstName + " "+ this.lastName).toUpperCase()
}

const person2 = person.nameToUpperCase()
console.log(person2)

