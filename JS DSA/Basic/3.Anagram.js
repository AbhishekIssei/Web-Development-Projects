// Ques 3 - Valid Anagram
// An Anagram is a word or phrase formed by rearranging the letters of
// a different word or phrase, using all the original letters exactly once.

// Input: (s = "anagram"), (t = "nagaram"); ----->>>>>   Output: true;
// Input: (s = "rat"), (t = "car");         ----->>>>>   Output: false;

// 1st Approach
const isAnagram = function(s,t) {
    s = s.split("").sort().join("");
    t = t.split("").sort().join("");
    return s === t;

};

console.log(isAnagram('anagram','nagaram'));

// anagram => [a,n,a,g,r,a,m] => [a,a,a,g,m,n,r] => aaagmnr
// nagaram => [n,a,g,a,r,a,m] => [a,a,a,g,m,n,r] => aaagmnr 

const isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    let obj1 = {};
    let obj2 = {};
  
    for (let i = 0; i < s.length; i++) {
      obj1[s[i]] = (obj1[s[i]] || 0) + 1;
      obj2[t[i]] = (obj2[t[i]] || 0) + 1;
    }
  
    for (const key in obj1) {
      if (obj1[key] !== obj2[key]) return false;
    }
  
    return true;
  };
  
  console.log(isAnagram("anagram", "nagarm"));

// Copilot

  function isAnagram(str1, str2) {
    // If the lengths of the strings are not equal, they cannot be anagrams
    if (str1.length !== str2.length) {
        return false;
    }

    // Sort the characters of both strings and compare them
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

// Example usage:
console.log(isAnagram('listen', 'silent')); // Output: true
console.log(isAnagram('hello', 'world'));   // Output: false