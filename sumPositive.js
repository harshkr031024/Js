const num=[10,-3,5,0,8]
let sum=0
let n=4
function sumPositive(num) {
    while (n >= 0) {
        if (num[n]>0) {
            sum += num[n];
        console.log(sum)
        }
        n -=1;

    }
    }
sumPositive([10,-3,5,0,8])