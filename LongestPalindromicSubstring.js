var longestPalindrome = function(s) {
    var words = [s[0]]
    var temp = ""
    for(var i = 0; i < s.length;i++){
        temp = temp + s[i]
        for(var x = 1 + i; x < s.length;x++){
            temp = temp + s[x]
            if(temp.split("").reverse().join("") == temp){
                words.push(temp)
            }
        }
        temp = ""
    }
    var results = words[0]
    for(var g of words){
        if(results.length < g.length){
            results = g
        }
    }

    return results
};


console.log(longestPalindrome("babad"))
console.log(longestPalindrome("cbbd"))
console.log(longestPalindrome("a"))
console.log(longestPalindrome("ab"))
console.log(longestPalindrome("bb"))
