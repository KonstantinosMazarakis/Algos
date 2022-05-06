




 var lengthOfLongestSubstring = function(s) {
    var combinations = []
    for(var i =0;i < s.length;i++){
        combinations.push(s[i])
        for(var x =1+i;x < s.length;x++){
            if(combinations[i].includes(s[x]) == false){
                combinations[i] = combinations[i] + s[x]
            }else{
                x = x + s.length
            }
        }
    }
    let results = combinations[0]
    console.log(combinations)
    for(var w of combinations){
        if(results.length < w.length){
           results = w
         }
    }
    console.log(results)
    return results.length
};

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("pwwkew"))
