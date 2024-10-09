function divideAndConquerSum(a) {

    //helper function to compute sum recursively
    function recursiveSum(arr, lo, hi) {
        if (lo > hi) {
            return 0;  // return 0 for invalid range 
        }
        if (lo == hi) {
            return arr[lo];  // base case, only one element
        }
        
        // split the array into three parts
        var part1 = Math.floor((hi - lo) / 3) + lo;  // First third
        var part2 = Math.floor(2 * (hi - lo) / 3) + lo + 1;  // Second third
        
        // Recursively sum each third
        var sum1 = recursiveSum(arr, lo, part1);
        var sum2 = recursiveSum(arr, part1 + 1, part2);
        var sum3 = recursiveSum(arr, part2 + 1, hi);

        // return the sum 
        return sum1 + sum2 + sum3;
    }
    
    // use helper function
    return recursiveSum(a, 0, a.length - 1);
}
