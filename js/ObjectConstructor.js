function Person(first, last ,age,eye){
    this.firstname = first
    this.lastName = last
    this.age =age || 0
    this.eye = eye
}

const People =new Person("Aldo" ,"Wiranata" , null ,"blue")
People.age = 19
console.log(People)

const People2 = Person.prototype.nationality = "Indonesia"
console.log(People2)

//metode fungsi konstruktor 
function Orang(first,last,age,eyeColor){
    this.firstname =first
    this.lastName =last
    this.age = age
    this.eyeColor =eyeColor
    this.fullName = function(){
        return this.firstname + " " + this.lastName
    }
}

const orang1 = new Orang("aldo" ,"Wiranata" ,18 , "blue")
console.log(orang1)

orang1.changeName = function (name){
    this.lastName = name
    return this.fullName()
}
console.log(orang1.changeName("PW"))
console.log(orang1)

Orang.prototype.changeFirstname  = function (name){
    this.firstname = name
    return this.fullName()
}

const changefirst = orang1.changeFirstname("doal")
console.log(changefirst)
console.log(orang1)


