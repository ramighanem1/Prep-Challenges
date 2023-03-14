'use strict';

// Resource:
// split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// lastIndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
// join: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Using the slice and indexOf/lastIndexOf methods, return the last word in a string
//
// Note: consider that the string may have one word but never empty
//
// Input: "I did my waiting 12 years of it in Azkaban"
// Output: "Azkaban"
//
// Input: "Impossible"
// Output: "Impossible"
//

const LastWord = (str) => {

    const lastSpaceIndex = str.lastIndexOf(' ');
    if (lastSpaceIndex === -1) {
        return str;
    }
    return str.slice(lastSpaceIndex + 1);
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
//  You can try to do the same task using the split method
//
//  Input: "you dare use my spells against me, potter"
//  Output: "potter"

const LastWord_2 = (str) => {
    const words = str.split(' ');
    if (words.length === 1) {
        return str;
    }
    return words[words.length - 1];
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Required:
//
// Number 2 was easy right?, ok then using the splice method replace all the "I" with "We", "am" with "are" and "was" with "were"
//
// Note: you may use another method for search (indexOf)
//
// Input:  "I thought you had a plan"
// Output: "We thought you had a plan"
//
// Input: "I was there 3000 years ago"
// Output: "We were there 3000 years ago"

// Input: "I am Venom"
// Output: "We are Venom"
//

const replaceWords = (str) => {
    const words = str.split(' ');

    for (let i = 0; i < words.length; i++) {
        if (words[i].indexOf('I') !== -1) {
            words.splice(i, 1, 'We');
        }
        if (words[i].indexOf('am') !== -1) {
            words.splice(i, 1, 'are');
        }
        if (words[i].indexOf('was') !== -1) {
            words.splice(i, 1, 'were');
        }
    }

    return words.join(' ');
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:
//
// Write a function that "joins" the array of words together and puts a comma "," after every five words
//
// Input:["move","it","away","from","the","street"] 
// Output: "move it away from the, street" 
//

const arrToStr = (arr) => {
    // write your code here
    let result = arr.reduce((acc, cur, i) => {
        if (i > 0 && i % 5 === 0) {
          return acc + ', ' + cur;
        } else {
          return acc + ' ' + cur;
        }
      });

      if(arr.length % 5 === 0)
      {
        result += ',';
      }

 
   

    return result;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 05:
// Optional:
//
// Simon got a string manipulation question for his interview,
// it asked him to replace the duplicated letters in a string to an indicator and counter
// as in the example:
//
// Input:"aaaa bbb sdf"
// Output: "a4 b3 s1d1f1"
//
// Input:"door"
// Output: "d1o2r1"
//
// help him by writing the function
//

const letterCounter = (str) => {
    // write your code here

    let Result=str[0];
    let curnt=str[0];
    let prev =str[0];
    let CountChat=1;
    let isSpace=false;
    
    for(let i = 1 ; i<str.length;i++)
    {
        let curnt = str[i];
        
        if(curnt==' ')
        {
         isSpace=true;   
        }
       
        if(!isNaN(curnt))
        {
            continue;
        }
        
        if(curnt === prev)
        {
            CountChat++;
        }
        else
        {
            if(isSpace)
            {
                Result=Result+CountChat + ' '+curnt;
                isSpace=false;   
            }
            else
            {
                Result=Result+CountChat + curnt;
            }
            
            CountChat=1;
            prev=curnt;
            
        }

        
    }
    Result+=CountChat;


    return Result;
    
}
// -------------------------------------------------------------------------------------------------------


module.exports = { LastWord, LastWord_2, replaceWords, arrToStr, letterCounter };