/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

// const countOdds = function(low, high) {
//     let array = [];
//     while(low <= high) {
//       array.push(low)
//         low = low + 1
//         // console.log(array) 
//         // Here I have all the numbers between the two inputs. 
//     }
//    let oddNums = array.filter(number => {
//     return number % 2 !== 0;
//    })
//     //Here I have all the odd numbers between the two inputs
//     console.log(oddNums)
//     return oddNums.length
// };

//Above is my raw attempt, I kept getting memory errors when submitting even though Running the code works.
//Here is an extremely efficient solution I found while researching
const countOdds = function(low, high) {
    if (low % 2 === 0) {
        low++  
    } 
    if (high % 2 === 0) {
        high-- 
    } 
    
    return (high - low) / 2 + 1
};