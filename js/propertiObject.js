const person ={
    firstName : "Aldo",
    lastName : "Wiranata",
    fullName : function(){
        return `Name = ${this.firstName} ${this.lastName}`
    }
}

const Students = person.fullName()
console.log(Students)


const people = {
    firstName : "Aldo",
    lastName : "wiranata",
    age : 18,
    eyeColor : "blue"
}

const person1 =  people.age + "Years old"
const person2 = people["firstName"]
const person3 = people.lastName
const person4 = people.eyeColor

console.log(person1,person2,person3,person4)

let x = "firstName"
console.log(people[x])


people.nationality = "Indonesia"
console.log(people.nationality)

delete people.age;
delete people["firstName"]

console.log(people.age)
console.log(people.firstName)
