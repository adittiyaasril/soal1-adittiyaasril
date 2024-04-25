function isPalindrome(str) {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - i - 1]) {
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
}

isPalindrome("A");
isPalindrome("ABA");
isPalindrome("DEV");
isPalindrome("KODOK");
isPalindrome("RUMAH");
