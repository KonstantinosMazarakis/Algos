// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

var isValid = function (s) {
    const hashMap = { "(": ")", "{": "}", "[": "]" };
    const stack = [];
    for (let ch of s) {
      if (hashMap[ch]) {
        // ch is an opening bracket
        stack.push(hashMap[ch]);
        console.log(stack)
        console.log(ch)
      } else if (stack.length > 0 && stack[stack.length - 1] === ch) {
        // ch is a closing bracket and top of stack matches
        stack.pop();
      } else {
        // ch is a closing bracket and top of the stack doesn't match
        return false;
      }
    }
    return stack.length === 0;
  };


console.log(isValid("()[]{}"))
console.log(isValid("{[]}"))