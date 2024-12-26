const car = {
    type  : "aldo",
    mobil : 500,
    color : "White"
}
console.log(car)

const person = {}

person.firstName = " Aldo"
person.lastName = "Wiranata"
person.age = 18

console.log(person)

const person1 = new Object()

person1.firstName  = "aldo"
person1.lastName = "Wiranata"
person1.age = 20

console.log(person1)

class person2{
    constructor(firstName,lastName,age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    getProfile(){
        return `Name = ${this.firstName} ${this.lastName} , Age = ${this.age}`
    }
}

const profile = new person2("aldo" , "wiranata" , 18)
console.log(profile.getProfile())


const myName ={
    firstName : "aldo",
    lastName : "Wiranata",
    age :  18,
    profile : function getProfile(){
        return `Name = ${this.firstName} ${this.lastName} Age = ${this.age}`
    }
}

console.log(myName.profile())

const myProfile ={
    firstName : "aldo",
    lastName : "Wiranata",
    age : 18,
    fullName : function(){
        return `Name = ${this.firstName} ${this.lastName} ${this.age}`
    }
}

const person3 = myProfile
person3.age = 20

console.log(person3)
console.log(person3.fullName())