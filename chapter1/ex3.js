/**
 * Write a method to replace all spaces in a string with %20.
 */

// Time complexity O(n)
// Space complexity O(n)
function urlify(str, trueLength) {
  let spaces = 0;
  for (let i = 0; i < trueLength; i++) {
    if (str.charAt(i) === ' ') {
      spaces++;
    }
  }

  const resultStr = new Array(trueLength + spaces * 3);
  let resultIndex = 0;
  for (let i = 0; i < trueLength; i++) {
    if (str.charAt(i) === ' ') {
      resultStr[resultIndex] = '%';
      resultStr[resultIndex + 1] = '2';
      resultStr[resultIndex + 2] = '0';

      resultIndex += 3;
    } else {
      resultStr[resultIndex] = str.charAt(i);
      resultIndex++;
    }
  }

  return resultStr.join('');
}

console.log(urlify('Mr  John Smith', 15));
