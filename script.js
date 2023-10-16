const mostFrequentChar = (s) => {
  const count = {}; // Create an empty object to keep track of character frequencies

  // First loop to populate the count object
  for (let char of s) {
    if (!(char in count)) {
      // Check if the character is not already in the count object
      count[char] = 0; // Initialize the count for this character to 0
    }
    count[char] += 1; // Increment the count for this character
  }

  let best = null; // Variable to store the most frequent character; initialized to null

  // Second loop to find the most frequent character
  for (let char of s) {
    // If best is null or if the count of the current character is greater than the count of 'best'
    if (best === null || count[char] > count[best]) {
      best = char; // Update 'best' to the current character
    }
  }
  return best; // Return the most frequent character
};

mostFrequentChar("bookeeper");
