// //Zadacha n1
// let u = [];
// function replicate(number, times) {
//     if(times <= 0 ){
//         return u
//     }
//     else if (times === 1) {
//         u.push(number)
//         return u
//     }
//     else{
//         y = (0 +  replicate(number, times - 1));
//         if( y !== number){
//             y = number
//         }
//         u.push(y)
//         return u
//     }    
// }
// console.log(replicate(69,5));

//Vtoroy variant!!!!!!!!!
// let u = [];
// function replicate(number, times) {
//     if (times <= 0) {
//         return u
//     }
//     else if (times === 1) {
//         u.push(number)
//         return u
//     }
//     else {
//         y = parseInt(0 + replicate(number, times - 1));
//         u.push(y)
//         return u
//     }
// }
// console.log(replicate(69, 7));


//Zadacha N2
// function specialMultiply(x,y) {
//     if (x !== undefined && y !== undefined){
//         return x*y 
//     }
//     else{
//         return function (y) {
//         return x*y
//     }
//     }
// }
// console.log(specialMultiply(4,4))
// console.log(specialMultiply(4)(4))
// const step1 = specialMultiply(4);
// console.log(step1(16))


// Zadacha N3
// function guessingGame(x) {
//     const prNum = (Math.floor(Math.random() * 10)+1);
//     let found = false;
//     return function (y) {
//         if (x === 0) {
//             return `No more guesses the answer was "${prNum}". Please start a new game`
//         }
//         else if (y > 10 || y < 1) {
//             return `Enter a number from 1 to 10`
//         }   
//         else if (prNum === y && x !== 0) {
//             found = true
//             x--
//             return `You got it!`
//         }
//         else if(x > 0 && found === true){
//             x--
//            return  `You know the answer. What do you want from me?`
//         }
//         else if(x === 0 && found === true){
//             x--
//            return  `No more guesses the answer "${prNum}"! Please start a new game`
//         }
//         else if (prNum !== y && prNum > y && x !== 0) {
//             x--
//             return `Your guess is too high!`
//         }
//         else if (prNum !== y && prNum < y && x !== 0) {
//             x--
//             return `Your guess is too low!`
//         }
//     }
// }
// const game = guessingGame(5);
// console.log(game(1))
// console.log(game(4))
// console.log(game(5))
// console.log(game(6))
// console.log(game(8))
// console.log(game(2))
// console.log(game(3))
// console.log(game(4))




