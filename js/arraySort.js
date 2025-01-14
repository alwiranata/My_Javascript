const fruits = ["Banana","Apple","Manggo"]
console.log(fruits.sort())
console.log(fruits.reverse())
console.log(fruits.toReversed())
console.log(fruits.toSorted())

const cars =[
    {type: "Volvo", year :2016},
    {type: "Saab", year :2001},
    {type: "BMW", year : 2010}
]
console.log(cars[0].year)

cars.sort((p1 , p2) =>{

    if(p1.year < p2.year){
        return -1
    }

    if(p1.year > p2.year){
        return 0
    }

})

console.log(cars)
