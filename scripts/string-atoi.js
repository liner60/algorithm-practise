/**
 * 
 */

function atoi(str) {
  var i = 0;
  var symbolReg = /[-+]/;
  var numReg = /[0-9]/;
  var matchStr = '';

  while(i <= str.length - 1) {
    if (symbolReg.test(str[i]) && numReg.test(str[i + 1])) {
      matchStr += str[i]
    }

    if (numReg.test(str[i])) {
      console.log('1111111', str[i]);
      matchStr += str[i]
    }
    console.log(matchStr, i, str[i]);
    i++;
    
  }
  
  return matchStr;
}

console.log(atoi('-00004344oooo'));



function atoi2() {
  var regx = /\s*([-\+]*[0-9]+).*/;
}