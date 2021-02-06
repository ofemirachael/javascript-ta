// complete the function
function palindrom(str) {
  var teststring = inputstring.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
 var countstring = 0;
 if(teststring==="") {
   console.log(" there are no string here");
   return false;
 }
 if ((teststring.length) % 2 === 0) {
   countstring = (teststring.length) / 2;
 } else {
   if (teststring.length === 1) {
     return 'It is a palindrome';
   } else {
     countstring = (teststring.length - 1) / 2;
   }
 }
 for (var x = 0; x < countstring; x++) {
   if (teststring[x] != teststring.slice(-1-x)[0]) {
     return 'It is not a palindrome';;
   }
 }
 return 'It is a palindrome';;
}

function solution(arg) {
  return palindrom(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };
