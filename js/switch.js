const hariIni = new Date().getDay()
let day

switch (hariIni){
    case 0: 
    day = "Sunday"
    break

    case 1 : 
    day = "Monday"
    break
    
    case 2 : 
    day = "Tuesday"
    break

    case 3 : 
    day = "Wednesday"
    break

    case 4 : 
    day = "Thursday"
    break

    case 5 : 
    day = "Friday"
    break

    case 6 : 
    day = "Saturday"
    break

    default :
    day = "This is weekend"
    
}

console.log(day)