class Palindrome {
    constructor() {}

    isPalindrome(value) {
        let letters = [];
        let word = value;
        let rword = '';

        for (let i = 0; i < word.length; i++) {
            letters.push(word[i]);
        }

        for (let i = 0; i < word.length; i++) {
            rword += letters.pop(word[i]);
        }

        if (word === rword) {
            console.log(`"${word}" is palindrome`);
        }else{
            console.log(`"${word}" isn't palindrome`);
        }

    }
}

export default Palindrome;