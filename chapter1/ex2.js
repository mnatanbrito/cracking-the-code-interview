/**
 * Give 2 strings, write a method to decide if one is a permutation of the other.
 */


// Time complexity O(n)
// Space complexity O(n)
function isPermutation(str1, str2) {
	if(str1.length !== str2.length) {
  	return false;
  }
  
  const map = {};
  
  for(let i = 0; i < str1.length; i++) {
  	const current = str1.charCodeAt(i);
  	if(map[current]) {
    	map[current] += 1;
    }
    else {
    	map[current] = 1;
    }
  }
  
  for(let i = 0; i < str2.length; i++) {
  	const current = str2.charCodeAt(i);
  	if(!map[current]) {
    	return false;
    }
    else {
    	map[current] = map[current] - 1;
      if(map[current] < 0) {
      	return false;
      }
    }
  }
  
  return true;
}