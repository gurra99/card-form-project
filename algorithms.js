////////////////////////////////////////////////////////////////
//////////////////////   Array   ///////////////////////////////
////////////////////////////////////////////////////////////////

function returnHighestOddPairSum(array) {
  let highestOddNumber = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let sum = array[i] + array[j];

      if (sum % 2 !== 0 && sum > highestOddNumber) {
        highestOddNumber = sum;
      }
    }
  }

  return highestOddNumber;
}

console.log(returnHighestOddPairSum([19, 2, 42, 18]));
console.log(returnHighestOddPairSum([61, 32, 51]));

////////////////////////////////////////////////////////////////
//////////////////////   Text    ///////////////////////////////
////////////////////////////////////////////////////////////////

// removes instances of 4 identical consecutive chracters in a row. And keep it at a minimum of 3 characters.
function removeConsecutiveCharacters(inputCharacters) {
  let result = [];

  for (let i = 0; i < inputCharacters.length; ) {
    let count = 1;

    // Count consecutive identical characters
    for (let j = i + 1; j < inputCharacters.length; j++) {
      if (inputCharacters[i] === inputCharacters[j]) {
        count++;
      } else {
        // Stop if the next character is different
        break;
      }
    }

    // Add 3 identical characters to the result
    if (count > 3) {
      result.push(...inputCharacters.slice(i, i + 3)); // Keep only 3 characters
    } else {
      result.push(...inputCharacters.slice(i, i + count)); // Keep all if 3 or less
    }

    // Move the index to the next no consecutive character
    i += count;
  }

  return result.join("");
}

console.log(removeConsecutiveCharacters("ffdttttyy"));
console.log(removeConsecutiveCharacters("iiikigggg"));
