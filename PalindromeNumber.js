// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.


var isPalindrome = function(x) {
    x = x.toString()
    var reverced = x.split("").reverse().join("")
    if(x == reverced){
        return true
    }else{
        return false
    }
};


console.log(isPalindrome(121))
console.log(isPalindrome(155))