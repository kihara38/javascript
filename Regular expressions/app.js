// const user={email:'nelki@gmail.com'};
// try {
//   //produce referenceError
//   // myFunction()

//   //produce a TypeError
//   // null.myFunction();

//   //will produce syntaxError
//   // eval('hello world')

//   //will produce a URIError
//   // decodeURIComponent('%')

//   if(!user.name){
//     //throw 'user has no name';
//     throw new SyntaxError('user has no name');
//   }
// } catch (e) {
//   console.log(e);
//   // console.log(e.message);
//   // console.log(e.name);
//   // console.log(e instanceof ReferenceError);

   
// }finally{
//   console.log('Finally runs reguardless of results...')
// }
// console.log('Program continues...')

// let re;
// re=/hello/;
// re=/hello/i;//i = case insensitive
// // re=/hello/g;//g=global search


// console.log(re);
// console.log(re.source);

////exec() -Return rresult in an array or null
// const result=re.exec('nelki hello world');
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// //test()- return true or false
// const result=re.test('Hello');
// console.log(result)

// //match()-Return result array or null
// const str='Hello there';
// const result=str.match(re)
// console.log(result)

// //search()-Returns index of the first match if not found returns -1
// const str='nelki Hello There';
// const result=str.search(re);
// console.log(result)

// //replace()-return new string with some or new matches of a pattern
// const str='Hello There';
// const newStr=str.replace(re,'Hi')
// console.log(newStr)


let re;
re=/hello/;
re=/hello/i;

//metacharacter symbol
re=/^h/i; //must start with
re=/d$/i; //must ends with
re=/^hello$/i; //must begin and end with
re=/h.llo/i; //matches any one character
re=/h*llo/i; //matches any character 0 or more times
re=/gre?a?y/i; //optional character
re=/gre?a?y\?/i; //Escape character

//Brackets []-character set
re=/gr[ae]y/i; //must be an a or e
re=/[GF]ray/i; //must be an a or e
re=/[^GF]ray/i; //match anything except a G or F
re=/[A-Z]ray/; //match any uppercase letter
re=/[a-z]ray/; //match any lowercase letter
re=/[A-Za-z]ray/; //match any case letter
re=/[0-9]ray/; //match any digit

//braces {}-quantifiers
re=/hel{2}o/i;//must occur {m} amount of times
re=/hel{2,4}o/i;//must occur {m} amount of times
re=/hel{2,}o/i;//must occur atleast {m} amount of times

//parentheses ()-grouping
re=/^([0-9]*){3}$/;

//shorthand character classes
re= /\w/; //word character- alphanumeric or_
re= /\w+/; //+ = one or more 
re= /\W+/; //Non-word character
re= /\d/; //match any digit
re= /\d+/; //match any digit 0 or moretimes
re= /\D/; //match any Non-digit
re= /\s/; //match any whitespace char
re= /\S/; //match NON- whitespace char
re=/Hell\b/i; //word boundary

//assertions
re=/x(?=y)/; // match x only if followed by y
re=/x(?!y)/; // match x only if NOT followed by y

//string to match
const str='xz';

//log Results
const result=re.exec(str);
console.log(result);

function reTest(re, str){
  if(re.test(str)){
    console.log(`${str} Matches ${re.source}`);
  }else{
    console.log(`${str} Does Not Match ${re.source}`)
  }
}
reTest(re,str)