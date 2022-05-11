/**
 * @param {number[]} salary
 * @return {number}
 */

//Get the total sum
//Subtract the minimum and maximum value in the array
//Divide the result by two

const average = function(salary) {
    const { length } = salary;
    if(length <= 2) {
        return 0;
    };
    
    //Using reduce to caluclate the sum of the array and find the greatest and smallest integer
    
    const {sum, min, max} = salary.reduce((acc, val) => {
        let {min,max,sum} = acc;
        sum += val;
        if(val > max){
            max = val;
        };
        if(val < min) {
            min = val;
        }
        return { min, max, sum};
    }, {
        min: Number.MAX_VALUE,
        max: Number.MIN_VALUE,
        sum: 0
    });
    return (sum - min - max) / (length - 2)
};