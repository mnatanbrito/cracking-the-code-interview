/**
 * Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 */


// Time complexity O(n^2)
// Space complexity O(1)
function allUniqueBruteForce(str) {
  const strArray = str.split('');

  for (let i = 0; i < strArray.length; i++) {
    for (let j = i + 1; j < strArray.length; j++) {
      if (strArray[i] === strArray[j]) {
        return false;
      }
    }
  }

  return true;
}

// Time complexity O(n)
// Space complexity O(n)
function allUniqueLinear(str) {
  const map = {};
  const strArray = str.split('');

  for (let i = 0; i < strArray.length; i++) {
    if (map[strArray[i]]) {
      return false;
    }

    map[strArray[i]] = 1;
  }

  return true;
}
