// s = "()";
// s = "()[]{}";
// s = "(]";

//make a variable called stack equal to an empty array.
//make a variable called map and add key and values based on the charaters
//create a loop that intereated over each character in a string
//within the loop create two if statements
//first one check if the the characters fromt he string are in the map
//if not add the character to the stack and then do continue so that the loop
//restarts and looks at the necxt character in the string and if that charcacter is the map
//go to the next if statement
//the next if statement check to see if the character inside the stack matches any inside the map
//if it does then remove the character from the stack and then the loop ends and returns true
//if the stack is equal to 0
//if the the loop ends and the stack is not equal to 0 then return false

var isValid = function (s) {
  const stack = [];
  const map = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  for (const char of s) {
    const isBracket = char in map;
    if (!isBracket) {
      stack.push(char);
      continue;
    }

    const isEqual = stack[stack.length - 1] === map[char];
    if (isEqual) {
      stack.pop();
      continue;
    }

    return false;
  }

  return stack.length === 0;
};
