/*
let month = prompt("Enter your birth month number");

switch(month){
    case "1" : document.writeln("JAN")
    break;
    case "2" : document.writeln("FEB")
    break;
    case "3" : document.writeln("MAR")
    break;
    case "4" : document.writeln("APR")
    break;
    default:alert("enter number betweens 1 to 4") 
}
*/

// Loops in javascript


for(let i = 0 ; i <= 10; i++){
    //  document.writeln(i + "<br>")
/*   
    if(i%2 == 0){
        document.writeln("Even Nm: " + i + "<br>")
     }else{
        document.writeln("Odd Num: " + i + "<br>")
     }
*/

// if(i == 4){
//     break
// }

// if(i==5){
//     continue
// }

// document.writeln(i)

}


/*
// for in loop
let marks = {
    html:90,
    css:95,
    js:45
}

for(m in marks){
    document.writeln( m + ": " +  marks[m] + "<br>")
}
console.log(marks)

// for of loop
let computer = ['monitor','keyboard','mouse','mobile','speakers']


for(let i of computer){
    document.writeln(i + "<br>")
}
*/

// while loop

// let a = 0;

// while(a<10){
//      document.writeln(a)
//      a++
// }
// do while

/*
do{
    document.writeln(a)
    a++
}while(a<10)
*/


// Date Types Methods
// String methods
/*
let name = "naresh"
let address = "ameerpet"
let email = "naresh@gmail.com"

// document.writeln(name + "<br>");
// name += address
// document.writeln(name)
// document.writeln(name + address)
// document.writeln(name.concat(" Ameerpet ", email))

document.writeln(`Name is :${name}, <br> Address is: ${address} <br> and his ${email} <br>` )
document.writeln(email.length)

let UpperStr = name.toUpperCase();
document.writeln(UpperStr)

let lowerStr = UpperStr.toLowerCase()
document.writeln(lowerStr)

let sliceStr = email.slice(2,9)
document.writeln(`<h1> ${sliceStr} <h1>`)

let searchStr = email.search('@')
document.writeln(`<h1> ${searchStr} <h1>`)

let findStr = email.replace("gmail","ymail")
document.writeln(findStr)

let includesStr = email.includes(".com")
console.log(includesStr)
*/
