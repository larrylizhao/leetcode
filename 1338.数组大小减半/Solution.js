/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    const LEN = arr.length;
    const check = new Map();
    let rtn = 0;
    if(LEN < 3) {
        return 1;
    }
    for (let num of arr) {
        check.set(num, (check.get(num) || 0) + 1);
    }

    let values = [...check.values()];
    values.sort((a,b) => b-a);

    let total = 0;
    for(let count of values) {
        total += count;
        rtn++;
        if(total >= LEN /2){
            return rtn;
        }
    }
};

