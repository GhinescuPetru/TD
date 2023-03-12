function getFibonacci(n) {
    if (isNaN(n))
        return "not allowed";
    else if (n < 1 || n > 10) 
        return "not allowed";
    else {
        var fibonacci = [1, 1];
        for (var i = 2; i < n; i++) {
            fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        }
        return fibonacci;
    }
}

//tests

console.log(getFibonacci(2)); // [1, 1]

console.log(getFibonacci(5)); // [1, 1, 2, 3, 5]

console.log(getFibonacci()); // "not allowed"

console.log(getFibonacci(0)); // "not allowed"

console.log(getFibonacci(11)); // "not allowed"
