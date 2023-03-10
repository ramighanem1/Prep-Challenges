'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// referring to the given examples find out the pattern used and
// Write a function that takes 2 integers and prints the patterns using recursion
// 
// Input: 16, 5
// Output: [16, 11, 6, 1, -4, 1, 6, 11, 16]
//
// Input: 50, 9
// Output: [50, 41, 32, 23, 14, 5, -4, 5, 14, 23, 32, 41, 50]
//

const recursionPattern = (int1, int2, current = int1, direction = 'down', result = []) => {
    result.push(current);

    if (current < 0) {
        current += int2;
        result.push(current);
        direction = 'up';
    }

    if (current === int1 && direction === 'up') {
        return result;
    }

    if (direction === 'down') {
        return recursionPattern(int1, int2, current - int2, direction, result);
    } else {
        return recursionPattern(int1, int2, current + int2, direction, result);
    }
};
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
// 
// Write a function that takes a string (HTML tag)
// and extracts the link from the HTML tag
//
// Ex: <a href="http://www.hackerrank.com"><h1><b>HackerRank</b></h1></a> ==> "www.hackerrank.com"
// Ex: <a href="http://www.something.org"><h1><b>HackerRank</b></h1></a> ==> "www.something.org"
//
// Note:
//  Assume that links end with .com, .org or .net
// 

const filterLinks = (str) => {
    // write your code here
    const hrefIndex = str.indexOf('href="');
    if (hrefIndex === -1) {
        return null;
    }

    const linkStart = hrefIndex + 6; // length of 'href="'
    const linkEnd = str.indexOf('"', linkStart);
    if (linkEnd === -1) {
        return null;
    }

    const link = str.slice(linkStart, linkEnd);
    if (link.endsWith('.com') || link.endsWith('.org') || link.endsWith('.net')) {
        if (link.startsWith('http')) {
            return link.slice(link.indexOf('//') + 2)
        }
        return link;
    } else {
        return null;
    }
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Required:
// 
// A phrase is considered palindrome if, after converting all uppercase letters into lowercase letters
// and removing all non-alphanumeric characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
// 
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// as you can see "amanaplanacanalpanama" is a palindrome.
//

const isPalindrome = (str) => {
    str = str.toLowerCase();
    str = str.replace(/[^a-z0-9]/g, '');

    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:
// 
//  Write a function that takes 2 arguments, one is a string and the other is an array
//  the function should return a boolean than indicates if both have the same pattern
//
//  EX: 
//  Input: "abba", ['cat', 'dog', 'dog', 'cat']
//  output: true
//
//  as you can see the a acted as the cat in the array, and b as the dog, and the pattern was the same
//
//  Input: "cda", ['cat', 'dog', 'cat']
//  output: false
//
//  here if the pattern had three different things so the array should had 3 different things to be true
//

const samePattern = (str, arr) => {
    if (str.length !== arr.length) {
        return false;
    }
    const link = {};

    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        const word = arr[i];

        if (!link[char] && !Object.values(link).includes(word)) {
            link[char] = word;
        } else if (link[char] !== word) {
            return false;
        }
    }

    return true;
}
// -------------------------------------------------------------------------------------------------------


module.exports = { recursionPattern, filterLinks, isPalindrome, samePattern };