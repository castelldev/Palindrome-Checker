function palindrome(str) {
    // Good luck!
    let word = [];
    for(let char in str)
      if(str[char].match(/[a-zA-Z1-9]/g))
        word.push(str[char].toLowerCase());
        
    console.log(word.reverse().toString())
    return (word.toString() === word.reverse().toString()? true:false);
  }
  
  palindrome("level");