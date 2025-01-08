let x = 20
let isInteger1 =Number.isInteger(10)
let isInteger2 =Number.isInteger(10.5)
isInteger1 =Number.isSafeInteger(10);
isInteger2 = Number.isSafeInteger(12345678901234567890);
console.log(x ,isInteger1,isInteger2) 