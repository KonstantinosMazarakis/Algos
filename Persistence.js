// The additive persistence of an integer, n, is the number of times you have to replace n with the sum of its digits until n becomes a single digit integer.

// The multiplicative persistence of an integer, n, is the number of times you have to replace n with the product of its digits until n becomes a single digit integer.

// Create two functions that take an integer as an argument and:

// Return its additive persistence.
// Return its multiplicative persistence.
// Examples: Additive Persistence
// additivePersistence(1679583) ➞ 3
// // 1 + 6 + 7 + 9 + 5 + 8 + 3 = 39
// // 3 + 9 = 12
// // 1 + 2 = 3
// // It takes 3 iterations to reach a single-digit number.

// additivePersistence(123456) ➞ 2
// // 1 + 2 + 3 + 4 + 5 + 6 = 21
// // 2 + 1 = 3

// additivePersistence(6) ➞ 0

function additivePersistence(num) {
    text_num = num.toString()
    if(text_num.length == 1){
        return 0
    }
    let count = 0;
	for(var i = 0;i < text_num.length;i++){
        count = count + Number(text_num[i])
    }
    count = count.toString()
    while(count.length > 1){
        let new_count = 0
        for(var r = 0;r <count.length;r++){
            new_count = new_count + Number(count[r])
        }
        count = new_count
        count = count.toString()
    }
    return count
}



console.log(additivePersistence(1679583))
console.log(additivePersistence(123456))
console.log(additivePersistence(771))
console.log(additivePersistence(56))
console.log(additivePersistence(6))
