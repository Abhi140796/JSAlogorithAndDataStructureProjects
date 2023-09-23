/**
 * Return true if the given string is a palindrome. Otherwise, return false.
 * A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
 * Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) 
 * and turn everything into the same case (lower or upper case) in order to check for palindromes.
 * We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.
 * We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
 */

function palindrome(str) {

    if (str) {
        // Remove punctuation from string and make string lowecase and spacing. 
        str = str.replace(/[\W_]/g, '').toLowerCase();
        let numberOfCharacters = str.length - 1;
        let isPalindrome = true;

        // If number of characters is one then we are not going to check it.
        if (numberOfCharacters > 1) {

            // We will use for loop here so that we can match starting string and ending string using indexes.
            for (let i = 0; i < numberOfCharacters / 2; i++) {
                if (str[i] !== str[numberOfCharacters - i]) {
                    isPalindrome = false;
                    break;
                }
            }
        }

        return isPalindrome;
    } else {
        return false;
    }

}

console.log(palindrome("0_0 (: /-\ :) 0-0"));