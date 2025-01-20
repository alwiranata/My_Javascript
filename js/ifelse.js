const readline = require('readline')

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question('Masukkan jam 1-24 : ',(input) =>{
    const jam = parseInt(input)
    
    if( jam >= 1 && jam <=24){
        if(jam>= 5 && jam <=  12){
            console.log("Selamat pagi")
        }
        else if ( jam > 12 && jam <= 17 ){
            console.log("Selamat siang")
        }
        else if (jam >17 && jam <=19){
            console.log("selamat sore")
        }
        else{
            console.log("selamat malam")
        }
    }else{
        console.log("Jam tidak valid")
    }
    
    rl.close()
   
})
